import Image from "next/image";
import menu from "@/pages/api/menu";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const MealDetail = () => {
  const router = useRouter();
  const query = router.query;
  const [meal, setMeal] = useState(null);

  const fetchMeal = async () => {
    const { data } = await menu.get(`lookup.php?i=${query.id}`);
    if (data.status === 404) {
      setMeal([]);
    } else {
      setMeal(data.meals);
    }
  };
  useEffect(() => {
    try {
      fetchMeal();
    } catch (error) {
      console.log(error);
    }
  }, [query.id]);

  // console.log(meal);

  return (
    <div className='text-white py-10'>
      <h1 className='text-3xl font-cormorant text-center pb-14'>
        Meal Details
      </h1>
      <div>
        {meal?.map((item) => (
          <div
            key={item.idMeal}
            className='flex flex-col md:flex-row justify-around items-center gap-12 sm:px-10'
          >
            <div className='md:flex-1'>
              <Image
                src={item.strMealThumb}
                alt='/'
                width={350}
                height={200}
                className='md:w-fit '
              />
            </div>
            <div className='pb-20 max-md:w-full md:flex-1 max-md:px-20'>
              <h3 className='text-xl font-bold pb-3 text-center'>
                {item.strMeal}
              </h3>
              <h4 className='text-lg pb-8 text-center'>Ingedients</h4>
              <div className='border-x-2  font-light text-lg'>
                <div className='flex justify-between border-y-2 '>
                  <p className='py-2 px-2'>{item?.strIngredient1}</p>
                  <p className='py-2 px-2'>{item?.strMeasure1}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient2}</p>
                  <p className='py-2 px-2'>{item?.strMeasure2}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient3}</p>
                  <p className='py-2 px-2'>{item?.strMeasure3}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient4}</p>
                  <p className='py-2 px-2'>{item?.strMeasure4}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient5}</p>
                  <p className='py-2 px-2'>{item?.strMeasure5}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient6}</p>
                  <p className='py-2 px-2'>{item?.strMeasure6}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient7}</p>
                  <p className='py-2 px-2'>{item?.strMeasure7}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient8}</p>
                  <p className='py-2 px-2'>{item?.strMeasure8}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2'>{item?.strIngredient9}</p>
                  <p className='py-2 px-2'>{item?.strMeasure9}</p>
                </div>
                <div className='flex justify-between border-b-2'>
                  <p className='py-2 px-2' px-2>
                    {item?.strIngredient10}
                  </p>
                  <p className='py-2 px-2'>{item?.strMeasure10}</p>
                </div>
              </div>
            </div>
            <div className='md:flex-1 max-md:px-20 px-4'>
              <h4 className='text-lg pb-8 text-center'>Instructions</h4>
              <p className='text-sm text-[#AAAAAA]'>{item.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealDetail;
