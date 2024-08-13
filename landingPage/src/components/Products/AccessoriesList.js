import React from 'react'
import ProductCard from './ProductCard';
import accessories from '@/data/products/accessories';

const AccessoriesList = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {accessories.slice(0, 5).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AccessoriesList;