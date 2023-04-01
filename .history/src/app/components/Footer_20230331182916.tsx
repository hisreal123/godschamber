import React from 'react'

export default function Footer() {
    return (
        <>
            <section classNameName=''>
            <footer className="top">
        <img src="logo.svg" />
        <div className="links">
          <div>
            <h2>Platform</h2>
            <a>Directus Core</a>
            <a>Open Data Platform</a>
            <a>Feature List</a>
            <a>Road Map</a>
            <a>Marketplace</a>
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
      <footer classNameName="bottom">
        <div classNameName="legal">
          <span> © 2023 All rights reserved </span>
          <a> License </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
        <div classNameName="links">
          <a classNameName="fa-brands fa-github"></a>
          <a class="fa-brands fa-linkedin"></a>
          <a className="fa-brands fa-docker"></a>
        </div>
      </footer>
            </section>
        </>
    )
}
