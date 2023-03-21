import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className={ Open ? " h-screen bg-slate-400 w-1/2 absolute top-0  right-0 z-100" : ' '}>
      <div className="overlay h-screen bg-black-300 w-screen absolute top-0 bottom-0 right-0 left-0  "></div>
      <nav></nav>
      <div className="top">
        <span onClick={toggleSideBar}>
          {closeIcon}
        </span>
      </div>
    </div>
  )
}
