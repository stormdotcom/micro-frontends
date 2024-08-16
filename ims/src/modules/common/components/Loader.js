import React from "react";
import { PulseLoader as CustomLoader } from "react-spinners";
import PROJECT_PROPS from "../../../../projectconfig";
import logo from "../../../assets/images/hm_logo.png";

const Loader = (props) => {
  const { loaderProps, secondaryText = "Setting up configuration. Please wait..." } = props;
  return (
    <div className="flex items-center flex-col justify-center h-full" style={{ height: "90vh" }}>
      <div className="text-center flex items-center gap-2 flex-col">
        <img src={logo} alt="logo" height={30} width={30} />
        <CustomLoader {...loaderProps} color={"#F6EB16"} />
        <p className="text-black text-3xl font-extrabold relative top-[-28px] z-10 tracking-wide">{PROJECT_PROPS.BRAND}</p>
        <p className="text-black text-sm"> {secondaryText} </p>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
