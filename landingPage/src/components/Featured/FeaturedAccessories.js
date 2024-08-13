/* eslint-disable @next/next/no-img-element */
import React from 'react';

const FeaturedAccessories = () => {
    return (
        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-between mx-2 my-3">
            <h3 className="text-3xl font-bold text-black w-full">Best Selling Accessories</h3>
            <div>
                <h2 className="text-3xl font-bold text-black">Harman Kardon Onyx</h2>
                <p className="text-gray-600 mt-2">Harman Kardon Onyx: Elevate your sound experience with rich, powerful audio in a sleek, portable design</p>
                <div className="mt-4">
                    <p className="text-sm text-gray-500">FROM</p>
                    <p className="text-4xl font-bold text-black">₹69,000</p>
                </div>
                <div className="mt-6">

                </div>
            </div>
            <div className="hidden lg:block">
                <img
                    src="/assets/images/accessories/best-selling.png"
                    alt="Bose Bluetooth Wireless Headphones"
                    className="w-80 h-auto object-cover"
                />
            </div>
        </div>
    );
}

export default FeaturedAccessories;
