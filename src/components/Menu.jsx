import React from "react";
import Image from "next/image";
import cocktail from "../../public/cocktail.png";
import historyHr from "../../public/historyHr.png";
import Link from "next/link";
import chef from "../../public/chef.png";
import rectangle from "../../public/Rectangle 20.png";
import Hr from "../../public/abouHr.png";
import { ImQuotesLeft } from "react-icons/im";
import sign from "../../public/sign.png";
import BG from "../../public/BG.png";
import tomatoes from "../../public/tomatoes.png";
import two from "../../public/Group 26.png";
import one from "../../public/Group 25.png";
import three from "../../public/Group 27.png";
import four from "../../public/Group 28.png";
import bite from "../../public/Group 87.png";

const Menu = () => {
  return (
    <div id='menu' className='text-white py-10 scroll-smooth'>
      <h3 className='font-cormorant capitalize text-center text-base pb-4'>
        Menu that fits your palate
      </h3>
      <div className='flex justify-center'>
        <Image src={historyHr} alt='/' className='py-2' />
      </div>
      <h1 className='font-cormorant text-5xl py-6 text-center text-[#DCCA87]'>
        Today's Special
      </h1>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1'>
          <h3 className='text-2xl font-cormorant text-center pb-12'>
            Wine & Beer
          </h3>
          <div className='px-4'>
            <div className='flex items-center justify-between p-6'>
              <div className=''>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Chapel Hill Shiraz
                </h4>
                <p className='text-[#AAAAAA] text-sm'>AU | Bottle</p>
              </div>
              <hr className='h-2 w-32 md:mr-3' />
              <p className='text-right text-xl font-cormorant font-bold'>$56</p>
            </div>
            <div className='flex items-center justify-between p-6'>
              <div className=''>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Catena Malbee
                </h4>
                <p className='text-[#AAAAAA] text-sm'>AU | Bottle</p>
              </div>
              <hr className='h-2 w-32 md:mr-3' />
              <p className='text-right text-xl font-cormorant font-bold'>$59</p>
            </div>
            <div className='flex items-center justify-between p-6'>
              <div className=''>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  La Vieille Rosé
                </h4>
                <p className='text-[#AAAAAA] text-sm'>FR | 750 ml</p>
              </div>
              <hr className='h-2 w-32 md:mr-3' />
              <p className='text-right text-xl font-cormorant font-bold'>$44</p>
            </div>
            <div className='flex items-center justify-between p-6'>
              <div className=''>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Rhino Pale Ale
                </h4>
                <p className='text-[#AAAAAA] text-sm'>CA | 750 ml</p>
              </div>
              <hr className='h-2 w-32 md:mr-3' />
              <p className='text-right text-xl font-cormorant font-bold'>$31</p>
            </div>
            <div className='flex items-center justify-between p-6'>
              <div className=''>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Irish Guinness
                </h4>
                <p className='text-[#AAAAAA] text-sm'>CA | 750 ml</p>
              </div>
              <hr className='h-2 w-32 md:mr-3' />
              <p className='text-right text-xl font-cormorant font-bold'>$26</p>
            </div>
          </div>
        </div>
        <div className='max-md:hidden flex-1'>
          <Image src={cocktail} alt='/' layout='cover' />
        </div>
        <div className='flex-1'>
          <h3 className='text-2xl font-cormorant text-center pb-12'>
            Cocktails
          </h3>
          <div className='px-4'>
            <div className='px-4 py-6'>
              <div className='flex items-center justify-between'>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Aperol Spritz
                </h4>
                <hr className='h-2 w-32 md:mr-3' />
                <p className='text-right text-xl font-cormorant font-bold'>
                  $20
                </p>
              </div>
              <p className='text-[#AAAAAA] text-sm'>
                Aperol | Villa Marchesi prosecco | soda | 30ml
              </p>
            </div>
            <div className='px-4 py-6'>
              <div className='flex items-center justify-between '>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Dark 'N' Stormy
                </h4>
                <hr className='h-2 w-32 md:mr-3' />
                <p className='text-right text-xl font-cormorant font-bold'>
                  $16
                </p>
              </div>
              <p className='text-[#AAAAAA] text-sm'>
                Dark rum | Ginger beer | Slice of lime.
              </p>
            </div>
            <div className='px-4 py-6'>
              <div className='flex items-center justify-between '>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Daiquiri
                </h4>
                <hr className='h-2 w-32 md:mr-3' />
                <p className='text-right text-xl font-cormorant font-bold'>
                  $10
                </p>
              </div>
              <p className='text-[#AAAAAA] text-sm'>
                Rum | Citrus juice | Sugar
              </p>
            </div>
            <div className='px-4 py-6'>
              <div className='flex items-center justify-between '>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Old Fashioned
                </h4>
                <hr className='h-2 w-32 md:mr-3' />
                <p className='text-right text-xl font-cormorant font-bold'>
                  $31
                </p>
              </div>
              <p className='text-[#AAAAAA] text-sm'>
                Bourbon | Brown sugar | Angostura Bitters
              </p>
            </div>
            <div className='px-4 py-6'>
              <div className='flex items-center justify-between'>
                <h4 className='text-xl font-cormorant text-[#DCCA87]'>
                  Negroni
                </h4>
                <hr className='h-2 w-32 md:mr-3' />
                <p className='text-right text-xl font-cormorant font-bold'>
                  $26
                </p>
              </div>
              <p className='text-[#AAAAAA] text-sm'>
                Gin | Sweet Vermouth | Campari | Orange garnish
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-8'>
        <Link href='#' className=' py-2 px-4 bg-[#DCCA87] text-black '>
          View More
        </Link>
      </div>
      <div
        className='flex flex-col sm:gap-12 md:flex-row md:justify-around py-8 items-center '
        style={{
          backgroundImage: `url(${BG.src})`,
          height: "100%",
          width: "100%",
        }}
      >
        <div className=' relative '>
          <div className='w-52 absolute z-[-999] -bottom-[3%] -left-[3%]'>
            <Image src={rectangle} alt='/' />
          </div>
          <div className='w-52 absolute z-[-999] -top-[3%] -right-[3%]'>
            <Image src={rectangle} alt='/' />
          </div>
          <Image src={chef} alt='/' className='w-[400px] z-20' />
        </div>
        <div className=' max-md:pt-10 px-8'>
          <h3 className='font-cormorant text-lg py-2'>Chef’s Word</h3>
          <Image src={Hr} alt='/' />
          <h1 className='capitalize text-5xl font-light font-cormorant text-[#DCCA87] py-4'>
            What we believe in
          </h1>
          <p className='text-sm text-[#AAAAAA] text-justify max-w-[500px]'>
            <span className='text-white text-3xl'>
              <ImQuotesLeft />
            </span>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
          <h3 className='font-cormorant font-light pt-8 text-xl text-[#DCCA87]'>
            Kevin Luo
          </h3>
          <span className='text-xs text-[#AAAAAA] py-2'>Chef & Founder</span>
          <Image src={sign} alt='/' className='w-40 py-4' />
        </div>
      </div>
      <div
        className=' py-10'
        
      >
        <div className='px-6 py-10'>
          <Image src={bite} alt='/' />
        </div>
        <div className='flex flex-col md:flex-row md:justify-around items-center gap-12'>
          <div>
            <h4 className='font-cormorant text-xl font-bold'>
              Awards & recognition
            </h4>
            <Image src={Hr} alt='/' className='py-3' />
            <h1 className='text-5xl font-cormorant text-[#DCCA87] pb-10'>
              Our Laurels
            </h1>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='flex gap-6'>
                <Image src={two} alt='/' className='w-20' />
                <div>
                  <h4 className='font-cormorant text-[#DCCA87]  text-xl'>
                    Bib Gourmond
                  </h4>
                  <p className='text-sm text-[#AAAAAA] max-w-[190px]'>
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className='flex gap-6'>
                <Image src={one} alt='/' className='w-20' />
                <div>
                  <h4 className='font-cormorant text-[#DCCA87]  text-xl'>
                    Rising Star
                  </h4>
                  <p className='text-sm text-[#AAAAAA] max-w-[190px]'>
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className='flex gap-6'>
                <Image src={three} alt='/' className='w-20' />
                <div>
                  <h4 className='font-cormorant text-[#DCCA87]  text-xl'>
                    AA Hospitality
                  </h4>
                  <p className='text-sm text-[#AAAAAA] max-w-[190px]'>
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className='flex gap-6'>
                <Image src={four} alt='/' className='w-20' />
                <div>
                  <h4 className='font-cormorant text-[#DCCA87]  text-xl'>
                    Outstanding Chef
                  </h4>
                  <p className='text-sm text-[#AAAAAA] max-w-[190px]'>
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={tomatoes} alt='/' className='w-[300px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
