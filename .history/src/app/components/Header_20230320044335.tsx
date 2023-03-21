import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header() {

  let pickName   = useContext(SideBarContext)

  const changeName =  () => {
    pickName = "Tunde "
  }


  return (

    <div>
        <nav>
            <p onClick={changeName} style={{ cursor: 'pointer
            4'}}>
                {pickName} 
            </p> 
        </nav>
    </div>
  )
}
