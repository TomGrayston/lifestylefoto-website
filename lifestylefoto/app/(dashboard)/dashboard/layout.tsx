"use client";

import "../../../styles/globals.css";

import { ReactNode, useState } from "react";

import NavbarMobile from "../../../components/nav/mobile/NavbarMobile";
import MenuToggleButton from "../../../components/nav/mobile/MenuToggleButton";
import Menu from "../../../components/nav/mobile/Menu";
import Options from "../../../components/nav/common/Options";
import Option from "../../../components/nav/common/Option";
import NavbarTitle from "../../../components/nav/common/NavbarTitle";

import { Bebas_Neue } from "@next/font/google";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import NavbarWeb from "../../../components/nav/web/NavbarWeb";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

type Props = {
  children?: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en" className={`${bebas.variable}`}>
      <head />
      <body>

        <NavbarMobile>
          <MenuToggleButton icon={<AiOutlineMenuUnfold />} setOpen={setOpen} />
          <Menu
            open={open}
            setOpen={setOpen}
            bgColour="bg-stone-100"
            textColour="text-black"
            icon={<AiOutlineMenuFold />}
          >
            <Options font="font-sans">
              <Option>Posts</Option>
              <Option>Collections</Option>
            </Options>
          </Menu>
          <NavbarTitle font="font-sans">Lifestylefoto Dashboard</NavbarTitle>
        </NavbarMobile>

        <NavbarWeb bgColour="bg-stone-100" extendStyles="shadow-lg">
          <MenuToggleButton icon={<AiOutlineMenuUnfold />} setOpen={setOpen} />
          <Menu
            open={open}
            setOpen={setOpen}
            bgColour="bg-stone-100"
            textColour="text-black"
            icon={<AiOutlineMenuFold />}
            extendStyles="w-1/4"
          >
            <Options font="font-sans">
              <Option>Posts</Option>
              <Option>Collections</Option>
            </Options>
          </Menu>
          <NavbarTitle font="font-sans">Lifestylefoto Dashboard</NavbarTitle>
        </NavbarWeb>

        <main>{children}</main>
      </body>
    </html>
  );
}
