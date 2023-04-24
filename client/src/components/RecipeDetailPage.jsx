import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsForm from './ReviewsForm';
// import {IoMdShareAlt } from 'react-icons/io'
import {AiOutlineStar} from 'react-icons/ai';
import Share from './Share'

function RecipeDetailPage() {
  const [meal, setMeal] = useState({});

  const { id } = useParams();

  function handleClick(){
    document.querySelector('#ratings').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }

  useEffect(() => {
    fetch(`http://localhost:3000/meals/${id}`)
      .then(response => response.json())
      .then(data => {
        setMeal(data)
      })
      .catch(error => console.error(error));
  }, [id]);

  function handleAddToFavorites(e){
    e.preventDefault();
    const favorites ={
     
    }
    fetch("/",{
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
      <h1 className='text-5xl '>{meal.strMeal}</h1>
      <div className='flex items-center gap-3'>
        <p className='py-2'>{meal.strArea}</p>
        <p className=''>{meal.strServes}</p>
      </div>

      <p>{meal.strDescription}</p>
      {/* mealcipe.ratings}{recipe.reviews}</p> */}

      <div className='grid grid-cols-3 divide-x max-w-lg my-3 gap-2 items-center'>
        <button
        className='rounded-l-lg  p-2 bg-red-200 hover:underline'
        onClick={handleAddToFavorites}
        >Add to Favorite</button>
        <div className='flex items-center border-l gap-2 p-2 bg-gray-100'>
          <button onClick={handleClick} className='hover:underline'>Rate</button>
          <div className='text-red-400'>
            <AiOutlineStar/>
          </div>
        </div>
        <div className='border-r border-black p-1 bg-gray-100 hover:underline'>
          <Share/>
        </div>
      </div>
        <div className='flex gap-16 '>
          <img src={meal.strMealThumb} alt={meal.strMeal} className='max-w-lg'/>
          <div className='flex flex-col'>
            <h2>Ingredients:</h2>
            <div>
            {Object.keys(meal).filter(key => {
              if(key.startsWith('strIngredient')) {
                return true;
              } else {
                return false
              }
            }).filter(key =>  meal[key] !== "").map((ingredient, index) => (
              <li key={index}>{meal[ingredient]}</li>
            ))}
            </div>
          </div>

        </div>

      <div className='mt-3 flex flex-col gap-2 text-blue-900'>
        {meal.instructions.split(/[\r\n]+/).map((step, index) => (
          <div className='text-black' key={index}>{step}</div>
        ))}
      </div>
    </div>
    :
    <div className='flex justify-center mt-52 text-6xl'>Loading...</div>
    }
    <div id="ratings"className='mt-8'>
      <ReviewsForm/>
    </div>

    </div>
  )
}

export default RecipeDetailPage;
