import Image from 'next/image';
import React from 'react';

const services = [
    {
        title: 'Software Repair',
        description: 'Explore',
        image: '/assets/images/services/mobile-software.png',
        link: '/services/software-repairing',
        bgColor: '#f8f7f1'
    },
    {
        title: 'Water Damage',
        description: 'Explore',
        image: '/assets/images/services/water.png',
        link: '/services/water-damage-repair',
        bgColor: '#F5F5FB'
    },
    {
        title: 'Display Replacement',
        description: 'Explore',
        image: '/assets/images/services/display.png',
        link: '/services/display-touch-replacement',
        bgColor: '#F1F9F4'
    },
    {
        title: 'Laptop Service',
        description: 'Explore',
        image: '/assets/images/services/laptop.png',
        link: '/services/laptop-service',
        bgColor: '#F5F5F7'
    },
];

const Services = () => {
    return (
        <div className="container mx-auto py-12">
            <h3 className='font-extrabold text-2xl pb-3'>Service Repairs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} style={{ backgroundColor: service.bgColor }} className="relative  rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                            <a
                                href={service.link}
                                className="inline-block mt-4 text-black font-medium hover:underline"
                            >
                                Explore
                            </a>
                        </div>
                        <div className="absolute inset-y-0 right-0">
                            <Image
                                width={100}
                                height={100}
                                src={service.image}
                                alt={service.title}

                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
