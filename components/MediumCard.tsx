import type { NextPage } from 'next'
import Image from 'next/image';

export interface card_data_interface {
    img: string;
    title: string;
}

const MediumCard: NextPage<card_data_interface> = ({ img, title }: card_data_interface) => {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            {/* top */}
            <div className='relative h-80 w-80'>
                <Image
                    src={img}
                    layout='fill'
                    className='rounded-lg'
                />
            </div>
            {/* bottom */}
            <div>
                <h3 className='text-2xl mt-3'>{title}</h3>
            </div>
        </div>
    )
}

export default MediumCard