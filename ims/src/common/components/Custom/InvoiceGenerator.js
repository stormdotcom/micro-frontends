import React from "react";

const InvoiceGenerator = ({ invoiceData }) => {
    const generateInvoice = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/invoices/generate-pdf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(invoiceData)
            });

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${invoiceData.invoiceTo}_invoice.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error generating invoice:", error);
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Invoice</h2>
                <div className="mb-4">
                    <p><span className="font-semibold">Invoice No:</span> {invoiceData.invoiceNumber}</p>
                    <p><span className="font-semibold">Date:</span> {invoiceData.date}</p>
                    <p><span className="font-semibold">Invoice To:</span> {invoiceData.invoiceTo}</p>
                    <p><span className="font-semibold">Mob:</span> {invoiceData.mobile}</p>
                    <p><span className="font-semibold">Email:</span> {invoiceData.email}</p>
                    <p><span className="font-semibold">State:</span> {invoiceData.state}</p>
                    <p><span className="font-semibold">Code:</span> {invoiceData.code}</p>
                </div>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">SL. NO</th>
                            <th className="py-2 px-4 border-b">Item Name</th>
                            <th className="py-2 px-4 border-b">Gst%</th>
                            <th className="py-2 px-4 border-b">HSN No</th>
                            <th className="py-2 px-4 border-b">Qty</th>
                            <th className="py-2 px-4 border-b">Rate</th>
                            <th className="py-2 px-4 border-b">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.items.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b text-center">{item.slNo}</td>
                                <td className="py-2 px-4 border-b">{item.itemName}</td>
                                <td className="py-2 px-4 border-b text-center">{item.gst}</td>
                                <td className="py-2 px-4 border-b text-center">{item.hsnNo}</td>
                                <td className="py-2 px-4 border-b text-center">{item.qty}</td>
                                <td className="py-2 px-4 border-b text-right">{item.rate}</td>
                                <td className="py-2 px-4 border-b text-right">{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={generateInvoice}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Generate Invoice PDF
                </button>
            </div>
        </div>
    );
};

export default InvoiceGenerator;
