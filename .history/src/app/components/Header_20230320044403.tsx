import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header() {

  const pickName   = useContext(SideBarContext)

  const changeName =  () => {
    alert(pickName)
  }


  return (

    <div>
        <nav>
            <p onClick={changeName} style={{ cursor: 'pointer'}}>
                {pickName} 
            </p> 
        </nav>
    </div>
  )
}
