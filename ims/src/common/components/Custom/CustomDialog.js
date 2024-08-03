import React from 'react';
import logo from "../../../assets/images/hm_logo.png";
const CustomDialog = ({ isOpen, toggleDialog }) => {
    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div>
                <img src={logo} alt="brand_logo" style={{ height: "35px" }} />
            </div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50" onClick={toggleDialog}></div>
            <div className={`fixed top-0 left-0 h-full w-1/5 bg-bluePrimary shadow-lg z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 text-white">
                    <button onClick={toggleDialog} className="text-white mb-4">Close</button>
                    <p className="mb-4">Dialog Item 1</p>
                    <p className="mb-4">Dialog Item 2</p>
                    <p className="mb-4">Dialog Item 3</p>
                </div>
            </div>
        </div>
    );
};

export default CustomDialog;
