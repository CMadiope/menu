import React from "react";
import Image from "next/image";
import BG from "../../public/BG.png";
import knife from "../../public/knife.png";
import aboutHr from "../../public/abouHr.png";
import historyHr from "../../public/historyHr.png";
import Link from "next/link";

const About = () => {
  return (
    <div
      className='text-white py-10 h-screen relative w-screen overflow-hidden'
      id='about'
    >
      <div className='absolute -z-10'>
        <Image src={BG} alt='/' layout='cover'  className="max-md:hidden"/>
      </div>
      <div className='absolute text-[150px] -z-10 md:text-[400px]  text-[#272727] flex- justify-center font-cormorant pl-[40%] max-md:hidden'>
        G
      </div>
      <div className='pl-[46%] pt-[6%] z-10 max-md:hidden'>
        <Image src={knife} alt='/' className='object-contain h-[500px] ' />
      </div>
      <div className='flex gap-32 md:absolute md:top-64 md:pl-[18%] max-md:flex-col max-md:items-center'>
        <div className=' text-right max-w-[400px]'>
          <h3 className='text-[#DCCA87] text-4xl font-cormorant text-right'>
            About Us
          </h3>
          <div className='flex justify-end py-4'>
            <Image src={aboutHr} alt='/' />
          </div>
          <p className='text-[#AAAAAA] pb-8 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Link href='#' className='py-2 px-4 bg-[#DCCA87] text-black'>
            Know More
          </Link>
        </div>
        <div className='max-w-[400px]'>
          <h3 className='text-[#DCCA87] text-4xl font-cormorant'>
            Our History
          </h3>
          <Image src={historyHr} alt='/' className='py-4' />
          <p className='text-[#AAAAAA] pb-8 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Link href='#' className='py-2 px-4 bg-[#DCCA87] text-black'>
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
