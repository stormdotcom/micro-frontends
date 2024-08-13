import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
const SearchBar = ({ placeholder }) => {
    return (
        <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
                type="text"
                placeholder={placeholder}
                className="px-4 py-2 w-64 outline-none"
            />
            <button className=" text-white p-2">
                <SearchIcon className='text-black w-6 h-6' />
            </button>
        </div>
    );
};

export default SearchBar;
