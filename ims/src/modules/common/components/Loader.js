import React from "react";
import { PulseLoader as CustomLoader } from "react-spinners";
import PROJECT_PROPS from "../../../../projectconfig";
import logo from "../../../assets/images/hm_logo.png";

const Loader = (props) => {
  const { loaderProps, secondaryText = "Setting up configuration. Please wait..." } = props;
  return (
    <div className="flex items-center flex-col justify-center h-full" style={{ height: "90vh" }}>
      <div className="text-center flex items-center gap-2 flex-col">
        <CustomLoader {...loaderProps} color={"#4a4a4a"} />
        <img src={logo} alt="logo" height={30} width={30} />
        <p className="text-black text-3xl font-extrabold relative top-[-25px] z-10 text">{PROJECT_PROPS.BRAND}</p>
        <div>
        </div>
      </div>
      <p className="text-black text-sm mt-2"> {secondaryText} </p>
    </div>
  );
};

export default Loader;
