import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header() {

  const pickName   = useContext(SideBarContext)

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
