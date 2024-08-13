"use client";
import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { links } from './Navigation';

const MobileHeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative md:hidden">
            {/* Menu Button */}
            <div onClick={toggleMenu} className="cursor-pointer">
                {isOpen ? (
                    <XIcon className="w-8 h-8 text-black" />
                ) : (
                    <MenuIcon className="w-8 h-8 text-black" />
                )}
            </div>

            {/* Full-Screen Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-white">
                    <div className="flex justify-between items-center p-4">
                        {/* Close Button */}
                        <XIcon className="w-8 h-8 text-black cursor-pointer" onClick={toggleMenu} />
                    </div>
                    <div className="flex flex-col items-start justify-start p-8 space-y-4">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="w-full text-left text-xl font-medium text-gray-700 border-b py-4"
                            >
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileHeaderMenu;
