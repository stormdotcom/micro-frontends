import React from "react";
import { GridLoader as CustomLoader } from "react-spinners";
import { PROJECT_PROPS } from "../../../common/constants";

const Loader = (props) => {
  const { loaderProps, secondaryText = "Preparing your experience, please wait..." } = props;
  return (
    <div className="flex items-center flex-col justify-center h-full" style={{ height: "90vh" }}>
      <div className="text-center flex items-center gap-2">
        <CustomLoader {...loaderProps} color={"#4a4a4a"} />
        <p className="text-secondary text-3xl font-extrabold">{PROJECT_PROPS.BRAND.NAME}</p>
        <div>
        </div>
      </div>
      <p className="text-secondary text-sm mt-2"> {secondaryText} </p>
    </div>
  );
};

export default Loader;
