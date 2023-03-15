import React from 'react'
import BG from "../../public/BG.png";
import Hr from '../../public/historyHr.png'
import contact from '../../public/contaact.png'
import Image from 'next/image';
import rectangle from '../../public/Rectangle 20.png'

const Contact = () => {
  return (
    <div
      id='contact'
      className='text-white flex flex-col md:flex-row justify-around gap-12 py-10 item-center'
      style={{
        backgroundImage: `url(${BG.src})`,
        height: "100%",
        width: "100%",
      }}
    >
      <div className='p-10'>
        <h4 className='font-cormorant text-xl'>Contact</h4>
        <Image src={Hr} alt='/' className='py-2' />
        <h1 className='font-cormorant text-4xl text-[#DCCA87]'>Find Us</h1>
        <p className='text-xs text-[#AAAAAA] py-6'>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <h4 className='text-lg text-[#DCCA87] font-cormorant pb-3'>
          Opening Hours
        </h4>
        <p className='text-xs text-[#AAAAAA]'>Mon - Fri: 08:00 am - 20:00 pm</p>
        <p className='text-xs text-[#AAAAAA]'>Sat - Sun: 09:00 am - 18:00 pm</p>
      </div>
      <div className=' max-md:ml-12 md:ml-0'>
        
        <div className='z-20'>
          <Image
          src={contact}
          alt='/'
          objectFit='cover'
          className='max-w-[400px] '
        />
        </div>
        
      </div>
    </div>
  );
}

export default Contact