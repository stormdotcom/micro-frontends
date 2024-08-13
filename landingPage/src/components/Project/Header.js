import Image from 'next/image';
import React from 'react';
import MobileHeader from '../Header/MobileHeaderMenu';


const Header = ({ NavigationComponent, SearchBarComponent, LoginComponent }) => {
    return (
        <header className="bg-primary text-black py-2">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Mobile Menu Icon */}
                <MobileHeader />

                {/* Logo and Brand */}
                <div className="flex items-center space-x-2">
                    <Image alt="logo" src="/assets/images/hm_logo.png" width={30} height={30} />
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="bg-black text-white rounded-full p-2">
                            <span className="text-xl font-bold">Hotspot</span>
                        </div>
                        <span className="text-2xl font-extrabold">Mobiles</span>
                    </div>
                </div>

                {/* Navigation */}
                <div className="hidden md:block">
                    {NavigationComponent && <NavigationComponent />}
                </div>

                {/* Search Bar */}
                <div className="hidden md:block">
                    {SearchBarComponent && <SearchBarComponent />}
                </div>

                {/* Login or other components */}
                <div className="hidden md:block">
                    {LoginComponent && <LoginComponent />}
                </div>
            </div>
        </header>
    );
};

export default Header;
