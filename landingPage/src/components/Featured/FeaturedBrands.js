import Image from 'next/image';
import React from 'react';

const brands = [
    {
        name: 'Oppo',
        image: '/assets/images/brands/oppo.png',
    },
    {
        name: 'Samsung',
        image: '/assets/images/brands/real-me.png',
    },
    {
        name: 'Realme',
        image: '/assets/images/brands/samsung.png',
    },
];

const FeaturedBrands = () => {
    return (
        <div className="bg-white py-8 px-2">
            <h3 className="text-2xl font-extrabold"> Brands Associated with us</h3>
            <div className="container mx-auto flex justify-around items-center space-x-8">
                {brands.map((brand, index) => (
                    <div key={index} className="flex justify-center items-center border border-1">
                        <Image height={80} width={100} src={brand.image} alt={brand.name} className="m-4" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBrands;
