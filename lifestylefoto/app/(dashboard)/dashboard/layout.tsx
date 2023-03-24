import '../../../styles/globals.css';

import { ReactNode } from 'react';

import NavbarMobile from '../../../components/nav/mobile/NavbarMobile';
import MenuToggle from '../../../components/nav/mobile/MenuToggle';
import MenuButton from '../../../components/nav/common/MenuButton';
import NavbarTitle from '../../../components/nav/common/NavbarTitle';
import MenuOptions from '../../../components/nav/common/MenuOptions';
import NavbarWeb from '../../../components/nav/web/NavbarWeb';

import { Bebas_Neue } from '@next/font/google';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";


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
          <MenuToggle bgColour='bg-stone-100' textColour='text-black' menuIcon={<AiOutlineMenuFold/>} icon={<AiOutlineMenuUnfold/>}>
            <MenuOptions font="font-sans">
              <MenuButton>Posts</MenuButton>
              <MenuButton>Collections</MenuButton>
            </MenuOptions>
          </MenuToggle>
          <NavbarTitle font="font-sans">
            Lifestylefoto Dashboard
          </NavbarTitle>
        </NavbarMobile>

        <NavbarWeb bgColour='bg-stone-100' extendStyles='shadow-lg'>
          <MenuToggle bgColour='bg-stone-100' textColour='text-black' menuIcon={<AiOutlineMenuFold/>} icon={<AiOutlineMenuUnfold/>} extendStyles="w-1/6">
            <MenuOptions font="font-sans">
              <MenuButton>Posts</MenuButton>
              <MenuButton>Collections</MenuButton>
            </MenuOptions>
          </MenuToggle>
          <NavbarTitle font="font-sans" colour='text-black'>
            Lifestylefoto Dashboard
          </NavbarTitle>
        </NavbarWeb>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
