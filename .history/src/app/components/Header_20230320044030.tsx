import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header() {

  const pickName   = useContext()

  return (
    <div>
        <nav>
            <p>
                Navigation 
            </p> 
        </nav>
    </div>
  )
}
