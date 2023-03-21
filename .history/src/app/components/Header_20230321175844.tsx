import { SideBarNav } from './SideBarNav';
import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { menuIcon} from './SvgIcons/SvgIcons'

export default function Header() {

  const {Open, setOpen} = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)

  return (
    <div className="w-full h-16 bg-indigo-600 drop-shadow-lg">
    <div className="container px-10 md:px-0 h-full mx-auto flex justify-between items-center">
        
      {/* logo here*/}
        <a className="" href="#">logo</a>

        {/* menu Links */}
       <SideBarNav   toggleSideBar={toggleSideBar}  />
    
        <div className="flex items-center md:hidden">
            <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                onClick={toggleSideBar}>
                {menuIcon}
            </button>
        </div>
  </div>
</div>
  )
}
  