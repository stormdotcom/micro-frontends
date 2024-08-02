import React from "react";
import Search from "../../../modules/common/components/Search";
import NotificationBanner from "../../../modules/common/components/NotificationBanner";
import { PROJECT_PROPS } from "../../constants";
import AccountMenu from "../../../modules/common/components/AvatarMenu/AccountMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="z-10 w-full h-20 sticky top-0 bg-primary-light border-b border-gray-300 shadow-b-md flex items-center px-4">
      <div className="flex items-center w-4/12 mr-1">
        <div className="cursor-pointer" onClick={() => navigate("../home/dashboard")}>
          <p className="text-[18px] sm:text-[20px] md:text-[28px] font-bold text-secondary">
            {PROJECT_PROPS.BRAND.NAME}
          </p>
        </div>
      </div>
      <div className="flex justify-start w-full">
        <Search />
      </div>
      <div className="flex justify-end items-center space-x-4 w-11/12">
        <div className="hidden sm:block">
          <NotificationBanner />
        </div>
        <AccountMenu />
      </div>
    </header>
  );
};

export default Header;
