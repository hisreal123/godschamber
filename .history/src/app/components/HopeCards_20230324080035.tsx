import React, { lazy } from 'react'


const Cards = lazy(() => import('./CardsComponents'))

export default function HopeCards() {
  return (
    <>
      <div className="wrapper px-5 relative z-0">

        <div className="top">
          <h1>HOPE FOR TODAY</h1>
          <p className=' italic'>Inspiring resources to become a better you.</p>
        </div>
        <div className="CardWrapper grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle="flex flex-col bg-white overflow-hidden  w-full " topStyle='' btmStyle=' py-4  px-2 ' textStyle='text-lg text-red-300 ' />
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle=" " topStyle='' btmStyle='' textStyle='' />
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle=" " topStyle='' btmStyle='' textStyle='' />
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle=" " topStyle='' btmStyle='' textStyle='' />
        </div>
      </div>
    </>
  )
}
