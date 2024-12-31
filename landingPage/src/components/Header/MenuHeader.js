"use client";
import { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
    MenuIcon,
    FireIcon,
    DesktopComputerIcon,
    CameraIcon,
    DeviceMobileIcon,
    MusicNoteIcon,
} from '@heroicons/react/outline';
import { SmartWatch } from '../Icons';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const menuItems = [
    { label: 'Top Deals', icon: FireIcon },
    { label: 'Computers Accessories', icon: DesktopComputerIcon },
    { label: 'Cameras', icon: CameraIcon },
    { label: 'Phones', icon: DeviceMobileIcon },
    { label: 'Headphones', icon: MusicNoteIcon },
    { label: 'Smart Watch', icon: SmartWatch },
];

const categories = [
    { label: 'Computers & Tablets', icon: DesktopComputerIcon },
    { label: 'Cameras', icon: CameraIcon },
    { label: 'Cell Phones', icon: DeviceMobileIcon },
    { label: 'Audio', icon: MusicNoteIcon },
    // Add more categories as needed
];

const MenuHeader = () => {
    // 1) State to control whether the maintenance banner is shown
    const [showMaintenanceBanner, setShowMaintenanceBanner] = useState(true);

    // 2) useEffect that triggers the banner after 1 second
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMaintenanceBanner(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* The rest of your MenuHeader code */}
            <div className="bg-white border-b hidden md:block z-10">
                <div className="container mx-auto flex items-center justify-between py-4">
                    {/* All Categories Dropdown */}
                    <Menu as="div" className="relative ">
                        <Menu.Button className="flex items-center space-x-2 border-b-2 border-transparent hover:border-primary py-2 relative">
                            <MenuIcon className="w-6 h-6" />
                            <span>All Categories</span>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {categories.map((item, index) => (
                                        <Menu.Item key={index}>
                                            {({ active }) => (
                                                <div
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                        'flex items-center px-4 py-4 text-sm'
                                                    )}
                                                >
                                                    <a className='pb-2 flex' href="#">
                                                        <item.icon className="w-5 h-5 mr-2" />
                                                        {item.label}
                                                    </a>
                                                </div>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    {/* Other Menu Items */}
                    <div className="flex space-x-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="border-b-2 border-transparent hover:border-primary relative"
                            >
                                <a href="#" className="pb-2 flex items-center space-x-2">
                                    <item.icon className="w-6 h-6" />
                                    <span>{item.label}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3) The Maintenance Banner */}
            {showMaintenanceBanner && (
                <div className="fixed top-15 right-5 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 z-50 rounded shadow">
                    <p className="font-bold">Site Under Maintenance</p>
                    <p className="text-sm">
                        We’re currently performing some updates. Please check back soon.
                    </p>
                </div>
            )}
        </>
    );
};

export default MenuHeader;
