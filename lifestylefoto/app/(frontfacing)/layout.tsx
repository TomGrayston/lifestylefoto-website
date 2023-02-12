import '../../styles/globals.css';

import { ReactNode } from 'react';

import NavbarMobile from '../../components/nav v2/mobile/NavbarMobile';
import NavbarWeb from '../../components/nav v2/web/NavbarWeb';
import NavbarOptions from '../../components/nav v2/web/NavbarOptions';
import NavbarTitle from '../../components/nav v2/common/NavbarTitle';
import NavbarButton from '../../components/nav v2/web/NavbarButton';
import NavbarSocialButton from '../../components/nav v2/web/NavbarSocialButton';
import MenuToggle from '../../components/nav v2/mobile/MenuToggle';
import MenuOptions from '../../components/nav v2/common/MenuOptions';
import MenuButton from '../../components/nav v2/common/MenuButton';

import { Bebas_Neue } from '@next/font/google';
import { CgInstagram } from 'react-icons/cg';
import { BsYoutube } from 'react-icons/bs';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
});

interface Props {
  children?: ReactNode
}

export default function RootLayout({children}: Props) {

  return (
    <html lang='en' className={`${bebas.variable}`}>
      <head />
      <body>

        <NavbarMobile>
          <NavbarTitle font="font-sans">
            Lifestylefoto
          </NavbarTitle>
          <MenuToggle>
            <MenuOptions font='font-sans'>
              <MenuButton>Portfolio »</MenuButton>
              <MenuButton>Pricing »</MenuButton>
              <MenuButton>Testimonials »</MenuButton>
              <MenuButton>About Me »</MenuButton>
              <MenuButton>Contact Me »</MenuButton>
            </MenuOptions>
          </MenuToggle>
        </NavbarMobile>

        <NavbarWeb>
          <NavbarTitle font="font-sans" colour='text-stone-100'>
            Lifestylefoto
          </NavbarTitle>
          <NavbarOptions font='font-sans'>
            <NavbarButton>Portfolio</NavbarButton>
            <NavbarButton>Pricing</NavbarButton>
            <NavbarButton>Testimonials</NavbarButton>
            <NavbarButton>About Me</NavbarButton>
            <NavbarButton>Contact Me</NavbarButton>
            <NavbarSocialButton><CgInstagram/></NavbarSocialButton>
            <NavbarSocialButton><BsYoutube/></NavbarSocialButton>
          </NavbarOptions>
        </NavbarWeb>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
