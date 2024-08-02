import React from "react";

const SearchPopSkelton = ({ length }) => {
    return (
        <div className="absolute mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="py-1">
                {Array.from({ length: length }).map((_, index) => (
                    <li key={index} className="px-1 py-2 flex items-center gap-1 animate-pulse">
                        <div className="flex justify-center items-center">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="px-1 flex-1">
                            <div className="h-4 bg-gray-200 w-[1/2] rounded mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded"></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPopSkelton;
