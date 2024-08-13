import React, { useEffect } from "react";
import RecentActivities from "./RecentActivities";
import CourseStats from "./CourseStats";
import CourseList from "./CourseList/Index";
import { useDispatch } from "react-redux";
import { dashboard, learningProgress } from "../actions";
import InvoiceGenerator from "../../../../common/components/Custom/InvoiceGenerator";
import { INVOICE_DATA } from "../constants";

const HomeWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboard());
    dispatch(learningProgress());
  }, [dispatch]);

  return (
    <div className="py-3">
      <div className="pt-3 pb-5 px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-4">
          <div className="bg-surface rounded-lg col-span-1 md:col-span-2 lg:col-span-7 border-2 border-b border-light-border px-2 py-3">
            <CourseStats />
          </div>
          <div className="bg-surface rounded-lg col-span-1 md:col-span-1 lg:col-span-3 border-2 border-b border-light-border px-2 py-3">
            <RecentActivities />
          </div>
        </div>
      </div>
      <InvoiceGenerator invoiceData={INVOICE_DATA} />
    </div>
  );
};

export default HomeWrapper;
