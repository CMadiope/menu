import React, {useEffect, useState} from 'react'
import menu from '@/pages/api/menu';
import axios from 'axios';


const Search = () => {
  

  return (
    <div className='text-white px-20 '>
      <div className='flex flex-col'>
        <input type='text' className='outline-none text-lg py-4 rounded-xl text-black border-none max-w-[500px] bg-white/80' id='input'/>
        <label htmlFor='input'  className='text-[#AAAAAA] py-3'>
          Search Meals or Select Categories From Below
        </label>
      </div>
    </div>
  );
}

export default Search