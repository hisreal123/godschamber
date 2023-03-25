import React, { lazy } from 'react'


const cards = lazy( () => import('./CardsComponents'))

export default function HopeCards() {
  return (
    <>
        <div className="wrapper px-5 ">

            <div className="top">
               <h1>HOPE FOR TODAY</h1> 
                <p className=' italic'>Inspiring resources to become a better you.</p>
            </div>
             .wrapper
        </div>
    </>
  )
}
