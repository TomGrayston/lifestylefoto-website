import './globals.css';
import Navbar from '../components/nav/Navbar';

import { Bebas_Neue } from '@next/font/google';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${bebas.variable}`}>
      <head />
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
