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
        <div className="CardWrapper grid grid-cols-1 w-full ">
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle="flex flex-col bg-red-200 overflow-hidden h-40 w-fu" topStyle='' btmStyle='' textStyle='' />
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle=" " topStyle='' btmStyle='' textStyle='' />
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle=" " topStyle='' btmStyle='' textStyle='' />
          <Cards imgSrc="/assets/img1.jpg" text="Get Inspired:Message Series" alt=" Get inspired" mainStyle=" " topStyle='' btmStyle='' textStyle='' />
        </div>
      </div>
    </>
  )
}
