import React from 'react';
import Image from 'next/image';

const HomeLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="relative">

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 opacity-75 animate-pulse"></div>
                    <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-indigo-700 opacity-50 animate-ping"></div>
                    <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-indigo-800 opacity-25 animate-pulse"></div>
                </div>
                {/* Center Icon */}
                <div className="relative z-10">
                    <Image alt="logo" src="/assets/images/hm_logo.png" />
                </div>
            </div>
        </div>
    );
};

export default HomeLoader;
