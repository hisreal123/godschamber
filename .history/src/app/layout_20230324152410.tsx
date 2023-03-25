"use client"
import React, { useState } from 'react'
import { SideBarContext } from './components/context/SidebarContext'
import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Welcome to Godschambers e-church ',
  description: 'Get closer to Your father ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SideBarContext.Provider value={{ Open, setOpen }}>
          <Header />
          <Sideb const [Open, setOpen] = useState(false)ar />
        </SideBarContext.Provider>
        {children}
      </body>
    </html>
  )
}
