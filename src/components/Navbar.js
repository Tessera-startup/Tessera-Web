import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarImg from "../../public/tesseralogoMain.png";
import { toast } from 'react-toastify'
import { TessaraContext } from "../context/Context";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wallet, setWallet } = useContext(TessaraContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connectWallet = async () => {
    try {
      if (window.solana) {
        const currentWallet = await window.solana.connect()
        setWallet(currentWallet)

      } else {
        return toast.warning("Wallet extension not installed")
      }

    } catch (error) {
      console.log(error, "Wallet connection error");

    }
    await window.solana.on('connect', () => {
      
      toast.success("Wallect connected")
    })
  }


  return (
    <nav className="bg-gray-900 nav-font w-full top-0 z-50 border-b border-gray-800 mx-auto">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex w-full items-center">
            {" "}
            <div className="flex-shrink-0 mx-4">
              <Link href="/" className="text-white relative text-2xl" passHref>
                <Image src={NavbarImg} alt={"tessera"} width={50} height={50} />
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
                {/* <Link
                  passHref
                  href="/admin"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  Admin
                </Link> */}
                <Link
                  passHref
                  href="/tickets"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  Tickets
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
                  href="/login"
                  className="text-gray-300 border btn-transparent  hover:text-white px-6 py-2 rounded-md text-sm"
                >
                  Login
                </Link>

                <Link
                  passHref
                  href="/scanner"
                  className="text-gray-300 border btn-transparent  hover:text-white px-6 py-2 rounded-md text-sm"
                >
                  Scan Ticket
                </Link>
                <button

                  className="bg-white text-black px-4 py-2 rounded-lg"
                  onClick={() => connectWallet()}
                >
                  {!wallet == "" ? "Connected":"Connect Wallet"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex md:hidden pr-2">
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
            href="/admin"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white hover:px-4 py-2 rounded-md text-sm "
          >
            Admin
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
            href="/login"
            className="block text-gray-300  hover:bg-gray-700 hover:text-white hover:px-4 py-2  rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <button

            className="bg-white text-black px-4 py-2"
            onClick={() => { }}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
