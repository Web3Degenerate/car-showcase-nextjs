import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google' //removed (1:48:40): https://youtu.be/A6g8xc0MoiY?si=BL412l4oxthvK1SH&t=6520

// const inter = Inter({ subsets: ['latin'] })

// import {Navbar} from './components/Navbar'
// import {Footer} from './components/Footer'
import {Navbar, Footer } from '@/components'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      {/* Added Navbar and Footer components at 1:49:40: https://youtu.be/A6g8xc0MoiY?si=ydnJ_vic8Pl5F901&t=6580 */}
        <body className="relative">
          <Navbar />
            {children}
          <Footer />
        </body>

    </html>
  )
}
