import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header() {

  const pickName   = useContext(SideBarContext)

  const changeName =  () => {
    pickName = " Tunde "
  }


  return (

    <div>
        <nav>
            <p onClick={changeName}>
                {pickName} 
            </p> 
        </nav>
    </div>
  )
}