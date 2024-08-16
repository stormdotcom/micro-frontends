import React from "react";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import SidebarPro from "../common/components/Custom/SidebarPro";
import { menu } from "./menu";

const ProjectLayouts = ({ children }) => {
  return (
    <div className="app">
      <div className="min-h-screen w-full">
        <Header />
        <div className="flex justify-between h-half">
          <SidebarPro menu={menu} />
          <div className="flex-grow overflow-x-auto flex flex-col justify-between h-[calc(100vh-88px)] w-full overflow-y-auto">
            <div className="bg-primary-main flex-grow">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
};

export default ProjectLayouts;
