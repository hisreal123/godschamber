"use client"
import React, {lazy , useState}  from 'react'
import { Inter } from 'next/font/google'

// context
import { SideBarContext } from './components/context/SidebarContext'

// Font
const inter = Inter({ subsets: ['latin'] })

// LazyLoading
const Header = lazy(() => import('./components/Header'))
const SideBar = lazy(() => import('./components'))


// Export....
export default function Home() {

  const [Open, setOpen] = useState(false)

  return (
    <main className="">
      <Header />
      <SideBarContext.Provider value={{Open, setOpen}}>

      </SideBarContext.Provider>
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
