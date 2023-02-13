import '../../../styles/globals.css';
import { ReactNode } from 'react';
import NavbarMobile from '../../../components/nav/mobile/NavbarMobile';
import MenuToggle from '../../../components/nav/mobile/MenuToggle';
import MenuButton from '../../../components/nav/common/MenuButton';
import NavbarTitle from '../../../components/nav/common/NavbarTitle';
import MenuOptions from '../../../components/nav/common/MenuOptions';
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
          <NavbarTitle font="font-sans">
            Dashboard
          </NavbarTitle>
          <MenuToggle>
            <MenuOptions font="font-sans">
              <MenuButton>Posts</MenuButton>
              <MenuButton>Collections</MenuButton>
            </MenuOptions>
          </MenuToggle>
        </NavbarMobile>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
