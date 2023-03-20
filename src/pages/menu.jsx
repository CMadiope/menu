import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect } from "react";
import { useState, useRef } from "react";
import menu from "./api/menu";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const filterRef = useRef();
  const [filterTerm, setFilterTerm] = useState("");
  const mealInputRef = useRef();

  const ChangeFilter = (e) => {
    setFilterTerm(e.currentTarget.textContent);
    //  console.log(filterTerm);
  };
  const fetchMeal = async () => {
    const searchValue = mealInputRef.current.value;
    const { data } = await menu.get(`search.php?s=${searchValue}`);
    if (data.status === 404) {
      setFilter([]);
    } else {
      setFilter(data.meals);
    }
  };
  useEffect(() => {
    try {
      fetchMeal();
    } catch (error) {
      console.log(error);
    }
  }, [input]);

  const Filter = async () => {
    const { data } = await menu.get(`filter.php?c=${filterTerm}`);
    if (data.status === 404) {
      setFilter([]);
    } else {
      setFilter(data.meals);
    }
  };

  const fetchCategories = async () => {
    const { data } = await menu.get(`categories.php`);
    if (data.status === 404) {
      setCategories([]);
      return;
    } else {
      setCategories(data.categories);
    }
  };
  useEffect(() => {
    try {
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    try {
      Filter();
    } catch (error) {
      console.log(error);
    }
  }, [filterTerm]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.witch === 13) {
      fetchMeal();
    }
  };

  return (
    <div className='text-white py-12'>
      <div className='flex flex-col px-16'>
        <input
          type='text'
          className='outline-none text-lg py-4 rounded-xl text-black border-none max-w-[500px] bg-white/80'
          id='input'
          onKeyPress={handleKeyPress}
          ref={mealInputRef}
        />
        <label htmlFor='input' className='text-[#AAAAAA] py-3'>
          Search Meals or Select Categories From Below
        </label>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 lg:grid-cols-7 gap-6 mx-auto p-10'>
        {categories?.map((item) => (
          <button
            key={item.idCategory}
            className='bg-slate-600 py-2 px-4 text-center hover:bg-slate-400 cursor-pointer active:bg-slate-400'
            ref={filterRef}
            onClick={ChangeFilter}
          >
            {item.strCategory}
          </button>
        ))}
      </div>
      <div className='grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols:4 xl:grid-cols-5 max-sm:pl-[25%] px-10'>
        {filter?.map((item) => (
          <Link
            href={`/meals/[id]`}
            as={`meals/${item.idMeal}`}
            key={item.idCategory}
          >
            <h1 className='w-[230px] text-l font-cormorant '>
              {item.strMeal}
              <Image
                src={item.strMealThumb}
                alt='/'
                width={200}
                height={400}
                className='w-400px pt-4'
              />
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
