"use client"
import React, { useMemo, lazy, useState } from 'react'
import { Inter } from 'next/font/google'


// context
import { SideBarContext } from './components/context/SidebarContext'


// Font
const inter = Inter({ subsets: ['latin'] })

// LazyLoading
const Header = lazy(() => import('./components/Header'))
const Banner = lazy(() => import('./components/Banner'))
const Quote = lazy(() => import('./components/Quote'))
const HopeCards = lazy(() => import('./components/HopeCards'))
const Events = lazy(() => import('./components/Events'))
// Export....
export default function Home() {

  const Sidebar = useMemo(
    () => lazy(() => import('./components/Sidebar')),
    []
  );

  const [Open, setOpen] = useState(false)

  return (
    <main className="w-screen overflow-hidden relative">
      <SideBarContext.Provider value={{ Open, setOpen }}>
        <Header />
        <Sidebar />
      </SideBarContext.Provider>
      <Banner />
      <Quote />
      <HopeCards />
      <Events />
    </main>
  )
}
