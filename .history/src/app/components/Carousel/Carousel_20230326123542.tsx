import React from 'react'
import Image from 'next/legacy/image'


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
    return (
        <>
            <section>
                <h1>
                    Carousel
                </h1>

                <div className="imgWrapper bg-red-300">
                    <Image
                        src={imageData[1].imgSrc}
                        width={100}
                        height={100}
                        alt=" image 1"
                    />
                </div>
            </section>
        </>
    )
}
