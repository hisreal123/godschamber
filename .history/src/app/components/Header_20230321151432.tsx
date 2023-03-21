import React, {useContext} from 'react'
import { SideBarContext } from './context/SidebarContext'


export default function Header() {

  const {Open, setOpen} = useContext(SideBarContext)

  const changeName =  () => {
    setOpen(!Open)
  }


  return (

    <div className={ ${Open} ?  `$
     ` : ' '}>
        <nav>
            <button type="submit" onClick={changeName} style={{ backgroundColor : ' #f5f5f5' , borderRadius: ' 20px' ,  padding: '2px 10px '}}> click</button>
        </nav>
    </div>
  )
}