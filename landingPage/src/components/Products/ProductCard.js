/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            <div className="flex justify-center">
                <img
                    height={100}
                    width={100}
                    src={product.image}
                    alt={product.title}
                    className="h-32 w-auto object-cover"
                />
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
            </div>
            <div className="mt-4">
                <a
                    href={product.link}
                    className="inline-block w-full text-center bg-primary text-black font-semibold py-2 rounded hover:bg-black hover:text-primary transition"
                >
                    See Product
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
