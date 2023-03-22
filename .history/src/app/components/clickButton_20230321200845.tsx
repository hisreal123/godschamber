import React from "react";


type clickButton = {
  style: string
  title : string
  href: string 
  icon?: string
}
export function ClickButton({icon, style, title, href}  : clickButton) {
  return <>
    <a href={href} className={`${style}`}> 
      {icon  ? ( " ") : ( `
        ${title}
      )}
    </a>
    {/* <a href="" className=""> Watch Online</a> */}
  </>;
}
  