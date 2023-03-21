import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { menuIcon } from './SvgIcons/SvgIcons'

export default function Header() {

  const {Open, setOpen} = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)

  return (
    <div className="w-full h-16 bg-indigo-600 drop-shadow-lg">
    <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
        
{/* logo here*/}
        <a className="" href="#">KINDA<span
          className="text-white">CODE</span></a>


  {/* menu Links */}
        <ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

            <li className="md:hidden z-90 fixed top-4 right-6">
                <a href="javascript:void(0)" className="text-right text-white text-4xl"
                    onClick={toggleSideBar}>&times;</a>
            </li>

            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">Home</a>
            </li>
            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">Something</a>
            </li>
            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">Forums</a>
            </li>

            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">About</a>
            </li>
            <li>
                <a className="text-white opacity-70 hover:opacity-100 duration-300" href="#">Contact</a>
            </li>
        </ul>

    
        <div className="flex items-center md:hidden">
            <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                onClick={toggleSideBar}>
                &#9776;
            </button>
        </div>
</div>
</div>
  )
}
