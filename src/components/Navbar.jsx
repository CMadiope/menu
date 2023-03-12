import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='container relative p-10'>
      <div className='flex text-white justify-between items-center'>
        <div>
          <Link href='/'>
            <h1 className='text-3xl font-cormorant'>Gerícht</h1>
          </Link>
        </div>

        <div className=' gap-10 text-lg items-center font-sans hidden sm:flex'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/menu'>Menu</Link>
          <Link href='/photos'>Photo Gallery</Link>
          <Link href='/contact'>Contact Us</Link>
        </div>
        <div className=' gap-4 text-lg hidden sm:flex'>
          <h4>Log In / Registration</h4>
          <h4 className=''>Book a table</h4>
        </div>

        <div onClick={handleNav} className='z-30 cursor-pointer sm:hidden'>
          {nav ? <RxCross1 /> : <FaBars />}
        </div>
      </div>

      {/* mobile nav */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-white left-0 top-0 w-full h-screen bg-gray-400/10 py-10 flex flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <div className='w-full flex flex-col gap-8 text-center text-xl pt-20 '>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/menu'>Menu</Link>
          <Link href='/photos'>Photo Gallery</Link>
          <Link href='/contact'>Contact Us</Link>
        </div>
        <div className='flex flex-col text-center p-t-6 gap-8 text-xl'>
          <p>Log In / Registration</p>
          <p>Book a table</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
