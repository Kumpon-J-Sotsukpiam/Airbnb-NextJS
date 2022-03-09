import type { NextPage } from 'next'
import Image from 'next/image';

export interface explore_data_interface {
    img: string;
    location: string;
    distance: string;
}

const SmallCard: NextPage<explore_data_interface> = ({ img, location, distance }: explore_data_interface) => {
    return (
        <div
            className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
            hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out
        '>
            {/* Left */}
            <div className='relative h-16 w-16'>
                <Image
                    src={img}
                    layout='fill'
                    className='rounded-lg'
                />
            </div>
            {/* Right */}
            <div className=''>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard