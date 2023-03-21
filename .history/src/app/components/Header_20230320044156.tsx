import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header() {

  const changeName  = 
  const pickName   = useContext(SideBarContext)

  return (
    <div>
        <nav>
            <p>
                {pickName} 
            </p> 
        </nav>
    </div>
  )
}
