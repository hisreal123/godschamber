import React, {useContext} from 'react'
import { SideBarContext } from '../page'



export default function Header() {

  let pickName   = useContext(SideBarContext)

  const changeName =  () => {
    consol.log() '
  }


  return (

    <div>
        <nav>
            <p  style={{ cursor: 'pointer'}}>
                {pickName} 
            </p> 

            <button type="submit" onClick={changeName} style={{ backgroundColor : ' #f5f5f5' , borderRadius: ' 20px' ,  padding: '2px 10px '}}> click</button>
        </nav>
    </div>
  )
}