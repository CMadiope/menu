import React from "react";
import Image from "next/image";
import cocktail from "../../public/cocktail.png";
import historyHr from "../../public/historyHr.png";

const Menu = () => {
  return (
    <div id='menu' className='text-white py-10'>
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
    </div>
  );
};

export default Menu;
