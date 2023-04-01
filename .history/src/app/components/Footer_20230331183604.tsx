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
                            <Link href="/"></Link>
                        </div>
                        <div>
                            <h2>Cloud</h2>
                            <a>Dashboard</a>
                            <a>Register</a>
                            <a>Pricing</a>
                            <a>System Status</a>
                            <a>Partner Program</a>
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
