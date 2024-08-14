import React from "react";

import InvoiceGenerator from "../../../../common/components/Custom/InvoiceGenerator";
import { INVOICE_DATA } from "../constants";

const HomeWrapper = () => {


  return (
    <div className="py-3">

      <InvoiceGenerator invoiceData={INVOICE_DATA} />
    </div>
  );
};

export default HomeWrapper;
