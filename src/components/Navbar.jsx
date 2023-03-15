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
    <nav className='p-10 relative w-full '>
      <div className='flex text-white justify-between items-center'>
        <div>
          <Link href='/' className=''>
            <h1 className='text-4xl font-cormorant '>Gerícht</h1>
          </Link>
        </div>

        <div className=' gap-12 text-lg max-lg:text-xs items-center font-sans hidden md:flex'>
          <Link href='/'>Home</Link>
          <Link href='#about'>About</Link>
          <Link href='#menu'>Menu</Link>
          <Link href='#photos'>Photo Gallery</Link>
          <Link href='/contact'>Contact Us</Link>
          <Link href='#'>Log In</Link>
          <Link href='#'>Book a table</Link>
        </div>

        <div
          onClick={handleNav}
          className='z-40 absolute top-12 right-5 cursor-pointer md:hidden '
        >
          {nav ? <RxCross1 className='' /> : <FaBars />}
        </div>
      </div>

      {/* mobile nav */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-hidden md:hidden ease-in duration-300 absolute text-white left-0 top-0 w-screen h-screen bg-black/90 py-10 flex flex-col z-30"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <div className='w-full flex flex-col gap-8 text-center text-xl pt-20 '>
          <Link href='/'>Home</Link>
          <Link href='#about'>About</Link>
          <Link href='#menu'>Menu</Link>
          <Link href='#photos'>Photo Gallery</Link>
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
