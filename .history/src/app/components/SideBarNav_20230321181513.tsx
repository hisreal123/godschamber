import React from "react";


type SideBarNavProps = {
    toggleSideBar : () => { }
    style:  string
}

export function SideBarNav({sttoggleSideBar}: SideBarNavProps) {
  return <div className="">
    <ul id="menu" className=" ">

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
  