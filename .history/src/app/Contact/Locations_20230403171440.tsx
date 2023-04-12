import React from 'react'


export default function Locations() {
    return (
        <>
            <section>
                <h1> Service Times & Locations
                </h1>

                <div className="grid">
                    <div className="wrap">
                        <h2> Oregun Centre</h2>

                        <div className="address">

                            <p>
                                Daystar Christian centre
                                Plot A3C, Ikosi Road, Oregun,
                                Lagos, Nigeria.
                                Daystar Christian centre
                            </p>

                            <div className="">
                                <p className='font-normal '> Wednesday - Online Service(Teaching/Communion) : <span className='font-light'>6pm</span></p>
                                <p className='font-normal '> Sunday Service : <span className='font-light'>7:00am, 9:00am & 11:00</span></p>
                                <p className='font-normal '>  : <span className='font-light'>5pm/6pm</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
