// components/Navigation.js
import React from 'react';
export const links = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Shop' },
    { href: '#', text: 'Blog' },
    { href: '#', text: 'Others' },
];
const Navigation = ({ }) => {


    return (
        <nav className="flex space-x-6">
            {links.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-gray-700">
                    {link.text}
                </a>
            ))}
        </nav>
    );
};

export default Navigation;
