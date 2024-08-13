
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { PDFDocument } from 'pdf-lib';

export const generateInvoice = async () => {
    try {
        const response = await fetch('/invoice_template.docx');
        const content = await response.arrayBuffer();

        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });
        doc.setData(invoiceData);
        doc.render();

        const out = doc.getZip().generate({
            type: 'blob',
            mimeType:
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });

        const pdfBytes = await convertDocxToPdf(out);
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

        saveAs(pdfBlob, `${invoiceData.invoiceTo}_invoice.pdf`);
    } catch (error) {
        console.error('Error generating invoice:', error);
    }
};