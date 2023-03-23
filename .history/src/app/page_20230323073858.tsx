"use client"
import React, {lazy , useState}  from 'react'
import { Inter } from 'next/font/google'

// context
import { SideBarContext } from './components/context/SidebarContext'
import Quote from './components/Quote'

// Font
const inter = Inter({ subsets: ['latin'] })

// LazyLoading
const Header = lazy(() => import('./components/Header'))
const Sidebar = lazy(() => import('./components/Sidebar'))
const Banner = lazy(() => import('./components/Banner'))
const Quote = lazy(() => import('./components/Banner'))


// Export....
export default function Home() {

  const [Open, setOpen] = useState(false)

  return (
    <main className="">
      <SideBarContext.Provider value={{Open, setOpen}}>
        <Header />
        {<Sidebar />}
      </SideBarContext.Provider>
      <Banner />
      <Quote />
    </main>
  )
}
