"use client"
import React from 'react'
import { BannerPlace } from './animation/animations';

//animation
import { motion as m } from 'framer-motion'



type ABanner  = 
{
    caption : string
}
export default function ABanner({caption} : ABanner) {
    return (
        <>
            <section className="bg-[url('/assets/about.jpg')] bg-cover bg-no-repeat bg-center h-[500px] flex justify-center items-center ">
                <div className='px-3 md:px-5'>
                    <m.h1
                        variants={BannerPlace}
                        initial="hide"
                        animate="show"
                        transition={{ duration: 4, scale: '105', type: "spring", stiffness: 100 }} className='text-3xl  text-white font-bold md:text-4xl'>{caption}</m.h1>
                </div>
            </section>
        </>
    )
}
