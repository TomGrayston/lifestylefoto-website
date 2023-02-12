import '../../../styles/globals.css';
import { ReactNode } from 'react';
import NavbarMobile from '../../../components/nav v2/mobile/NavbarMobile';
import MenuToggle from '../../../components/nav v2/mobile/MenuToggle';
import MenuButton from '../../../components/nav v2/common/MenuButton';
import { Bebas_Neue } from '@next/font/google';


const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
})

interface Props {
  children?: ReactNode
}

export default function RootLayout({ children } : Props) {
  return (
    <html lang='en' className={`${bebas.variable}`}>
      <head />
      <body>
        <NavbarMobile>
          <h1 className="items-center pt-1 font-sans text-4xl text-black ">
            Dashboard
          </h1>
          <MenuToggle>
            <MenuButton>Posts</MenuButton>
            <MenuButton>Collections</MenuButton>
          </MenuToggle>
        </NavbarMobile>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
