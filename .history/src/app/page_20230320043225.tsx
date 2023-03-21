import { Inter } from 'next/font/google'
import Header from './components/Header'
import { useContext } from 'react'
const inter = Inter({ subsets: ['latin'] })


const HeaderContext = useContext(<Link href='path'>link</Link>)


export default function Home() {
  return (
    <main className="">
      <Header />
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
