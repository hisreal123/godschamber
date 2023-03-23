import React, {useContext, lazy} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
import { SideBarNav } from './SideBarNav'


export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className="wrapper md:hidden">

    <div 
        className={ Open ? " h-screen bg-slate-400 w-4/5 absolute top-0  right-0 shadow-lg z-[200]" : 'hidden '}>      
        <SideBarNav toggleSideBar={toggleSideBar} style='relative h-screen bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 w-full pt-20' liStyle=' inline-block  p-2  mt-1 text-xs w-full font-lighter opacity-2  '/>
    </div>

    {/* overlay */}
    <div className={ Open ? " h-screen bg-black bg-opacity-25 z-10 absolute w-screen top-0 " : 'hidden '} onClick={toggleSideBar}> hey</div>
    </div>
  )
}
