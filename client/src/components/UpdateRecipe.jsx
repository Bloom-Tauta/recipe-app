// import React from 'react'
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react'

// function UpdateRecipes({UpdateRecipes}) {
//     const [recipeName, setRecipeName] = useState('');
//     const [description, setDescription] = useState('');
//     const [countryOfOrigin, setCountryOfOrigin] = useState('');
//     const [numberOfPeopleServed, setNumberOfPeopleServed] = useState('');
//     const [ingredients, setIngredients] = useState(['']);
//     const [instructions, setInstructions] = useState(['']);
//     const [recipeImage, setRecipeImage] = useState(null);


//     const {id} = useParams()

//     const navigate = useNavigate()
//     useEffect(()=>{
//         fetch(`http://localhost:3000/recipes/${id}`)
//         .then((r)=>r.json())
//         .then((recipe)=>{
//             setRecipeName(recipe.recipeName)
//             setDescription(recipe.lastname)
//             setCountryOfOrigin(recipe.email)
//             setNumberOfPeopleServed(recipe.seatno)
//             setIngredients(recipe.typeofaccess)
//             setInstructions(recipe.instructions)
//         });
//     },[])

//     function handleUpdate(e)
//     {
//      e.preventDefault()
//      fetch(`http://localhost:3000/recipes/${id}`,{
//         method:"PATCH",
//         headers: {
//             "Content-Type":"application/json",
//             "Accept":"application/json"
//     },
//         body:JSON.stringify({
//            recipeName: recipeName,
//             description: description,
//             countryOfOrigin: countryOfOrigin,
//             numberOfPeopleServed: numberOfPeopleServed,
//             ingredients: ingredients,
//             instructions: instructions
//         })
//      })
//         .then((r)=>r.json())
//         .then(recipe=>{
//             UpdateRecipes(recipe)
//             navigate("/")
//         })
//     }
//   return (
//     <div className=''>
//         <div  className=" bg-slate-100 px-12 py-8 drop-shadow-lg mx-auto max-w-2xl mt-4 mb-4">
//         <h2 className='text-center font-bold text-orange-400'>Update Recipe</h2>
//         <div className='flex flex-col'>
//         <form onSubmit={handleUpdate}>
//             <div className='flex flex-col'>
//         <label className="block mb-2 text-sm font-medium text-gray-900">Recipe Name:</label>
//         <input onChange={(e) =>{setRecipeName(e.target.value)}}value={recipeName} type="text" name="recipename"
//         className="bg-gray-50 border border-gray-300
//         text-gray-900 sm:text-sm
//         focus:ring-primary-600 p-2 " placeholder="enter recipe name"/>
//         </div>
//         <div className='flex flex-col'>
//         <label className="block mb-2 text-sm font-medium text-gray-900">Description:</label>
//         <input  onChange={(e) =>{setDescription(e.target.value)}}value={description}type="text" name="description"
//         className="bg-gray-50 border border-gray-300
//         text-gray-900 sm:text-sm
//         focus:ring-primary-600 p-2 " placeholder="enter a description"/>
//         </div>
//         <div className='flex flex-col'>
//         <label className="block mb-2 text-sm font-medium text-gray-900">Country of Origin:</label>
//         <input onChange={(e) =>{setCountryOfOrigin(e.target.value)}} value={countryOfOrigin}type="text" name="countryoforigin"
//           className="bg-gray-50 border border-gray-300
//           text-gray-900 sm:text-sm
//           focus:ring-primary-600 p-2 " placeholder="enter country of origin"/>
//         </div>
//         <div className='flex flex-col'>
//         <label className="block mb-2 text-sm font-medium text-gray-900">People Served:</label>
//         <input onChange={(e) =>{setNumberOfPeopleServed(e.target.value)}}value={numberOfPeopleServed} type="number" name="numberofpeopleserved"
//          className="bg-gray-50 border border-gray-300
//          text-gray-900 sm:text-sm
//          focus:ring-primary-600 p-2 " placeholder="enter number of people served"/>
//         </div>
//         <div className='flex flex-col'>
//         <label className="block mb-2 text-sm font-medium text-gray-900">Ingredients:</label>
//         <input onChange={(e) =>{setIngredients(e.target.value)}}value={ingredients} type="number" name="ingredients"
//          className="bg-gray-50 border border-gray-300
//          text-gray-900 sm:text-sm
//          focus:ring-primary-600 p-2 " placeholder="enter ingredients"/>
//         </div>
//         <div className='flex flex-col'>
//         <label className="block mb-2 text-sm font-medium text-gray-900">Instructions:</label>
//         <input onChange={(e) =>{setInstructions(e.target.value)}}value={instructions} type="number" name="instructions"
//          className="bg-gray-50 border border-gray-300
//          text-gray-900 sm:text-sm
//          focus:ring-primary-600 p-2 " placeholder="enter instructions"/>
//         </div>
//         <div className='flex justify-center'>
//         <input type="submit" value="Submit" className='p-2 rounded-md w-1/2 bg-green-300 my-3 '/>
//         </div>
//         </form>
//         </div>
//         </div>
//     </div>
//   )}
// export default UpdateRecipes;