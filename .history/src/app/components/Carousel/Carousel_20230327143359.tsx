import React from 'react'
import Image from 'next/image'
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
            <section className=' overflow-hidden mb-10' >
                <div className=" imgWrapper  relative min:h-full  md:m-auto rounded-lg shadow-lg bg-red-200">
                    <div className='relative h-full '>
                        <Image
                            key={current}
                            src={imageData[current].imgSrc}
                            height={300}
                            width={600}
                            alt=" image 1"
                            object-fit="cover"
                        />

                        <span className='text-xl cursor-pointer absolute z-30 top-1/2 bg-white/90 rounded-full ml-2' onClick={swipleft}>{left}</span>
                        <span className='text-xl cursor-pointer absolute z-30 top-1/2 bg-white/90 rounded-full mr-2 right-0 rotate-180' onClick={swipRight}>{left}</span>
                    </div>
                </div>
            </section>
        </>
    )
}
