import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarImg from "../../public/tesseralogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 nav-font w-full top-0 z-50 border-b border-gray-800 mx-auto ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex w-full items-center"> {/* Added items-center class here */}
            <div className="flex-shrink-0 mx-4">
              <Link href="/" className="text-white relative text-2xl" passHref>
                <Image src={NavbarImg} alt={"tessera"} width={100} height={100} />
              </Link>
            </div>
            <div className="hidden md:flex justify-end w-full items-center">
              <div className="flex space-x-4">
                <Link
                  passHref
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  Home
                </Link>
                <Link
                  passHref
                  href="/tickets"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  My Tickets
                </Link>
                <Link
                  passHref
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  About
                </Link>
                <Link
                  passHref
                  href="/schedules"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  Schedules
                </Link>
                <Link
                  passHref
                  href="/login"
                  className="text-gray-300 border border-white bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm"
                >
                  Login
                </Link>
                <Link
                  passHref
                  href="/login"
                  className="text-gray-300 border border-white bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm"
                >
                  Connect Wallet
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 w-[95%] m-auto">
          <Link
            passHref
            href="/"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white hover:px-4 py-2 rounded-md text-sm "
          >
            Home
          </Link>
          <Link
            passHref
            href="/tickets"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white hover:px-4 py-2 rounded-md text-sm "
          >
            My Tickets
          </Link>
          <Link
            passHref
            href="/about"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white hover:px-4 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <Link
            passHref
            href="/schedules"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white hover:px-4 py-2 rounded-md text-sm "
          >
            Schedules
          </Link>
          <Link
            passHref
            href="/login"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white hover:px-4 py-2  rounded-md text-sm font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
