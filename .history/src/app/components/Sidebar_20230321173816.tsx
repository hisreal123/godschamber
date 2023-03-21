import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className={ Open ? " h-screen bg-slate-400 w-1/2 absolute top-0  right-0 shadow-lg z-20" : 'hidden '}>
      <div className={ Open ? " h-screen bg-black bg-opacity-25 inherit top-0 left right-0 bottom-0 z-10" : 'hidden '}></div>
    {/*   <nav></nav>
      <div className="top overflow-hidden">
        <span  className=" bg-red-200" onClick={toggleSideBar}>
          {closeIcon}
        </span>
      </div> */}
    </div>
  )
}
