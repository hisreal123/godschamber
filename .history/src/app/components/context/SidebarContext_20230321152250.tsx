import { createContext } from "react";



type SideBarProps  = { 
    Open: boolean
    setOpen :  boolean
}

export const SideBarContext = createContext( { } as SideBarProps)
