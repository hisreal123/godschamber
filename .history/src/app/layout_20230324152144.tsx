import './globals.css'

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
      <SideBarContexttext.Provider value={{ Open, setOpen }}>
        <Header />
        <Sidebar />
      </SideBarContexttext.Provider>
        {children}
        </body>
    </html>
  )
}
