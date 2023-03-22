import React from "react";


type clickButton = {
  style: string
  title : string
  href: string 
}
export function ClickButton({style, title, href}  : clickButton) {
  return <>
    <a href={href} className={`${style}`}> {title} </a>
    {/* <a href="" className=""> Watch Online</a> */}
  </>;
}
  