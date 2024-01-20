"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaDiceD20 } from "react-icons/fa6";
import { useUser } from "@auth0/nextjs-auth0/client";
import { GiMagicSwirl } from "react-icons/gi";
import { MdLogout, MdPerson } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { GiBroadsword } from "react-icons/gi";


export const SideBar = () => {
  // get the user info from auth0
  const { user, isLoading } = useUser();
  // state for the sidebar. false by default, hidden until the user clicks on it
  const [nav, setNav] = useState(false);
  // state for loading
  const [loading, setLoading] = useState(true);

  // toggles the navbar
  const handleNav = () => {
    setNav(!nav);
  };

  // loads the users info when the page renders
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <>
      <div className="pt-4 p-4 text-sm font-bold">
        <p className="text-slate-500 text-sm uppercase">Browse</p>
        <Link
          href="/roll"
          className="py-2 flex uppercase text-bold items-center"
          onClick={handleNav}
        >
          <FaDiceD20 className="mr-2 flex" />
          Roll
        </Link>
        <Link
          href="/character"
          className="py-2 flex uppercase text-bold items-center"
          onClick={handleNav}
        >
          <GiMagicSwirl className="mr-2 flex" />
          Create Character
        </Link>
        <p className="text-slate-500 text-sm uppercase mt-4 ">Account</p>
        {loading ? (
          <div className="flex items-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : user ? (
          <div>
            <Link
              href="/characters"
              className="flex items-center py-2 uppercase"
            >
              <GiBroadsword className="mr-2 flex" />
              My Characters
            </Link>

            <Link
              href="/profile"
              className="flex items-center py-2 uppercase"
            >
              <MdPerson className="mr-2 flex" />
              My Profile
            </Link>

            <Link
              href="/api/auth/logout"
              className="flex items-center py-2 uppercase"
              onClick={handleNav}
            >
              <MdLogout className="mr-2 flex" />
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex uppercase font-bold text-sm">
            <Link
              href="/api/auth/login"
              className="flex items-center py-2 uppercase"
              onClick={handleNav}
            >
              <MdPerson className="mr-2 flex" />
              Login
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
