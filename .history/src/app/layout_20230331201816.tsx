
"use client"
import React, { lazy, useState } from 'react'
import Footer from './components/Footer'
import './globals.css'
import { useRouter } from 'next/router';
import Head from 'next/head'



function MyTitle() {
  const router = useRouter();
  const { pathname, query } = router;

}
// LazyLoading
const Header = lazy(() => import('./components/Header'))
const Sidebar = lazy(() => import('./components/Sidebar'))


// context
import { SideBarContext } from './components/context/SidebarContext'


export const metadata = {
  title: 'Welcome to Godschambers e-church ',
  description: 'Get closer to Your father ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const [Open, setOpen] = useState(false)

  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
