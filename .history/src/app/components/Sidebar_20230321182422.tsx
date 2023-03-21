import React, {useContext, lazy} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
import { SideBarNav } from './SideBarNav'


export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className="wrapper md:hidden">

    <div className={ Open ? " h-screen bg-slate-400 w-4/5 absolute top-0  right-0 shadow-lg z-100" : 'hidden '}>

      <div className=" relative bg-red-200 h-screen flex pt-19">
        <SideBarNav toggleSideBar={toggleSideBar} liStyle='text-xs '/>
      </div>
    </div>

    {/* overlay */}
    <div className={ Open ? " h-screen bg-black bg-opacity-25 -z-10 absolute w-screen top-0 " : 'hidden '} onClick={toggleSideBar}> hey</div>
    </div>
  )
}
