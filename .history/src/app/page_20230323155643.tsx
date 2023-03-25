"use client"
import React, { lazy, useState } from 'react'
import { Inter } from 'next/font/google'

// context
import { SideBarContext } from './components/context/SidebarContext'

// Font
const inter = Inter({ subsets: ['latin'] })

// LazyLoading
const Header = lazy(() => import('./components/Header'))
const Sidebar = lazy(() => import('./components/Sidebar'))
const Banner = lazy(() => import('./components/Banner'))
const Quote = lazy(() => import('./components/Quote'))
const HopeCards = lazy(() => import('./components/HopeCards'))


// Export....
export default function Home() {

  const [Open, setOpen] = useState(false)

  return (
    <main className="w-screen overflow-hidden relative">
      <SideBarContext.Provider value={{ Open, setOpen }}>
        <Header />
        <Sidebar />
      </SideBarContext.Provider>
      <Banner />
      {/* <Quote /> */}
      <HopeCards />
    </main>
  )
}
