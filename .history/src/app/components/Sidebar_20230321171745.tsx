import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { closeIcon } from './SvgIcons/SvgIcons'
export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className={ Open ? " h-screen bg-slate-400 w-1/2 absolute top-0  right-0 z-100" : ' '}>

    </div>
  )
}
