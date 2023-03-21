"use client"
import React, {lazy , useState}  from 'react'
import { Inter } from 'next/font/google'

// context
import { SideBarContext } from './components/context/SidebarContext'

// Font
const inter = Inter({ subsets: ['latin'] })

// LazyLoading
const Header = lazy(() => import('./components/Header'))



export default function Home() {

  const Open = useState()


  return (
    <main className="">
      <Header />
      <SideBarContext.Provider value={Open}>

      </SideBarContext.Provider>
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
