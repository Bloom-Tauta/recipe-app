import React, {useContext, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import {RxCrossCircled } from 'react-icons/rx'
import { AuthContext } from '../context/AuthContext'
function AddRecipeForm({postRecipe}){
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [countryOfOrigin, setCountryOfOrigin] = useState('');
  const [peopleServed, setPeopleServed] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [recipeImage, setRecipeImage] = useState(null);
  
  const { token, user } = useContext(AuthContext);

  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCountryOfOriginChange = (e) => {
    setCountryOfOrigin(e.target.value);
  };

  const handlePeopleServedChange = (e) => {
    setPeopleServed(e.target.value);
  };

  const handleIngredientChange = (e, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = e.target.value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleStepsChange = (e, index) => {
    const newSteps = [...steps];
    newSteps[index] = e.target.value;
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleRemoveSteps = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleRecipeImageChange = (e) => {
    setRecipeImage(e.target.files[0]);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const recipeFormData = {
  //     recipeName,
  //     description,
  //     countryOfOrigin,
  //     peopleServed,
  //     ingredients,
  //     steps
  //   }
  //   postRecipe(recipeFormData)
  // }
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('recipe_name', recipeName);
    formData.append('description', description);
    formData.append('country_of_origin', countryOfOrigin);
    formData.append('people_served', peopleServed);
  
    ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}]`, ingredient);
    });
  
    steps.forEach((step, index) => {
      formData.append(`steps[${index}]`, step);
    });
  
    formData.append('recipe_image', recipeImage);
  
    fetch('http://localhost:4000/recipes', {
  method: 'POST',
  
  headers: {
    'Authorization': `Bearer ${token}`,
  },
  body: formData,
  // body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
      console.log('Recipe form data submitted successfully:', data);
      // Reset the form fields
      setRecipeName('');
      setDescription('');
      setCountryOfOrigin('');
      setPeopleServed('');
      setIngredients(['']);
      setSteps(['']);
      setRecipeImage(null);
    })
    .catch(error => {
      console.error('Error submitting recipe form data:', error);
    });
  
  }
  

  return (
    <div className='border border-4  bg-gray-900 items-center mt-4 mx-auto max-w-3xl'>
      <div className="flex flex-row items-center bg-white justify-center px-12 py-8 mx-auto max-w-2xl mt-4 mb-4">
      <form onSubmit={handleSubmit}>
      <div className="flex flex-row items-center justify-center">
          <div className="border border-black rounded-full">
          <FaPlus/>
          </div>
          <h3 className="text-xl font-bold leading-tight
                tracking-tight text-gray-900 text-center md:text-2xl">Add a Recipe</h3>
                </div>
                <div className="flex flex-row justify-between gap-4">
                    <div className="flex flex-col">
                    <div>
                    <label
                            htmlFor="recipename"
                            className="block mb-2 text-sm
                            font-medium text-gray-900"
                            >
                            Recipe Name
                            </label>
                            <input
                            type="text"
                            id="recipename"
                            value={recipeName}
                            onChange={(e) => handleRecipeNameChange(e)}
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm
                            focus:ring-primary-600 p-2 "/>
                    </div>
                    <div>
                    <label
                            htmlFor="description"
                            className="block mb-2 text-sm
                            font-medium text-gray-900"
                            >
                            Description
                            </label>
                            <textarea rows="5" col="60"
                            id="description"
                            value={description}
                            onChange={(e) => handleDescriptionChange(e)}
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm
                            focus:ring-primary-600 p-2"></textarea>
                    </div>
                  </div>
                  <div className="flex-grow">
                  <div className="border border-black rounded-md flex flex-col justify-center items-center ml-2 mt-6 w-80 h-40 p-4">

                  </div>
                  <p className="text-center">use JPEG, JPG,  PNG  </p>
                  </div>
                </div>
                <div className="flex flex-col my-4">
                    <label
                            htmlFor="countryoforigin"
                            className="block mb-2 text-sm
                            font-medium text-gray-900"
                            >
                            Country of Origin
                            </label>
                            <input
                            type="text"
                            id="countryoforigin"
                            value={countryOfOrigin}
                            onChange={(e) => handleCountryOfOriginChange(e)}
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm
                            focus:ring-primary-600 p-2 "/>
                    </div>
                <div className="flex flex-col my-4">
                    <label
                            htmlFor="numberofpeopleserving"
                            className="block mb-2 text-sm
                            font-medium text-gray-900"
                            >
                            Number of People Serving
                            </label>
                            <input
                            type="number"
                            id="numberofpeopleserving"
                            value={peopleServed}
                            onChange={(e) => handlePeopleServedChange(e)}
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm
                            focus:ring-primary-600 p-2 "/>
                    </div>
                    <div>
          <h2 className="font-bold">Ingredient</h2>
          <p>Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and any special preparation (i.e. sifted, softened, chopped)</p>
          <div>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <label>Ingredient {index + 1}: </label>
              <div className="flex flex-row gap-2">
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(e, index)}
                    className="bg-gray-50 border border-gray-300
                    text-gray-900 sm:text-sm
                    focus:ring-primary-600 p-2 w-full"
                />
                <button type="button"
                onClick={() => handleRemoveIngredient(index)}
                >
                <RxCrossCircled/>
                </button>

              </div>
            </div>
        ))}
      </div>
      </div>
        <button type="button"
        onClick={handleAddIngredient}
         className="flex flex-row items-center border boder-black bg-green-100 p-2 rounded-lg hover:bg-green-800">
          <FaPlus/>
          Add Ingredient
        </button>


        <div className="mt-3">
          <h2 className="font-bold">Steps</h2>
          <p>Explain how to make your recipe, including oven temperatures, baking or cooking times, and pan sizes, etc.</p>
          <div className="py-2">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col">
            <label>Step {index + 1}: </label>
            <div className="flex flex-row gap-2">
            <input
              type="text"
              value={step}
              onChange={(e) => handleStepsChange(e, index)}
              className="bg-gray-50 border border-black
              text-gray-900 sm:text-sm
              focus:ring-primary-600 p-2 w-full"
            />

            <button type="button"
            onClick={() => handleRemoveSteps(index)}
            >
            <RxCrossCircled/>
            </button>
            </div>
          </div>
        ))}
        <button type="button"
        onClick={handleAddStep}
        className="flex flex-row items-center border boder-black bg-green-100 p-2  hover:bg-green-800">
          <FaPlus/>
          Add Step
        </button>
        <div className="flex flex-row items-center gap-3 justify-end">
          <input type="submit" value="Cancel"

          className="text-blue-500 hover:underline"/>
          <button type="submit"

          className="border border-black p-2 bg-green-100 hover:bg-green-800 rounded-lg ">Submit</button>
        </div>

        </div>
        </div>
      </form>
      </div>
    </div>


    );
};

export default AddRecipeForm;