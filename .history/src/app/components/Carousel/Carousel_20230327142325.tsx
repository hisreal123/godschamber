import React from 'react'
import Image from 'next/legacy/image'
import { left } from '../SvgIcons/SvgIcons'

const imageData = [
    {
        title: ' First',
        imgSrc: '/assets/img1.jpg'
    },
    {
        title: ' Second',
        imgSrc: '/assets/img2.jpg'
    },
]



export default function Carousel() {

    const [current, setCurrent] = React.useState(0)

    const swipleft = () => {
        const isFirst = current === 0;
        const newIndex = isFirst ? imageData.length - 1 : current - 1;
        setCurrent(newIndex)
    }
    const swipRight = () => {
        const isFirst = current === 0;
        const newIndex = isFirst ? imageData.length - 1 : current - 1;
        setCurrent(newIndex)
    }


    return (
        <>
            <section className='h-[300px] bg-red-200 overflow-hidden mb-10' >
                <div className="imgWrapper bg-red-300 relative h-full md:w-[600px] md:m-auto">
                    <div className='relative'>
                        <span className='text-xl cursor-pointer absolute z-30 top-[50%] bg-white/90 rounded-full ml-2' onClick={swipleft}>{left}</span>
                        <Image
                            key={current}
                            src={imageData[current].imgSrc}
                            height={100}
                            width={100}
                            layout="responsive"
                            alt=" image 1"
                            object-fit="cover"
                            style={{ height: ' 100% ', 
                            width: 'fit', objectFit:'cover', position: ce }}
                        />
                    </div>
                    <span className='text-xl cursor-pointer absolute z-30 top-[50%] bg-white/90 rounded-full mr-2 right-0 rotate-180' onClick={swipRight}>{left}</span>
                </div>
            </section>
        </>
    )
}
