"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GiBroadsword } from "react-icons/gi";
import { MdLogout, MdPerson } from "react-icons/md";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaSpinner } from "react-icons/fa";

export const DropDown = () => {
  // get the users info from auth0
  const { user, isLoading } = useUser();
  // state for the dropdown. false by default, hidden until the user clicks on it
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // loading state
  const [loading, setLoading] = useState(true);

  // loads the users info when the page renders
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  // toggles the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex relative">
      {loading ? (
        <div className="flex px-4 items-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : user ? (
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 uppercase font-bold hover:bg-neutral-900"
        >
          <img
            className="rounded-md h-10 w-10"
            src={user.picture}
            alt={user.name}
          />
        </button>
      ) : (
        <div className="flex uppercase font-bold text-sm">
          <Link
            href="/api/auth/login"
            className="flex items-center px-4 hover:text-red-600 hover:bg-neutral-900 duration-200"
          >
            Login
          </Link>
        </div>
      )}

      {user && isDropdownOpen && (
        <div className="absolute top-[3.75rem] right-0 w-60 bg-[#171717] text-white font-bold text-sm z-10">
          <Link
            href="/characters"
            className="flex items-center block px-4 py-2 uppercase hover:text-red-600 hover:bg-neutral-800"
          >
            <GiBroadsword className="mr-2 flex" />
            My Characters
          </Link>

          <Link
            href="/profile"
            className="flex items-center block px-4 py-2 uppercase hover:text-red-600 hover:bg-neutral-800"
          >
            <MdPerson className="mr-2 flex" />
            My Profile
          </Link>

          <Link
            href="/api/auth/logout"
            className="flex items-center block px-4 py-2 uppercase hover:text-red-600 hover:bg-neutral-800"
          >
            <MdLogout className="mr-2 flex" />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};
