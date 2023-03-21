"use client"
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { createContext } from 'react'
const inter = Inter({ subsets: ['latin'] })


const name: string   =  " George" 

export  SideBarContext = createContext(name)


export default function Home() {
  return (
    <main className="">
      <Header />
      <SideBarContext.Provider value={name}>

      </SideBarContext.Provider>
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
