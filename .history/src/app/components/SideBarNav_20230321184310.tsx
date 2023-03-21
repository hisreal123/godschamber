import React from "react";
import {home,
    Contact,
    Watch,
    Care,
    Give,
    Blog} from './SvgIcons/SvgIcons'

type SideBarNavProps = {
    toggleSideBar : () => { }
    style?:  string
    liStyle? : string
}

export function SideBarNav({liStyle, style, toggleSideBar}: SideBarNavProps) {
  return <div className="">
    <ul className={` ${style} `}>

        <li>
            <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                <span className="font-light text-gray-200  ">
                {home}
                </span>
                ABOUT</a>
        </li>
        <li>
            <a className={`${liStyle} text-white opacity-70 hover:opacity-100 duration-300`} href="#">CONNECT</a>
        </li>
        <li>
            <a className={`${liStyle} text-white opacity-70 hover:opacity-100 duration-300`} href="#">WATCH</a>
        </li>

        <li>
            <a className={`${liStyle} text-white opacity-70 hover:opacity-100 duration-300`} href="#">CARE</a>
        </li>

        <li>
            <a className={`${liStyle} text-white opacity-70 hover:opacity-100 duration-300`} href="#">CONTACT</a>
        </li>
        <li>
            <a className={`${liStyle} text-white opacity-70 hover:opacity-100 duration-300`} href="#">BLOG</a>
        </li>
            
        </ul>
    </div>
}
  