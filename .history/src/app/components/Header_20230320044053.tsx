import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header(pickName: string) {

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
