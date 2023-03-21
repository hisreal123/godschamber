import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'


export default function Header() {

  const {Open, setOpen} = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)

  return (

    <div className='flex justify-between items-center px-2'>
      logo
      <button onClick={toggleSideBar}> menu </button>
    </div>
  )
}
