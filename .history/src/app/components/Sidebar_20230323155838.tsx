import React, { useContext, lazy } from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
import { SideBarNav } from './SideBarNav'
// import { motion } from 'framer-motion'

export default function Sidebar() {

  const { Open, setOpen } = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)

  return (
    <div
      className="wrapper md:hidden transition-all ">
      <div

        className={Open ? " transition-all bg-slate-400 fixed top-0 bottom-0 right-0 shadow-lg z-[100]" : 'hidden '}>
        <SideBarNav toggleSideBar={toggleSideBar} style='relative h-screen bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 w-full pt-20' liStyle=' inline-block  p-2  mt-1 text-xs w-full font-lighter opacity-2  ' />
      </div>

      {/* overlay */}
      <div className={Open ? " h-screen bg-black bg-opacity-50 z-10 absolute w-screen top-0 " : 'hidden '} onClick={toggleSideBar}></div>
    </div>
  )
}
