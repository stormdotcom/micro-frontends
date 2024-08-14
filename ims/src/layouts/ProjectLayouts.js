import React from "react";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import LeftSideMenu from "../common/components/Custom/LeftSideMenu";

const ProjectLayouts = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <LeftSideMenu />
      <div className="flex justify-between h-half">
        <div className="flex-grow overflow-x-auto flex flex-col justify-between h-[calc(100vh-88px)] w-full overflow-y-auto">
          <div className="bg-primary-main flex-grow">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectLayouts;
