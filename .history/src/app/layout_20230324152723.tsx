import React from 'react'
import { SideBarContext } from './components/context/SidebarContext'
import './globals.css'



const Header = React.lazy(() => import('./components/Header'))
const Sidebar = React.lazy(() => import('./components/Sidebar'))

export const metadata = {
  title: 'Welcome to Godschambers e-church ',
  description: 'Get closer to Your father ',
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {

  const [Open, setOpen] = React.useState(false)

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
