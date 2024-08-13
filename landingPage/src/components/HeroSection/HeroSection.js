import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/images/home-v2.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    quality={30}
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:px-8">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold sm:text-5xl">
                        Your Trusted Local Mobile Hub: Expert Repairs & Top-Brand Sales
                    </h1>
                    <a
                        href="tel:+919562440770"
                        className="inline-block mt-8 px-8 py-4 bg-primary text-black font-semibold rounded hover:bg-black hover:text-primary hover:border hover:border-primary transition"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
