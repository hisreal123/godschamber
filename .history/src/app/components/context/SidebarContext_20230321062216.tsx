import { createContext } from "react";



type SideBarProps  = { 
    Open: boolean
    
}

export const SideBarContext = createContext({} as SideBarProps)
