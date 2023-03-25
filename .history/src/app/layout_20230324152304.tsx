
import { SideBarContext } from './components/context/SidebarContext'
import './globals.css'

export const metadata = {
  title: 'Welcome to Godschambers e-church ',
  description: 'Get closer to Your father ',
}

export default function RootLayout({

  const [Open, setOpen] = useState(false)
  
  children,
}: {
  children: React.ReactNode
}) {
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
