"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiDungeonsanddragons } from "react-icons/si";
import { FaDiceD20, FaPerson } from "react-icons/fa6";
import { DropDown } from "./DropDown";
import { SideBar } from "./SideBar";

export const Header = () => {
  // state for the navbar. false by default, we want it hidden until the user clicks on it
  const [nav, setNav] = useState(false);

  // toggles the navbar
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-black z-20 sticky text-white top-0 h-[3.75rem]">
      <div className="flex justify-between">
        <div className="h-[3.75rem] flex">
          <div
            onClick={handleNav}
            className="flex items-center text-xl cursor-pointer px-4 duration-200 hover:bg-zinc-900 duration-300 md:hidden"
          >
            <GiHamburgerMenu />
          </div>
          <Link
            href="/"
            className="flex items-center uppercase text-red-600 font-bold text-lg md:text-2xl px-4 hover:text-white duration-500"
          >
            DragonRoll
            <SiDungeonsanddragons className="ml-2 flex" />
          </Link>
        </div>

        <div className="flex">
          <div className="hidden md:flex font-bold uppercase text-sm">
            <Link
              href="/roll"
              className="flex items-center px-4 hover:text-red-600 hover:bg-neutral-900 duration-200"
            >
              Roll <FaDiceD20 className="ml-2 flex" />
            </Link>
            <Link
              href="/characters"
              className="flex items-center px-4 hover:text-red-600 hover:bg-neutral-900 duration-200"
            >
              Character Creation <FaPerson className="ml-2 flex" />
            </Link>
          </div>
          <DropDown />
        </div>
        <div
          className={
            nav
              ? "fixed top-[3.75rem] left-0 w-[250px] h-screen bg-neutral-900"
              : "fixed top-0 right-[-100%] w-[250px] h-screen"
          }
        >
          <SideBar />
        </div>
      </div>
    </nav>
  );
};
