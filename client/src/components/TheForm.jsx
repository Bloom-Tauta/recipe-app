
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import {RxCrossCircled } from 'react-icons/rx'


function TheForm({postRecipe}){

  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [countryOfOrigin, setCountryOfOrigin] = useState('');
  const [peopleServed, setPeopleServed] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [recipeImage, setRecipeImage] = useState(null);


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

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeFormData = {
      recipeName,
      description,
      countryOfOrigin,
      peopleServed,
      ingredients,
      steps
    }
    postRecipe(recipeFormData)
  }

    return(
        <div className='bg-slate-200'>
         <div >
            <div className="border border-black rounded-full">
                <FaPlus/>
            </div>
            <h3 className="text-xl font-bold leading-tight
                  tracking-tight text-gray-900 text-center md:text-2xl">Add a Recipe</h3>
            </div>
            <form>
              <div className='flex gap-3'>
                  <div className="flex flex-col">
                  <input
                  type="text"
                  id="recipename"
                  value={recipeName}
                  onChange={(e) => handleRecipeNameChange(e)}
                  className="font-bold text-[2em] text-center text-orange-600"/>
                  <div className=" w-3/4 my-2 mx-auto"></div>
                  <input
                  type="text"
                  id="countryoforigin"
                  value={countryOfOrigin}
                  onChange={(e) => handleCountryOfOriginChange(e)}
                  className="font-bold text-xl text-center text-orange-700 "/>

                    <div className="flex-grow flex  items-center justify-center p-6">
                      <input
                      class="block w-full text-sm text-gray-900 border border-gray-300
                      rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="file_input_help" id="file_input" type="file"
                      />
                      {/* <p class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                      >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                      </p> */}
                    </div>
                    </div>
                      <div className="">
                        <h2 className="font-bold">Ingredient</h2>
                        <p>Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and any special preparation (i.e. sifted, softened, chopped)</p>

                        {ingredients.map((ingredient, index) => (
                        <div key={index}>
                          <label>Ingredient {index + 1}: </label>
                            <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(e, index)}
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm
                            focus:ring-primary-600 p-2 w-full"
                            />
                              <input class="block w-full text-sm text-gray-900 border border-gray-300
                              rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file"
                              />
                              {/* <p class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                              id="file_input_help"
                              >
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                              </p> */}
                              <button type="button"
                            onClick={() => handleRemoveIngredient(index)}
                            >
                                <RxCrossCircled/>
                            </button>

                                  </div>
                              ))}

                          <button type="button"
                            onClick={handleAddIngredient}
                            className="flex flex-row items-center border boder-black bg-green-100 p-2 rounded-lg hover:bg-green-800">
                              <FaPlus/>
                            Add Ingredient
                            </button>
                        </div>
                        </div>


                    <textarea rows="5" col="60"
                    id="description"
                    value={description}
                    onChange={(e) => handleDescriptionChange(e)}
                    className="bg-gray-50 border border-gray-300
                    text-gray-900 sm:text-sm
                    focus:ring-primary-600 p-2"></textarea>




          <h2 className="font-bold">Steps</h2>
          <p>Explain how to make your recipe, including oven temperatures, baking or cooking times, and pan sizes, etc.</p>
          
          {steps.map((step, index) => (
          <div key={index} className="">
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

        <label for="url">Enter an https:// URL:</label>
    <input type="url" name="url" id="url"
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required/>






      </form>

        </div>
    )
}
export default TheForm;