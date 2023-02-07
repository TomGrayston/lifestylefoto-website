import '../../../styles/globals.css';
import { Bebas_Neue } from '@next/font/google';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
})

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${bebas.variable}`}>
      <head />
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
