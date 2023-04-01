import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <section className='bg-gray-800 text-white/70 py-10 px-5 '>
                <div className='md:w-[80%] md:mx-auto'>
                    <footer className="relative w-full ">
                        <div className="relative md:flex">
                            <div className='flex flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2'>About</h2>
                                <Link href="/">Vision</Link>
                                <Link href="/">Core Values</Link>
                                <Link href="/">Academy</Link>
                                <Link href="/">History</Link>
                                <Link href="/">Leadership</Link>
                            </div>
                            <div className='flex flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2'>Connect</h2>
                                <Link href="/">Locations</Link>
                                <Link href="/">Home Fellowship</Link>
                                <Link href="/">Events</Link>
                                <Link href="/">StarHun</Link>
                                <Link href="/">Junior Church </Link>
                            </div>
                            <div className='flex flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2'>Watch</h2>
                                <Link href="/">Online Church </Link>
                                <Link href="/">Sermons</Link>
                                <Link href="/">Reflexion</Link>
                                <Link href="/">Worship</Link>
                                <Link href="/">Community impact </Link>
                            </div>
                            <div className='flex flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2'>Care</h2>
                                <Link href="/">Ministries </Link>
                                <Link href="/">Fellowship</Link>
                                <Link href="/">Service units</Link>

                            </div>
                            <div className='flex flex-col space-y-1 mb-10 md:mb-0'>
                                <h2 className='text-3xl font-light mb-2' >Give</h2>
                                <Link href="/">Giving </Link>
                                <Link href="/">Encouraging Story</Link>
                                <Link href="/">Giving Impact</Link>
                                <Link href="/">Giving Option</Link>
                            </div>
                        </div>
                    </footer>
                    {/*  <footer className='media'>
                    <div className="links">
                        <a className="fa-brands fa-github"></a>
                        <a className="fa-brands fa-linkedin"></a>
                        <a className="fa-brands fa-docker"></a>
                    </div>
                </footer> */}
                    <footer className="bottom">
                        <div className="legal text-xs">
                            <span> © 2023 All rights reserved </span>
                            <a> License </a>
                            <a> Terms </a>
                            <a> Privacy </a>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}
