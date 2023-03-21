import React from "react";


export function SideBarNav({
  toggleSideBar
}) {
  return <div>
    <ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-10
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

            <li className="md:hidden fixed top-4 right-6">
                <a href="" className="text-right text-white text-4xl" onClick={toggleSideBar}></a>
            </li>

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
            
        </ul>;
                </div>
}
  