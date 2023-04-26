import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

function UpdateRecipes({UpdateRecipes}) {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [countryOfOrigin, setCountryOfOrigin] = useState('');
    const [peopleServed, setPeopleServed] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState(['']);
    const [recipeImage, setRecipeImage] = useState(null);


    const {id} = useParams()

    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:3000/getrecipe/${id}`)
        .then((r)=>r.json())
        .then((recipe)=>{
            setRecipeName(recipe.recipeName)
            setDescription(recipe.lastname)
            setCountryOfOrigin(recipe.email)
            setPeopleServed(recipe.seatno)
            setIngredients(recipe.typeofaccess)
            setInstructions(recipe.instructions)
        });
    },[])

    function handleUpdate(e)
    {
     e.preventDefault()
     fetch(`http://localhost:3000/meals/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
    },
        body:JSON.stringify({
           recipeName: recipeName,
            description: description,
            countryOfOrigin: countryOfOrigin,
            peopleServed: peopleServed,
            ingredients: ingredients,
            instructions: instructions
        })
     })
        .then((r)=>r.json())
        .then(recipe=>{
            UpdateRecipes(recipe)
            navigate("/")
        })
    }
  return (
    <div>
        <form onSubmit={handleUpdate}>
        <label>Recipe Name:</label>
        <input onChange={(e) =>{setRecipeName(e.target.value)}}value={recipeName} type="text" name="recipename" placeholder="enter recipe name"/>

        <label className="label2">Description:</label>
        <input onChange={(e) =>{setDescription(e.target.value)}}value={description}type="text" name="description" placeholder="enter a description"/>

        <label>Country of Origin:</label>
        <input onChange={(e) =>{setCountryOfOrigin(e.target.value)}} value={countryOfOrigin}type="text" name="countryoforigin" placeholder="enter country of origin"/>

        <label>People Served:</label>
        <input onChange={(e) =>{setPeopleServed(e.target.value)}}value={peopleServed} type="number" name="peopleserved" placeholder="enter number of people served"/>

        <label>Ingredients:</label>
        <input onChange={(e) =>{setIngredients(e.target.value)}}value={ingredients} type="number" name="ingredients" placeholder="enter ingredients"/>

        <label>Instructions:</label>
        <input onChange={(e) =>{setInstructions(e.target.value)}}value={instructions} type="number" name="instructions" placeholder="enter instructions"/>

        <input type="submit" value="Submit"/>
        </form>
    </div>
  )}
export default UpdateRecipes;