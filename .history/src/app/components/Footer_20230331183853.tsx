import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <section className=''>
                <footer className="top">
                    <img src="logo.svg" />
                    <div className="links">
                        <div>
                            <h2>About</h2>
                            <Link href="/">Vision</Link>
                            <Link href="/">Core Values</Link>
                            <Link href="/">Academy</Link>
                            <Link href="/">History</Link>
                            <Link href="/">Leadership</Link>
                        </div>
                        <div>
                            <h2>Connect</h2>
                            <Link href="/">Locations</Link>
                            <Link href="/">Home Fellowship</Link>
                            <Link href="/">Events</Link>
                            <Link href="/">Locations</Link>
                            <Link href="/">Locations</Link>
                        </div>
                    </div>
                </footer>
                <footer className="bottom">
                    <div className="legal">
                        <span> © 2023 All rights reserved </span>
                        <a> License </a>
                        <a> Terms </a>
                        <a> Privacy </a>
                    </div>
                    <div className="links">
                        <a className="fa-brands fa-github"></a>
                        <a className="fa-brands fa-linkedin"></a>
                        <a className="fa-brands fa-docker"></a>
                    </div>
                </footer>
            </section>
        </>
    )
}
