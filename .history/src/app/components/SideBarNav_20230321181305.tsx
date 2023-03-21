import React from "react";


type SideBarNavProps = {
    toggleSideBar : () => { }
}

export function SideBarNav({toggleSideBar}: SideBarNavProps) {
  return <div className="relative">
    <ul id="menu" className=" relative px-10 py-16 bg-gray-800 z-10
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

        <li>
            <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">ABOUT</a>
        </li>
        <li>
            <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">CONNECT</a>
        </li>
        <li>
            <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">WATCH</a>
        </li>

        <li>
            <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">CARE</a>
        </li>

        <li>
            <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">CONTACT</a>
        </li>
        <li>
            <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">BLOG</a>
        </li>
            
        </ul>
    </div>
}
  