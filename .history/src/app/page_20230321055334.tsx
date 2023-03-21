"use client"
import React, {lazy} from 'react'
import { Inter } from 'next/font/google'
import { SideBarContext } from './components/context/SidebarContext'

const inter = Inter({ subsets: ['latin'] })
// lazyloading

const Header = lazy(() => import('./components/Header'))


const [Open, setOpen] = useState()
export default function Home() {
  return (
    <main className="">
      <Header />
      <SideBarContext.Provider value={true}>

      </SideBarContext.Provider>
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
