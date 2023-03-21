import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
import { SideBarNav } from './SideBarNav'
export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className="wrapper">

    <div className={ Open ? " h-screen bg-slate-400 w-1/2 absolute top-0  right-0 shadow-lg z-100" : 'hidden '}>

      <div className=""></div>
     <SideBarNav toggleSideBar={toggleSideBar}/>
    </div>

    {/* overlay */}
    <div className={ Open ? " h-screen bg-black bg-opacity-25 -z-10 absolute w-screen top-0 " : 'hidden '} onClick={toggleSideBar}> hey</div>
    </div>
  )
}
