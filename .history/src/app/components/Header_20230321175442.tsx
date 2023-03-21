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
       <SideBarNav.tsx   toggleSideBar={toggleSideBar}  />
    
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

    function SideBarNav.tsx({toggleSideBar}) {
      return (<ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-10
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

            <li className="md:hidden fixed top-4 right-6">
                <a href="" className="text-right text-white text-4xl" onClick={toggleSideBar}></a>
            </li>

            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">ABOUT</a>
            </li>
            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">CONNECT</a>
            </li>
            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">WATCH</a>
            </li>

            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">CARE</a>
            </li>

            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">CONTACT</a>
            </li>
            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">BLOG</a>
            </li>
            
        </ul>);
    }
  