import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'

export default function Sidebar() {

    const {Open, setOpen} = useContext(SideBarContext)
    const toggleSideBar = () => setOpen(!Open)

  return (
    <div className={ Open ? " h-screen bg-slate-400 w-1/2 abso top-0  right-0 z-100" : ' relative'}>
    <nav>
        <button type="submit" onClick={toggleSideBar}  style={{ backgroundColor : ' #f5f5f5' ,  borderRadius: ' 20px' ,  padding: '2px 10px '}}> click</button>
    </nav>
</div>
  )
}
