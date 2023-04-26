import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsForm from './ReviewsForm';
// import {IoMdShareAlt } from 'react-icons/io'
import{FaHeart} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai';
import Share from './Share'
// import { AuthContext } from '../context/AuthContext';

function RecipeDetailPage() {
  const [meal, setMeal] = useState({});
  // const {user} = useContext(AuthContext)

  const { id } = useParams();

  function handleClick(){
    document.querySelector('#ratings').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        setMeal(data)
      })
      .catch(error => console.error(error));
  }, [id]);

  function handleAddToFavorites(e){
    e.preventDefault();
    const favorites ={
      // user_id: user.id,
      // recipe_id: recipe.id
    }
    fetch("/favorites",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favorites),
    })
  }

  return (
    <div className='ml-10 mt-5'>
    { meal.id ?
    <div className='p-2'>
      <div className='flex flex-row gap-12'>
        <div className=''>
        <h1 className='text-5xl '>{meal.strMeal}</h1>
      <p className='py-2 ml-32'>{meal.strArea}</p>
      <div className='grid grid-cols-3 divide-x max-w-lg my-3 gap-2 items-center mt-20'>
        <div className='flex items-center rounded-l-lg  p-2 gap-2 bg-red-200'>
          <button
            className=' hover:underline'
            onClick={handleAddToFavorites}
            >Add to Favorite</button>
          <div className='text-white'>
            <FaHeart size={24}/>
            </div>
        </div>
        <div className='flex items-center border-l gap-2 p-2 bg-gray-100'>
          <button onClick={handleClick} className='hover:underline'>Rate</button>
          <div className='text-red-400'>
            <AiOutlineStar size={24}/>
          </div>
        </div>
        <div className='border-r border-black p-1 bg-gray-100 hover:underline'>
          <Share/>
        </div>
      </div>
        </div>
      <img src={meal.strMealThumb} alt={meal.strMeal} className='max-w-lg'/>
      </div>

      <div className='text-center my-4'>
        <p>{meal.strDescription}</p>
        {/* mealcipe.ratings}{recipe.reviews}</p> */}
      </div>
        <div className='flex gap-16 '>

          <div className=''>
            <div className='text-center my-6'>
            <h2 className='text-2xl text-red-400'>Ingredients:</h2>
            <p className=''>{meal.strServes}</p>
            </div>

            <div className='grid grid-cols-3 gap-2 place-items-stretch my-6'>
            {Object.keys(meal).filter(key => {
              if(key.startsWith('strIngredient')) {
                return true;
              } else {
                return false
              }
            }).filter(key =>  meal[key] !== "").map((ingredient, index) => (
              <li key={index} className='grid grid-cols-3 gap-2 place-items-stretch'>{meal[ingredient]}</li>
            ))}
            </div>
          </div>

        </div>
      <div className='text-center mt-4'>
      <h2 className='text-2xl text-red-400'>Instructions:</h2>
      </div>
      <div className='mt-3 items-center flex flex-col gap-4 text-blue-900'>
        {meal.strInstructions.split(/[\r\n]+/).map((step, index) => (
          <div className='text-black' key={index}>{step}</div>
        ))}
      </div>
    </div>
    :
    <div className='flex justify-center mt-52 text-6xl'>Loading...</div>
    }
    <div id="ratings"className='mt-40 mb-6'>
      <ReviewsForm/>
    </div>

    </div>
  )
}

export default RecipeDetailPage;
