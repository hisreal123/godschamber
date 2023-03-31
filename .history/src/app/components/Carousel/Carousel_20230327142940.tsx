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
            <section className='h-[400px] bg-red-200 overflow-hidden mb-10' >
                <div className="imgWrapper bg-red-300 relative h-full md:w-[600px] md:m-auto">
                    <div className='relative'>
                        <span className='text-xl cursor-pointer absolute z-30 top-1/2 bg-white/90 rounded-full ml-2' onClick={swipleft}>{left}</span>
                        
                        <Image
                            key={current}
                            src={imageData[current].imgSrc}
                            height={300}
                            width={600}
                            alt=" image 1"
                            object-fit="cover"
                        />
                    </div>
                    
                </div>
            </section>
        </>
    )
}
