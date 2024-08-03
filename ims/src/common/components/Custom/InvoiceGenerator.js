import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { PDFDocument } from 'pdf-lib';
import JSZipUtils from 'jszip-utils';

const InvoiceGenerator = () => {
    const [invoiceData, setInvoiceData] = useState({
        customerName: 'John Doe',
        invoiceNumber: '12345',
        invoiceDate: '2024-08-04',
        customerPhone: '1234567890',
        customerEmail: 'john.doe@example.com',
        items: [
            { description: 'Widget', gst: 18.00, hsn: '1234', quantity: 2, price: 10.00, amount: 20.00 },
            { description: 'Gadget', gst: 18.00, hsn: '5678', quantity: 1, price: 15.00, amount: 15.00 }
        ],
        totalQty: 3,
        totalAmount: 35.00,
        otherCharges: 0.00,
        netAmount: 35.00,
        amountInWords: 'Thirty-five dollars only',
        cgst: 0.00,
        sgst: 0.00,
        roundOff: 0.00
    });

    const loadFile = (url, callback) => {
        JSZipUtils.getBinaryContent(url, callback);
    };

    const generateInvoice = () => {
        loadFile('/invoice_template.docx', async (error, content) => {
            if (error) {
                throw error;
            }

            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

            doc.setData(invoiceData);

            try {
                doc.render();
            } catch (error) {
                console.error('Error rendering document:', error);
                if (error.properties && error.properties.errors instanceof Array) {
                    error.properties.errors.forEach(err => {
                        console.error('Template error:', err);
                    });
                }
                return;
            }

            const docxBlob = doc.getZip().generate({ type: 'blob' });

            const reader = new FileReader();
            reader.readAsArrayBuffer(docxBlob);
            reader.onload = async () => {
                const arrayBuffer = reader.result;
                const pdfDoc = await PDFDocument.create();
                const embeddedPdf = await PDFDocument.load(arrayBuffer);
                const [embeddedPage] = await pdfDoc.embedPages([embeddedPdf.getPage(0)]);

                const page = pdfDoc.addPage([600, 800]);
                const { height } = page.getSize();

                page.drawPage(embeddedPage, { x: 0, y: height - 800 });

                const finalPdfBytes = await pdfDoc.save();
                const pdfBlob = new Blob([finalPdfBytes], { type: 'application/pdf' });

                saveAs(pdfBlob, `${invoiceData.customerName.split(" ")[0]}_invoice.pdf`);
            };
        });
    };

    return (
        <div>
            <button onClick={generateInvoice} className="bg-blue-500 text-white p-2 rounded">
                Generate Invoice
            </button>
        </div>
    );
};

export default InvoiceGenerator;
