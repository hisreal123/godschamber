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
const Events = lazy(() => import('./components/Events'))
const More = lazy(() => import('./components/More'))
const ContactUs = lazy(() => import('./components/ContactUs'))


// Export....
export default function Home() {

  const [Open, setOpen] = useState(false)

  return (
    <main className="w-screen overflow-hidden relative">

      <Banner />
      <Quote />
      <HopeCards />
      <Events />
      <More />
      <ContactUs />
    </main>
  )
}
