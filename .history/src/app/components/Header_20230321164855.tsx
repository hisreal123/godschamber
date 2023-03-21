import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'
import { menuIcon } from './SvgIcons/SvgIcons'

export default function Header() {

  const {Open, setOpen} = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)

  return (

    <div className='flex justify-between items-center px-2 py-3 bg-gray-300'>
      logo
      <button onClick={toggleSideBar}> menu </button>
    </div>
  )
}
