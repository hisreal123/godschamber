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
        <SideBarNav toggleSideBar={toggleSideBar} style='relative h-screen bg-green-200 w-full pt-20' liStyle=' inline-block  p-4 mt-1text-xs bg-red-300 min-w-screen '/>
    </div>

    {/* overlay */}
    <div className={ Open ? " h-screen bg-black bg-opacity-25 -z-10 absolute w-screen top-0 " : 'hidden '} onClick={toggleSideBar}> hey</div>
    </div>
  )
}
