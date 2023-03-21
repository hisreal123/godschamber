"use client"
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { createContext } from 'react'
const inter = Inter({ subsets: ['latin'] })


type SideBarProps = {
  open :  boolean
}

const SideBar = createContext( true )


export default function Home() {
  return (
    <main className="">
      <Header />
      <HeaderContext.Provider>

      </HeaderContext.Provider>
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
