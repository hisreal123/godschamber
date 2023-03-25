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
        <div className="CardWrapper">
          <Cards imgSrc="" />
        </div>
      </div>
    </>
  )
}
