import React from "react";
import AccountMenu from "../../../modules/common/components/AvatarMenu/AccountMenu";
import { useNavigate } from "react-router-dom";
import PROJECT_PROPS from "../../../../projectconfig";

import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

import { actions } from "../../../modules/user/home/slice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => dispatch(actions.setMenuOpen(true));
  return (
    <header className="z-10 w-full h-18 sticky top-0 bg-primary border-b border-gray-300 shadow-b-md flex items-center px-4">
      <div className="mx-1 flex cursor-pointer" onClick={handleOpen}>
        <Squares2X2Icon className="w-8 h-8 text-black border rounded-lg border-primary" />
      </div>
      <div className="flex items-center w-5/12 mr-1">
        <div className="cursor-pointer" onClick={() => navigate("../home/dashboard")}>

          <p className="text-[12px] sm:text-[10px] md:text-[12px] font-bold  text-black">
            {PROJECT_PROPS.title}
          </p>
        </div>
      </div>
      <div className="flex justify-start w-full">

      </div>
      <div className="flex justify-end items-center space-x-4 w-11/12">
        <div className="hidden sm:block">
          {/* <NotificationBanner /> */}
        </div>
        <AccountMenu />
      </div>
    </header>
  );
};

export default Header;
