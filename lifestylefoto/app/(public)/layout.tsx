"use client"

import "../../styles/globals.css";

import { ReactNode, useState } from "react";

import { Bebas_Neue } from "@next/font/google";
import { CgInstagram } from "react-icons/cg";
import { BsXLg, BsYoutube } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

import NavbarMobile from "../../components/nav/mobile/NavbarMobile";
import NavbarTitle from "../../components/nav/common/NavbarTitle";
import MenuToggleButton from "../../components/nav/mobile/MenuToggleButton";
import Menu from "../../components/nav/mobile/Menu";
import Options from "../../components/nav/common/Options";
import Option from "../../components/nav/common/Option";
import NavbarWeb from "../../components/nav/web/NavbarWeb";
import NavbarOptions from "../../components/nav/web/NavbarOptions";
import NavbarButton from "../../components/nav/web/NavbarButton";
import NavbarSocialButton from "../../components/nav/web/NavbarSocialButton";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

interface Props {
  children?: ReactNode;
}

export default function RootLayout({ children }: Props) {

  const [open, setOpen] = useState(false);

  return (
    <html lang="en" className={`${bebas.variable}`}>
      <head />
      <body>

        <NavbarMobile>
          <NavbarTitle font="font-sans" colour="text-black">
            Lifestylefoto
          </NavbarTitle>
          <MenuToggleButton icon={<AiOutlineMenu/>} setOpen={setOpen}/>
          <Menu 
            open={open}
            setOpen={setOpen}
            bgColour="bg-black" 
            textColour="text-white" 
            icon={<BsXLg/>}
          >
            <Options font="font-sans">
              <Option>Portfolio »</Option>
              <Option>Pricing »</Option>
              <Option>Testimonials »</Option>
              <Option>About »</Option>
              <Option>Contact »</Option>
            </Options>
          </Menu>
        </NavbarMobile>

        <NavbarWeb>
          <NavbarTitle font="font-sans" colour="text-stone-100">
            Lifestylefoto
          </NavbarTitle>
          <NavbarOptions font="font-sans">
            <NavbarButton>Portfolio</NavbarButton>
            <NavbarButton>Pricing</NavbarButton>
            <NavbarButton>Testimonials</NavbarButton>
            <NavbarButton>About Me</NavbarButton>
            <NavbarButton>Contact Me</NavbarButton>
            <NavbarSocialButton hoverColour="hover:text-rose-500">
              <CgInstagram />
            </NavbarSocialButton>
            <NavbarSocialButton hoverColour="hover:text-red-500">
              <BsYoutube />
            </NavbarSocialButton>
          </NavbarOptions>
        </NavbarWeb>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
