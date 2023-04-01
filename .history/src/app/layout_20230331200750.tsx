import Footer from './components/Footer'
import './globals.css'


// LazyLoading
const Header = lazy(() => import('./components/Header'))
const Sidebar = lazy(() => import('./components/Sidebar'))

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
        {children}
        <Footer />
      </body>
    </html>
  )
}
