import './globals.css'

export const metadata = {
  title: 'Welcome to Godschambers e-church ',
  description: 'Get',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
