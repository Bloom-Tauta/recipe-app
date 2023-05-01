
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ReviewsForm from './ReviewsForm';
// // import {IoMdShareAlt } from 'react-icons/io'
// import {AiOutlineStar} from 'react-icons/ai';
// import Share from './Share'

// // function RecipeDetailPage() {
// //   const [meal, setMeal] = useState({});

// //   const { id } = useParams();

// //   function handleClick(){
// //     document.querySelector('#ratings').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
// //   }

// //   useEffect(() => {
// //     fetch(`http://localhost:3001/meals/${id}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         setMeal(data)
// //       })
// //       .catch(error => console.error(error));
// //   }, [id]);

// //   function handleAddToFavorites(e){
// //     e.preventDefault();
// //     const favorites ={
     
// //     }
// //     fetch("/",{
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(favorites),
// //     })
// //   }

// //   return (
// //     <div className='ml-10 mt-5'>
// //     { meal.id ?
// //     <div className='p-2'>
// //       <h1 className='text-5xl '>{meal.strMeal}</h1>
// //       <div className='flex items-center gap-3'>
// //         <p className='py-2'>{meal.strArea}</p>
// //         <p className=''>{meal.strServes}</p>
// //       </div>

// //       <p>{meal.strDescription}</p>
// //       {/* mealcipe.ratings}{recipe.reviews}</p> */}

// //       <div className='grid grid-cols-3 divide-x max-w-lg my-3 gap-2 items-center'>
// //         <button
// //         className='rounded-l-lg  p-2 bg-red-200 hover:underline'
// //         onClick={handleAddToFavorites}
// //         >Add to Favorite</button>
// //         <div className='flex items-center border-l gap-2 p-2 bg-gray-100'>
// //           <button onClick={handleClick} className='hover:underline'>Rate</button>
// //           <div className='text-red-400'>
// //             <AiOutlineStar/>
// //           </div>
// //         </div>
// //         <div className='border-r border-black p-1 bg-gray-100 hover:underline'>
// //           <Share/>
// //         </div>
// //       </div>
// //         <div className='flex gap-16 '>
// //           <img src={meal.strMealThumb} alt={meal.strMeal} className='max-w-lg'/>
// //           <div className='flex flex-col'>
// //             <h2>Ingredients:</h2>
// //             <div>
// //             {Object.keys(meal).filter(key => {
// //               if(key.startsWith('strIngredient')) {
// //                 return true;
// //               } else {
// //                 return false
// //               }
// //             }).filter(key =>  meal[key] !== "").map((ingredient, index) => (
// //               <li key={index}>{meal[ingredient]}</li>
// //             ))}
// //             </div>
// //           </div>

// //         </div>

// //       <div className='mt-3 flex flex-col gap-2 text-blue-900'>
// //         {meal.instructions.split(/[\r\n]+/).map((step, index) => (
// //           <div className='text-black' key={index}>{step}</div>
// //         ))}
// //       </div>
// //     </div>
// //     :
// //     <div className='flex justify-center mt-52 text-6xl'>Loading...</div>
// //     }
// //     <div id="ratings"className='mt-8'>
// //       <ReviewsForm/>
// //     </div>

// //     </div>
// //   )
// // }

// // export default RecipeDetailPage;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ReviewsForm from './ReviewsForm';
// // import {IoMdShareAlt } from 'react-icons/io'
// import {AiOutlineStar} from 'react-icons/ai';
// import Share from './Share'

// function RecipeDetailPage() {
//   const [recipe, setRecipe] = useState({});

// import React, { useState , useEffect} from "react";
// import { useParams } from "react-router-dom";
// import { GoPin } from "react-icons/go"
// import { BsShareFill, BsFacebook, BsTwitter } from "react-icons/bs"
// import{ RiWhatsappFill } from "react-icons/ri"
// import Share from "./Share"

// function RecipeDetails() {


//     const [recipe, setRecipe] = useState(null)

//     const { id } = useParams()
//   useEffect(() => {
//     fetch(`http://localhost:3000/recipes/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         setRecipe(data)
//       })
//       .catch(error => console.error(error));
//   }, [id]);

//   function handleAddToFavorites(e){
//     e.preventDefault();
//     const favorites ={
//     useEffect(() => {
//         fetch(`http://localhost:3000/recipes/${id}`)
//         .then(res => res.json())
//         .then(data => setRecipe(data))
//     }, [])

//     let ingredients = [], instructions = []
//     if(recipe) {
//         ingredients = recipe.ingredients.split("\r\n")
//         instructions = recipe.instructions.split("\r\n")

//     }


// //   return (
// //     <div className='ml-10 mt-5'>
// //     { recipe.id ?
// //     <div className='p-2'>
// //       <h1 className='text-5xl '>{recipe.recipe_name}</h1>
// //       <div className='flex items-center gap-3'>
// //         <p className='py-2'>{recipe.country_of_origin}</p>
// //         <p className=''>{recipe.number_of_people_served}</p>
// //       </div>

// //       <p>{recipe.description}</p>
// //       {/* recipecipe.ratings}{recipe.reviews}</p> */}

// //       <div className='grid grid-cols-3 divide-x max-w-lg my-3 gap-2 items-center'>
// //         <button
// //         className='rounded-l-lg  p-2 bg-red-200 hover:underline'
// //         onClick={handleAddToFavorites}
// //         >Add to Favorite</button>
// //         <div className='flex items-center border-l gap-2 p-2 bg-gray-100'>
// //           <button onClick={handleClick} className='hover:underline'>Rate</button>
// //           <div className='text-red-400'>
// //             <AiOutlineStar/>
// //           </div>
// //         </div>
// //         <div className='border-r border-black p-1 bg-gray-100 hover:underline'>
// //           <Share/>
// //         </div>
// //       </div>
// //         <div className='flex gap-16 '>
// //           <img src={recipe.recipe_image} alt={recipe.recipe_name} className='max-w-lg'/>
// //           <div className='flex flex-col'>
// //             <h2>Ingredients:</h2>
// //             <div>
// //             {Object.keys(recipe).filter(key => {
// //               if(key.startsWith('inredients')) {
// //                 return true;
// //               } else {
// //                 return false
// //               }
// //             }).filter(key =>  recipe[key] !== "").map((ingredient, index) => (
// //               <li key={index}>{recipe[ingredient]}</li>
// //             ))}
// //             </div>
// //           </div>

// //         </div>

// //       <div className='mt-3 flex flex-col gap-2 text-blue-900'>
// //         {recipe.instructions.split(/[\r\n]+/).map((step, index) => (
// //           <div className='text-black' key={index}>{step}</div>
// //         ))}
// //       </div>
// //     </div>
// //     :
// //     <div className='flex justify-center mt-52 text-6xl'>Loading...</div>
// //     }
// //     <div id="ratings"className='mt-8'>
// //       <ReviewsForm/>
// //     </div>

// //     </div>
// //   )
// // }

// // export default RecipeDetail


//     return (
//         <>
//             { recipe &&
//             <div className="bg-slate-200">
//                 <div className="p-4 grid  md:grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                         <h3 className="font-bold text-[2em] text-center text-orange-600">{recipe.recipe_name}</h3>
//                         <div className="border-b border-orange-500 w-3/4 my-2 mx-auto"></div>
//                         <h4 className="font-bold text-xl text-center text-orange-700">{recipe.country_of_origin} - {recipe.recipe_category}</h4>
//                         <div className="flex-grow flex flex-col items-center justify-center p-6">
//                             <img className="rounded-lg" src={recipe.recipe_thumb} alt={recipe.strMeal} />
//                         </div>
//                         <div className="rounded my-4 bg-slate-100">
//                             <Share/>
//                             {/* <div className="py-1  px-4 text-sm flex items-center gap-4"><BsShareFill /> Share</div>
//                             <div className="grid grid-cols-3 gap-4 w-max text-xl py-2 px-6">
//                                 <button className="hover:text-orange-500"><RiWhatsappFill /></button>
//                                 <button className="hover:text-orange-500"><BsFacebook /></button>
//                                 <button className="hover:text-orange-500"><BsTwitter /></button>
//                             </div> */}
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center flex-col">
//                         <h2 className="text-center my-2 font-bold text-orange-500">Ingredients</h2>
//                         <div className="grid grid-cols-3 gap-4">
//                             {
//                                 ingredients.map((ingredient, index) => {
//                                     const [ ingr, measure ] = ingredient.split("|")
//                                     return (
//                                         <div key={index} className="flex items-center p-2 bg-slate-100 shadow-lg flex-col rounded">
//                                             <div className="grid grid-cols-2 gap-2 items-center">
//                                                 <img className="w-24" src={`https://www.themealdb.com/images/ingredients/${ingr}-small.png`} alt={ingr} />
//                                                 <p className="text-sm">{ingr}</p>
//                                             </div>
//                                             <div className="text-sm">{measure}</div>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-4">
//                     <h3>{recipe.description}</h3>
//                 </div>
//                 <div className="grid md:grid-cols-2 items-center pb-8 px-4">
//                     <div className="mb-6">
//                         <h2 className="text-center my-2 font-bold text-orange-500 text-xl">Instructions</h2>
//                         <div>
//                             {
//                             instructions.map((instr, index) => {
//                                 return (
//                                     <div key={index}>
//                                     { instr.length > 0 &&
//                                     < >
//                                     <div className="flex items-center my-2 p-1 w-[90%] mx-auto">
//                                         <span className="font-bold text-orange-600 mx-4"><GoPin /></span>{instr}
//                                     </div>
//                                     <div className="border-b border-orange-500 w-[80%] mx-auto"></div>
//                                     </>
//                                     }
//                                     </div>
//                                 )
//                             })
//                             }
//                         </div>
//                     </div>
//                     <iframe className="rounded" width="100%" height="480" src={`https://www.youtube.com/embed/${recipe.youtube_code}`} title={recipe.recipe_name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
//                 </div>
//             </div>
//             }
//         </>
//     )
// }

// export default RecipeDetails;

import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { GoPin } from "react-icons/go"
import { BsShareFill, BsFacebook, BsTwitter } from "react-icons/bs"
import{ RiWhatsappFill } from "react-icons/ri"
import Share from "./Share"

function RecipeDetails() {

    const [recipe, setRecipe] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch('http://localhost:3000/recipes/${id}')
        .then(res => res.json())
        .then(data => setRecipe(data))
    }, [])

    let ingredients = [], instructions = []
    if(recipe) {
        ingredients = recipe.ingredients.split("\r\n")
        instructions = recipe.instructions.split("\r\n")
    }



    return (
        <>
            { recipe &&
            <div className="bg-slate-200">
                <div className="p-4 grid  md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[2em] text-center text-orange-600">{recipe.recipe_name}</h3>
                        <div className="border-b border-orange-500 w-3/4 my-2 mx-auto"></div>
                        <h4 className="font-bold text-xl text-center text-orange-700">{recipe.country_of_origin} - {recipe.recipe_category}</h4>
                        <div className="flex-grow flex flex-col items-center justify-center p-6">
                            <img className="rounded-lg" src={recipe.recipe_thumb} alt={recipe.strMeal} />
                        </div>
                        <div className="rounded my-4 bg-slate-100">
                            <Share/>
                            {/* <div className="py-1  px-4 text-sm flex items-center gap-4"><BsShareFill /> Share</div>
                            <div className="grid grid-cols-3 gap-4 w-max text-xl py-2 px-6">
                                <button className="hover:text-orange-500"><RiWhatsappFill /></button>
                                <button className="hover:text-orange-500"><BsFacebook /></button>
                                <button className="hover:text-orange-500"><BsTwitter /></button>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <h2 className="text-center my-2 font-bold text-orange-500">Ingredients</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                ingredients.map((ingredient, index) => {
                                    const [ ingr, measure ] = ingredient.split("|")
                                    return (
                                        <div key={index} className="flex items-center p-2 bg-slate-100 shadow-lg flex-col rounded">
                                            <div className="grid grid-cols-2 gap-2 items-center">
                                                <img className="w-24" src={`https://www.themealdb.com/images/ingredients/${ingr}-small.png`} alt={ingr} />
                                                <p className="text-sm">{ingr}</p>
                                            </div>
                                            <div className="text-sm">{measure}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h3>{recipe.description}</h3>
                </div>
                <div className="grid md:grid-cols-2 items-center pb-8 px-4">
                    <div className="mb-6">
                        <h2 className="text-center my-2 font-bold text-orange-500 text-xl">Instructions</h2>
                        <div>
                            {
                            instructions.map((instr, index) => {
                                return (
                                    <div key={index}>
                                    { instr.length > 0 &&
                                    < >
                                    <div className="flex items-center my-2 p-1 w-[90%] mx-auto">
                                        <span className="font-bold text-orange-600 mx-4"><GoPin /></span>{instr}
                                    </div>
                                    <div className="border-b border-orange-500 w-[80%] mx-auto"></div>
                                    </>
                                    }
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <iframe className="rounded" width="100%" height="480" src={`https://www.youtube.com/embed/${recipe.youtube_code}`} title={recipe.recipe_name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            }
        </>
    )
}

export default RecipeDetails;
