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
            <a className={`${liStyle} flex items-center text-white opacity-70 hover:opacity-100 duration-300`} href="#">
            <span className="font-light mr-2 ">
                {Contact}
                </span>
                CONNECT</a>
        </li>
        <li>
            <a className={`${liStyle} flex items-cente-r text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                  <span className="font-light mr-2  ">
                {home}
                </span>ATCH</a>
        </li>

        <li>
            <a className={`${liStyle} flex items-c-enter text-white opacity-70 hover:opacity-100 duration-300`} href="#">
              <span className="font-light mr-2  ">
                {home}
                </span>CARE</a>
        </li>

        <li>
            <a className={`${liStyle} flex items-c-enter text-white opacity-70 hover:opacity-100 duration-300`} href="#">
                CO              <span className="font-light mr-2  ">
                {home}
                </span>TACT</a>
        </li>
        <li>
            <a className={`${liStyle} flex items-c-enter text-white opacity-70 hover:opacity-100 duration-300`} href="#">
              <span className="font-light mr-2  ">
                {home}
                </span>BLOG</a>
        </li>
            
        </ul>
    </div>
}
  