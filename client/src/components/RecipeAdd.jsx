
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import {RxCrossCircled } from 'react-icons/rx'

function RecipeAdd({postRecipe}){
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [countryOfOrigin, setCountryOfOrigin] = useState('');
    const [numberOfPeopleServed, setNumberOfPeopleServed] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [steps, setSteps] = useState(['']);
    const [recipeImage, setRecipeImage] = useState(null);


    const handleRecipeNameChange = (e) => {
      setRecipeName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };

    const handleRecipeCategoryChange = (e) => {
        setRecipeCategory(e.target.value);
      };

    const handleCountryOfOriginChange = (e) => {
      setCountryOfOrigin(e.target.value);
    };

    const handleNumberOfPeopleServedChange = (e) => {
        setNumberOfPeopleServed(e.target.value);
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
        numberOfPeopleServed,
        ingredients,
        steps
      }
      postRecipe(recipeFormData)
    }
    return(
        <div  className='bg-slate-200'>
            <div className='flex items-center p-2 ml-12'>
                <div>
                    <FaPlus/>
                </div>
                <h3>Add a Recipe</h3>
            </div>
            <form onSubmit={handleSubmit}>
                    <div className='flex gap-6 p-2 w-full'>
                    <div className='flex flex-col gap-2 '>
                            <input
                        type="text"
                        id="recipename"
                        value={recipeName}
                        onChange={(e) => handleRecipeNameChange(e)}
                        className="p-2"  placeholder='recipe name'/>

                        <input
                        type="text"
                        id="recipecategory"
                        value={recipeCategory}
                        onChange={(e) => handleRecipeCategoryChange(e)}
                        className="p-2" placeholder='recipe category'/>

                            <input
                        type="text"
                        id="countryoforigin"
                        value={countryOfOrigin}
                        onChange={(e) => handleCountryOfOriginChange(e)}
                        className="p-2"  placeholder='country of origin'/>
                            <input
                        type="text"
                        id="numberofpeopleserved"
                        value={numberOfPeopleServed}
                        onChange={(e) => handleNumberOfPeopleServedChange(e)}
                        className="p-2"  placeholder='number of people served'/>
                    </div>
                            <input
                      className="block  text-sm text-gray-900 border border-gray-300
                      rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="file_input_help" id="file_input" type="file"
                      />
                    </div>
                    <div className='w-1/2'>
                        <textarea rows="5" col="60"
                        id="description"
                        value={description}
                        onChange={(e) => handleDescriptionChange(e)}
                        className="bg-gray-50 border border-gray-300
                        text-gray-900 w-3/4 p-2" placeholder='add a description'></textarea>
                    </div>

                    <div className=''>
                      <h2 className="font-bold">Ingredient</h2>
                      <p>Enter one ingredient per line. Include the quantity (i.e. cups, tablespoons) and any special preparation (i.e. sifted, softened, chopped)</p>
                      {ingredients.map((ingredient, index) => (
                        <div key={index} className=''>
                        <label>Ingredient {index + 1}: </label>
                        <div className='flex'>
                            <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(e, index)}
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm
                            focus:ring-primary-600 p-2 w-1/2" placeholder='add ingredient'
                            />
                        <button type="button"
                        onClick={() => handleRemoveIngredient(index)}
                        >
                        <RxCrossCircled/>
                        </button>
                        </div>
                        <input className="block w-1/2 text-sm text-gray-900 border border-gray-300
                              rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              aria-describedby="file_input_help" id="file_input" type="file"
                              />
                      </div>
                    ))}
                    <button type="button"
                            onClick={handleAddIngredient}
                            className="flex flex-row items-center border boder-black bg-green-100 p-2 rounded-lg hover:bg-green-800">
                              <FaPlus/>
                            Add Ingredient
                            </button>
                    </div >
                    <div className='flex gap-5'>
                        <div>
                    <h2 className="font-bold">Steps</h2>
                        <p>Explain how to make your recipe, including oven temperatures, baking or cooking times, and pan sizes, etc.</p>

                        {steps.map((step, index) => (
                        <div key={index} className="">
                            <label htmlFor='steps'>Step {index + 1}: </label>
                            <div className="flex flex-row gap-2">
                            <input
                            type="text"
                            value={step}
                            onChange={(e) => handleStepsChange(e, index)}
                            className="bg-gray-50 border border-black
                            text-gray-900 sm:text-sm
                            focus:ring-primary-600 p-2 w-full" placeholder='add a new step'
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
                        </div>
                        <div className='flex flex-col'>
                        <label htmlFor="url">youtube_code:</label>
                        <input type="url" name="url" id="url"
                        placeholder="e.g.  9ytR28QK6I8"
                        pattern="https://.*" size="30"
                        required/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 justify-center">
                        <input type="submit" value="Cancel"
                        className="text-blue-500 hover:underline"/>
                        <button type="submit"
                        className="border border-black p-2 bg-green-100 hover:bg-green-800 rounded-lg w-1/6 ">Submit</button>
                    </div>
            </form>
        </div>
    )
}
export default RecipeAdd;