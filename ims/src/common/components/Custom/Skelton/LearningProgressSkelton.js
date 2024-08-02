import React from "react";

const LoadingSkeleton = () => {
    return (
        <div className="mt-6">
            <p className="text-lg font-semibold mb-2">Learning Goals</p>
            {[...Array(3)].map((_, index) => (
                <div key={index} className="flex justify-between items-center mb-2 animate-pulse">
                    <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-12"></div>
                </div>
            ))}
            <p className="text-lg font-semibold mt-4 mb-2">Summary</p>
            {[...Array(2)].map((_, index) => (
                <div key={index} className="flex justify-between items-center mb-2 animate-pulse">
                    <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-12"></div>
                </div>
            ))}
        </div>
    );
};

export default LoadingSkeleton;
