import { motion as m } from 'framer-motion'
import React from 'react'
import { BannerPlace } from '../animation/animations'


export default function Carousel() {
    return (
        <>
            <div className='Container px-5'>
                <m.h1 variants={BannerPlace} sho> Carousel</m.h1>
            </div>
        </>
    )
}
