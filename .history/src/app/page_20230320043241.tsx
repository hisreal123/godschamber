import { Inter } from 'next/font/google'
import Header from './components/Header'
import { useContext, createContext } from 'react'
const inter = Inter({ subsets: ['latin'] })


const HeaderContext = useContext(null)


export default function Home() {
  return (
    <main className="">
      <Header />
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
