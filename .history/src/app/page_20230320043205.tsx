import { Inter } from 'next/font/google'
import Header from './components/Header'
const inter = Inter({ subsets: ['latin'] })


const HeaderContext = UseC


export default function Home() {
  return (
    <main className="">
      <Header />
      <h1> Welcome to Godschamber Church</h1>
    </main>
  )
}
