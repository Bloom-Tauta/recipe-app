import React, { useEffect, useState,useContext } from 'react';
import { AiOutlineCamera } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import {RxCrossCircled } from 'react-icons/rx'
import { AuthContext } from '../context/AuthContext';



function AddRecipeForm(){
  const [recipe_name, setRecipeName] = useState('');
  const [recipeCategory, setRecipeCategory] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [countryOfOrigin, setCountryOfOrigin] = useState('');
  const [recipes, setRecipes] =useState([])
  const [numberOfPeopleServed, setNumberOfPeopleServed] = useState('');
  const [instructions, setInstructions] = useState(['']);
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  const [ingredients, setIngredients] = useState([
    {name: "", measure: "", image: null},
    {name: "", measure: "", image: null}
  ]);

  function updateIngredients(id, attribute, value) {
    setIngredients(ingredients.map((ingredient, index) =>{
      if(id === index){
        ingredient[attribute] = value;
        return ingredient
      }else{
        return ingredient
      }
    }))
  }



  function handleImageUpload(e) {
    readImage(e.target.files[0])


  }

  function readImage(file) {
    const reader = new FileReader();

    reader.onload = () => {
      setMainImage(reader.result)
    }

    reader.readAsDataURL(file)
  }


  // const [recipeImage, setRecipeImage] = useState(null);


  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleRecipeCategoryChange = (e) => {
    setRecipeCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCountryOfOriginChange = (e) => {
    setCountryOfOrigin(e.target.value);
  };

  const handleNumberOfPeopleServedChange = (e) => {
    setNumberOfPeopleServed(e.target.value);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, {name: "", measure: "", image: null} ]);
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((ingredient, idx) => idx!==index ));
  };


  const handleStepsChange = (e, index) => {
    const newSteps = [...instructions];
    newSteps[index] = e.target.value;
    setInstructions(newSteps);
  };

  const handleAddStep = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveSteps = (index) => {
    const newSteps = [...instructions];
    newSteps.splice(index, 1);
    setInstructions(newSteps);
  };

  // const handleRecipeImageChange = (e) => {
  //   setRecipeImage(e.target.files[0]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user_id = localStorage.getItem('user.id'); // function to get the current user ID
    

    const recipeFormData = {
      user_id: user_id,
      recipe_name: recipe_name,
      recipe_category: recipeCategory,
      description: description,
      recipe_thumb: mainImage,
      country_of_origin: countryOfOrigin,
      number_of_people_served: numberOfPeopleServed,
      ingredients: ingredients,
      instructions: instructions,
    }
    postRecipe(recipeFormData)
    console.log(recipeFormData)
  }

  const { token } = useContext(AuthContext);

  function postRecipe(recipeFormData){

    fetch('/recipes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify(recipeFormData)
  })
  .then(response => response.json())
  .then(data =>{
    setRecipes([...recipes, data])
    })
  }


  return (
    <div>
    {isLoggedIn ? (
    <div className='border border-4  bg-slate-100 drop-shadow-lg items-center my-4 mx-auto max-w-3xl'>
       <div className='border border-4  bg-slate-100 drop-shadow-lg items-center  mx-auto max-w-3xl'>
        <div className="flex flex-col items-center  bg-slate-100 drop-shadow-lgjustify-center px-12 py-8 mx-auto max-w-2xl mt-4 mb-4">
        <div className='flex mb-3 items-center'>
          <div className=" text-orange-500">
            <FaPlus size={20}/>
          </div>
          <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-3xl border-b-[10px] border-orange-500">Add a Recipe</h3>
        </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
                <div className="">
                  <div className='flex flex-col'>
                    <label htmlFor="recipename" className="block mb-2 text-sm font-medium text-gray-900">Recipe Name</label>
                    <input type='text' id='recipename' value={recipe_name} onChange={(e) => handleRecipeNameChange (e)}  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 p-2 "placeholder='recipe name' required/>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="recipename" className="block mb-2 text-sm font-medium text-gray-900"> Recipe Category</label>
                    <input type='text' id='recipecategory' value={recipeCategory} onChange={(e) => handleRecipeCategoryChange (e)}  className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 p-2 " placeholder='recipe category' required/>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900"> Description</label>
                    <textarea type='text' id='recipecategory' value={description} onChange={(e) => handleDescriptionChange (e)} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 p-2" placeholder='description' required></textarea>
                </div>
                </div>
                <div className="flex flex-col p-2">
                  {mainImage ?
                  <img src={mainImage} alt="recipeImage" />
                  :<div className='flex-grow'>
                  <label htmlFor='main_image' className='border border-orange-400 flex items-center justify-center text-orange-400 text-center outline-none block h-full'><AiOutlineCamera size={26}/></label>
                  <input className="hidden" onChange={handleImageUpload} aria-describedby="file_input_help" id="main_image" type="file" required/>
                </div>

                  }
                  <p className="text-center">JPEG, JPG,  PNG  </p>
                </div>
              </div>
              <div className="flex flex-col my-4 ">
                <label  htmlFor="countryoforigin" className="block mb-2 text-sm font-medium text-gray-900"> Country of Origin</label>
                <input type='text' id='countryoforigin' value={countryOfOrigin} onChange={(e) => handleCountryOfOriginChange(e)} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 p-2 "required/>
              </div>
              <div className="flex flex-col my-4">
                <label  htmlFor="numberofpeopleserving" className="block mb-2 text-sm font-medium text-gray-900"> Number of People Served</label>
                <input type='number' id='numberofpeopleserved' value={numberOfPeopleServed} onChange={(e) => handleNumberOfPeopleServedChange(e)} className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 p-2 "required/>
              </div>
              <div>
                <h2 className="font-bold">Ingredient</h2>
                <p>Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and any special preparation (i.e. sifted, softened, chopped)</p>
                <div>
                  {ingredients.map((ingredient, index) => {
                    return (
                      <Ingredient key={index} index={index} ingredient={ingredient} updateIngredients={updateIngredients} handleAddIngredient={handleAddIngredient} handleRemoveIngredient={handleRemoveIngredient} />
                    )
                  })}
                </div>
              </div>
              <button type="button" onClick={handleAddIngredient} className="flex flex-row items-center border boder-black bg-green-100 p-2 rounded-md my-3 bg-orange-500 gap-1"><FaPlus size={12}/> Add Ingredient</button>
              <div className="mt-3">
                <h2 className="font-bold">Steps</h2>
                <p>Explain how to make your recipe, including oven temperatures, baking or cooking times, and pan sizes, etc.</p>
                <div className="py-2">
                  {instructions.map((step, index) =>(
                    <div key={index} className="flex flex-col">
                      <label>Step {index + 1}:</label>
                      <div className="flex flex-row gap-2">
                        <input type='text' value={step}  onChange={(e) => handleStepsChange(e, index)} className="outline-none bg-gray-50 border border-black text-gray-900 sm:text-sm focus:ring-primary-600 p-2 w-full" required/>
                        <button type="button" onClick={() => handleRemoveSteps(index)}>
                          <RxCrossCircled size={26}/>
                        </button>
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddStep} className="flex flex-row gap-1 items-center border my-3 rounded-md boder-black bg-green-100 p-2 bg-orange-500">
                    <FaPlus size={12}/>Add Step
                  </button>
                  <div className='flex flex-col my-2'>
                    <label htmlFor="url" className='font-bold'>Youtube Code:</label>
                    <input type="url" name="url" id="url" className='outline-none bg-gray-50 border border-black text-gray-900 sm:text-sm focus:ring-primary-600 p-2 w-full'placeholder="e.g.  https://www.youtube.com/watch?v=moAgOJVQw28" pattern="https://.*" size="30" required/>
                  </div>
                  <div className="flex flex-row items-center gap-3 justify-end mt-4">
                    <input type="submit" value="Cancel" className="text-blue-500 hover:underline" />
                    <button type="submit" className="border border-black p-2 bg-orange-400 hover:bg-green-800 rounded-lg ">Submit</button>
                  </div>
                </div>
              </div>
          </form>
        </div>
       </div>
    </div>) : (
      <>
        navigate('/login')
      </>
  )}</div>
  )};


  function Ingredient({index, ingredient, updateIngredients,handleAddIngredient,handleRemoveIngredient}){

    function handleImageUpload(e) {
      readImage(e.target.files[0])


    }

    function readImage(file) {
      const reader = new FileReader();

      reader.onload = () => {
        updateIngredients(index, "image" ,reader.result)
      }

      reader.readAsDataURL(file)
    }

    return(
      <div className='my-4'>
      <div className="grid grid-cols-2 items-center">
        <div className='flex flex-col gap-3'>
          <input type="text" value={ingredient.name} onChange={(e) => updateIngredients(index, "name", e.target.value )} placeholder='Ingredient Name...' className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 p-2 w-full" required/>
          <input type="text" value={ingredient.measure} onChange={(e) => updateIngredients(index, "measure", e.target.value )} placeholder='Measure...' className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 p-2 w-full" required/>
        </div>
        <div className='p-2'>
        { ingredient.image ?
          <img src={ingredient.image} alt="Ingredient" />
          : <div className='min-h-[20vh] flex border text-center'>
              <label className='border border-orange-400 flex items-center justify-center text-orange-400 text-center block w-full' htmlFor={`ingredient${index}`} ><AiOutlineCamera size={26}/></label>
              <input className="hidden" onChange={handleImageUpload}  aria-describedby="file_input_help" id={`ingredient${index}`} type="file" required/>
          </div>
        }
        </div>
      </div>
      <div className='flex justify-end px-8'>
        <button  className='flex justify-center text-red-400' type="button" onClick={() => handleRemoveIngredient(index)}><RxCrossCircled size={26}/></button>
      </div>
    </div>
    )
  }

export default AddRecipeForm;




