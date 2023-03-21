import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'


export default function Header() {

  const {Open, setOpen} = useContext(SideBarContext)

  


  return (

    <div className={ Open ? " h-screen bg-slate-400 w-1/2 abso" : ' relative'}>
        <nav>
            <button type="submit" onClick={() => set} style={{ backgroundColor : ' #f5f5f5' ,  borderRadius: ' 20px' ,  padding: '2px 10px '}}> click</button>
        </nav>
    </div>
  )
}
