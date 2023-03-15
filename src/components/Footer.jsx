import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hr from "../../public/historyHr.png";
import {FaFacebookF} from 'react-icons/fa'
import { FiTwitter, FiInstagram } from "react-icons/fi";


const Footer = () => {
  return (
    <footer>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 text-white gap-12'>
        <div>
          <h3 className='text-[#F5EFDB] font-cormorant text-xl text-center py-4'>
            Contact Us
          </h3>
          <p className='text-xs text-[#AAAAAA] text-center'>
            53rd St, Johannesburg, Gauteng, RSA
          </p>
          <p className='text-xs text-[#AAAAAA] text-center py-2'>
            +27 800 4379 89
          </p>
          <p className='text-xs text-[#AAAAAA] text-center'>+27 800 4869 89</p>
        </div>
        <div>
          <Link
            href='/'
            className='flex justify-center  text-3xl text-[#DCCA87]'
          >
            Gerícht
          </Link>
          <p className='text-xs text-[#AAAAAA] text-center py-4 '>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className='flex justify-center py-3'>
            <Image src={Hr} alt='/' />
          </div>
          <div className='flex gap-3 justify-center py-4 text-[#F5EFDB]'>
            <FaFacebookF />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div>
          <h3 className='text-[#F5EFDB] font-cormorant text-xl text-center py-4'>
            Working Hours
          </h3>
          <p className='text-xs text-[#AAAAAA] text-center pt-4 '>
            Monday - Friday:
          </p>
          <p className='text-xs text-[#AAAAAA] text-center  '>
            08:00 am - 20:00 pm
          </p>
          <p className='text-xs text-[#AAAAAA] text-center pt-4 '>
            Saturday - Sunday:
          </p>
          <p className='text-xs text-[#AAAAAA] text-center  '>
            09:00 am - 18:00 pm
          </p>
        </div>
      </div>
      <p className="text-sm text-[#AAAAAA] text-center py-8">2023 Gerícht. All Rights reserved.</p>
    </footer>
  );
};

export default Footer;
