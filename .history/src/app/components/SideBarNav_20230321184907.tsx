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
                <span className="font-light mr-2  ">
                {home}
                </span>
                ABOUT</a>
        </li>
        <li>
            <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
            <span className="font-light mr-2  ">
                {Contact}
                </span>
                CONNECT</a>
        </li>
        <li>
            <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
            <span className="font-light mr-2  ">
                {Watch}
                </span>
                WATCH</a>
        </li>

        <li>
            <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
            <span className="font-light mr-2  ">
                {Care}
                </span>
                CARE</a>
        </li>

        <li>
            <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
            <span className="font-light mr-2  ">
                {Contact}
                </span>
                GIVE</a>
        </li>
        <li>
            <a className={`${liStyle} flex items-center  text-white opacity-70 hover:opacity-100 duration-300`} href="#">
            <span className="font-light mr-2  ">
                {Blog}
                </span>
                BLOG</a>
        </li>
            
        </ul>
    </div>
}
  