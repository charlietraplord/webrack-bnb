'use client';

import { BiSearch } from 'react-icons/bi';
import React from 'react';

const Search = () => {
  return (
    <div
    className='
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer'>
    <div
    className='
    flex
    flex-row
    items-center
    justify-between'>
        <div
        className='
        text-sm
        font-semibold
        px-6'>
That
        </div>
        <div
        className='
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center'>
This
        </div>
        <div
        className='
        text-sm
        pl-6
        pr-2
        text-gray-600
        flex
        flex-row
        item-center
        gap-3'>
            <div className='hidden sm:block'>Search for this</div>
            <div 
            className='
            p-2
            bg-blue-500
            rounded-full
            text-white
            '>
                <BiSearch size={16}/>
            </div>

        </div>
    </div>

    </div>
  )
}

export default Search;