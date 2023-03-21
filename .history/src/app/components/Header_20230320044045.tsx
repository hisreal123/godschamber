import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header({pickName}) {

  const pickName   = useContext(SideBarContext)

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
