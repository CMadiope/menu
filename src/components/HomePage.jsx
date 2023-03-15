import React from "react";
import Link from "next/link";
import Image from "next/image";
import fish from "../../public/fish.png";
import rectangle from "../../public/Rectangle 20.png";
import About from "./About";
import Menu from "./Menu";
import Photos from "./Photos";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div className='text-white py-10 w-full'>
      <div className='flex flex-col md:flex-row gap-12 items-center'>
        <div className='pl-20 flex- flex-col max-w-[600px]'>
          <h3 className='font-cormorant pb-4'>Chase The New Flavour</h3>
          <h1 className='font-cormorant text-5xl text-[#DCCA87] capitalize'>
            The key to Fine dining
          </h1>
          <p className='text-sm text-gray-500 py-8'>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <Link
            href='/menu'
            className='text-xs py-2 px-4 bg-[#DCCA87] text-black hover:bg-[#DCCA87]/90 '
          >
            Explore the Menu
          </Link>
        </div>
        <div className=' relative max-md:ml-12 md:ml-0 max-w-[400px]'>
          <div className='w-40 absolute z-[-999] -top-[2%] -right-[2%]'>
            <Image src={rectangle} alt='/' className='w-[100%] h-[100%]' />
          </div>
          <div className='w-40  absolute z-[-999] -bottom-[2%] -left-[2%]'>
            <Image src={rectangle} alt='/' className='w-[100%] h-[100%]' />
          </div>
          <Image src={fish} alt='/' objectFit='cover' className=' z-20' />
        </div>
      </div>
      <section className="py-10">
        <About />
      </section>
      <Menu />
      <Photos/>
      <Contact/>
    </div>
  );
};

export default HomePage;
