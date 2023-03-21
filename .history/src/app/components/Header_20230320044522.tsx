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
            <p  style={{ cursor: 'pointer'}}>
                {pickName} 
            </p> 

            <button type="submit" onClick={changeName} style={{ backgroudC}}> click</button>
        </nav>
    </div>
  )
}
