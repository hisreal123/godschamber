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


export default function Carousel({ imageData }) {

    const [current, setCurrent] = React.useState(0)

    const swipleft = () => {
        const isFirst = current === 0;
        const newIndex = isFirst ? imageData.length - 1 : current - 1;
        setCurrent(current)
    }

    return (
        <>
            <section>
                <h1>
                    Carousel
                </h1>

                <div className="imgWrapper bg-red-300 h-[300px] relative ">

                    <span className='text-xl cursor-pointer' onClick={swipleft}>{left}</span>

                    {imageData.map(( image, index) => (
                        
                    )) }
                    <Image
                        src={imageData[current].imgSrc}
                        width={100}
                        height={100}
                        alt=" image 1"
                        object-fit="cover"
                    />
                </div>
            </section>
        </>
    )
}
