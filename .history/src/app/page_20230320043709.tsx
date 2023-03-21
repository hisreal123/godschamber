"use client"
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { createContext } from 'react'
const inter = Inter({ subsets: ['latin'] })


type SideBarProps = {
  open :  boolean
}

const SideBarContext = createContext("George")


export default function Home() {
  return (
    <main className="">
      <Header />
      <SideBarContext.Provider value={open}>

      </SideBarContext.Provider>
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
