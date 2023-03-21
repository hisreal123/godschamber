import { createContext } from "react";



type SideBarProps  = { 
    Open: any
    setOpen :  any
}

export const SideBarContext = createContext( { } as SideBarProps)
