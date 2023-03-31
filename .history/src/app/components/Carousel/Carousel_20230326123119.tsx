import React from 'react'
import img from './assets/img1.jpg'
import Image from 'next/legacy/image'

export default function Carousel() {
    return (
        <>
            <section>
                <h1>
                    Carousel
                </h1>

                <div className="imgWrapper">
                    <Image 
                    src="./assets/img1.jpg" 
                    width={100} 
                    height={100} 
                    alt=" image 1"
                    />
                </div>
            </section>
        </>
    )
}
