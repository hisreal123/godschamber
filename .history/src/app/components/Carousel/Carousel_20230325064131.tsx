import { motion as m } from 'framer-motion'
import React from 'react'

const variant = {
    hide: {opacity : 0 }
    show: {
        animate : {
            opacity: 
        }
    }
}
export default function Carousel() {
    return (
        <>
            <div className='Container'>
                <m.h1 variants={variant}> Carousel</m.h1>
            </div>
        </>
    )
}
