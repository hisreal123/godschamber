import { SideBarNav } from './SideBarNav';
import React, {useState, useEffect, useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { menuIcon} from './SvgIcons/SvgIcons'

export default function Header() {

  const [scrollY, setScrollY] = useState(0)
  const {Open, setOpen} = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)


  useEffect(() => {
    const handleScroll =  () => {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
 }, [])

  return (
    <div className={` ${scrollY > 50} h-16 transparent fixed w-screen drop-shadow-lg z-10`}>
    <div className="container px-10 md:px-0 h-full mx-auto flex justify-between items-center">
        
      {/* logo here*/}
        <a className="" href="#">logo</a>

        {/* menu Links */}
       <SideBarNav   toggleSideBar={toggleSideBar}  style='hidden px-10 py-16 bg-gray-800 z-10
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6' liStyle='md:text-xs'/>
    
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
  