import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiDungeonsanddragons } from "react-icons/si";

export const Header = () => {
  return (
    <nav className="bg-black z-20 sticky text-white top-0 h-[3.75rem]">
      <div className="flex justify-between">
        <div className="h-[3.75rem] flex">
          <div className="flex items-center text-xl cursor-pointer px-4 duration-200 hover:bg-zinc-900 duration-300 md:hidden">
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
      </div>
    </nav>
  );
};
