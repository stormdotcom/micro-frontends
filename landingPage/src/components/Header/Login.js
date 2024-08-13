import React from 'react'
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/outline';
const Login = () => {
    return (
        <div className="flex space-x-6 items-center">
            <a href="#" className="flex items-center space-x-2 hover:text-gray-700">
                <UserIcon className='text-black w-6 h-6' />
                <span>Login</span>
            </a>
            <a href="#" className="hover:text-gray-700">
                <ShoppingCartIcon className='text-black w-6 h-6' />
            </a>
        </div>
    )
}

export default Login