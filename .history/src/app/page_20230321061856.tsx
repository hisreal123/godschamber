"use client"
import React, {lazy , useState}  from 'react'
import { Inter } from 'next/font/google'
import { SideBarContext } from './components/context/SidebarContext'

const inter = Inter({ subsets: ['latin'] })
// lazyloading

const Header = lazy(() => import('./components/Header'))



export default function Home() {

  const [Open, setOpen] = useState()


  return (
    <main className="">
      <Header />
      <SideBarContext.Provider value={[Open, Se]}>

      </SideBarContext.Provider>
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
