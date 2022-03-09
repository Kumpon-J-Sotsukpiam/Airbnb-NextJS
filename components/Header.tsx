import React, { Component } from 'react'
import Image from 'next/image'
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon
} from '@heroicons/react/solid';

export default class Header extends Component {
    render() {
        return (
            <header
                className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'
            >
                {/* Left */}
                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image
                        src='https://links.papareact.com/qd3'
                        layout='fill'
                        objectFit='contain'
                        objectPosition='left'
                    />
                </div>
                {/* Middle -Search */}
                <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                    <input
                        type="text"
                        placeholder='Start your search'
                        className='flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400' />
                    <SearchIcon
                        className='
                        hidden
                        md:inline-flex
                        md: mx-2
                        h-8 text-white rounded-full bg-red-400 p-2 cursor-pointer' />
                </div>
                {/* Right */}
                <div className='flex
                        items-center justify-end space-x-4 text-gray-500'
                >
                    <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
                    <GlobeAltIcon className='h-6 cursor-pointer' />
                    <div className='flex items-center space-x-2 border-2 p-2 rounded-full '>
                        <MenuIcon className='h-6' />
                        <UserCircleIcon className='h-6' />
                    </div>
                </div>
            </header>
        )
    }
}
