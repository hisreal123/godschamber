import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'


export default function Header() {

  const {Open, setOpen} = useContext(SideBarContext)
  const toggleSideBar = () => setOpen(!Open)

  return (

    <div>
      logo
      <button onClick={toggleSideBar}> menu </button>
    </div>
  )
}
