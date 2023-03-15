import React from "react";
import Image from "next/image";
import Hr from "../../public/historyHr.png";
import Link from "next/link";
import pic1 from "../../public/gallery/pic1.png";
import pic2 from "../../public/gallery/pic2.png";
import pic3 from "../../public/gallery/pic3.png";
import pic4 from "../../public/gallery/pic4.png";

const Photos = () => {
  return (
    <div id='photos' className='text-white'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 '>
        <div className=' py-8 px-6'>
          <h4 className='font-cormorant text-xl'>Instagram</h4>
          <Image src={Hr} alt='/' className='py-2' />
          <h2 className='font-cormorant text-3xl text-[#DCCA87]'>
            Photo Gallery
          </h2>
          <p className='text-xs text-[#AAAAAA] py-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>

          <Link
            href='/'
            className='text-black bg-[#DCCA87] text-xs py-2 px-4 text-center'
          >
            View More
          </Link>
        </div>
        <div>
          <Image src={pic1} alt='/' />
        </div>
        
        <div>
          <Image src={pic2} alt='/' />
        </div>
        <div>
          <Image src={pic3} alt='/' />
        </div>
        <div>
          <Image src={pic1} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Photos;
