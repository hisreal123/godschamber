
import React, { useState } from 'react'
import { SideBarContext } from './components/context/SidebarContext'
import './globals.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Welcome to Godschambers e-church ',
  description: 'Get closer to Your father ',
}

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  const [Open, setOpen] = React.useState(false),
  return (
    <html lang="en">
      <body>
        <SideBarContext.Provider value={{ Open, setOpen }}>
          <Header />
          <Sidebar />
        </SideBarContext.Provider>
        {children}
      </body>
    </html>
  )
}
