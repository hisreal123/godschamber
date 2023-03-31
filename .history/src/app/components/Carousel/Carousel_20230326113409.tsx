import React from 'react'


// for animation
// import { motion as m } from 'framer-motion'
// import { BannerPlace } from '../animation/animations'
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel() {
    return (
        <>
            <Swiper className="mySwiper">
                <SwiperSlide>Slide A</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}
