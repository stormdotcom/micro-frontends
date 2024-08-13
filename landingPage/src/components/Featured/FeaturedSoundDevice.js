/* eslint-disable @next/next/no-img-element */
import React from 'react';

const FeaturedSoundDevice = () => {
    return (
        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-between mx-2 my-3">
            <div>
                <h2 className="text-3xl font-bold text-black">Bose Bluetooth Wireless Headphones</h2>
                <p className="text-gray-600 mt-2">Crisp powerful sound from the best sounding wireless headphone in its class</p>
                <div className="mt-4">
                    <p className="text-sm text-gray-500">FROM</p>
                    <p className="text-4xl font-bold text-black">₹69,000</p>
                </div>
                <div className="mt-6">

                </div>
            </div>
            <div className="hidden lg:block">
                <img
                    src="https://m.media-amazon.com/images/I/51K77J9rCjL._AC_UF1000,1000_QL80_.jpg"
                    alt="Bose Bluetooth Wireless Headphones"
                    className="w-80 h-auto object-cover"
                />
            </div>
        </div>
    );
}

export default FeaturedSoundDevice;
