import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className="wrapper">

    <div className={ Open ? " h-screen bg-slate-400 w-1/2 absolute top-0  right-0 shadow-lg z-100" : 'hidden '}>
      <nav></nav>
      <div className="top overflow-hidden">
      <span  className=" bg-red-200" onClick={toggleSideBar}>
      {closeIcon}
      </span>
    </div>
    </div>

    {/* overlay */}
    <div className={ Open ? " h-screen bg-black bg-opacity-25 -z-10 absolute w-screen top-0 " : 'hidden '}> hey</div>
    </div>
  )
}
