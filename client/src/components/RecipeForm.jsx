import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
// import { FiCamera } from "react-icons/fi"

function RecipeForm(){

    const [ingredients, setIngredients] = useState([""]);
    const [steps, setSteps] = useState([""]);

    const handleInputChange = (e, index) => {
        const newSteps = [...steps];
        const newIngredients = [...ingredients];
        newIngredients[index] = e.target.value;
        newSteps[index] = e.target.value;
        setIngredients(newIngredients);
        setSteps(newSteps);

      };

      const handleAddIngredient = () => {
        setIngredients([...ingredients, ""]);
      };

      const handleDeleteIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
      };

      const handleAddStep = () => {
        setSteps([...steps, ""]);
      };

    return(
        <div>
            <form>
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
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm rounded-lg
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
                            className="bg-gray-50 border border-gray-300
                            text-gray-900 sm:text-sm rounded-lg
                            focus:ring-primary-600 p-2"></textarea>
                    </div>
                  </div>
                  {/* <div className="flex-grow"> */}
                  {/* <div className="border border-black rounded-md flex flex-col justify-center items-center ml-2 mt-6 w-80 h-40 p-4">
                    <label htmlFor="uploadInput">
                      <input
                        type="file"
                        id="uploadInput"
                        accept=".jpg, .jpeg, .png, .gif"
                        onChange={handleChange}
                        style={{ display: "none" }}
                    className=""  />
                      <span>Upload a photo</span>
                      <span><FiCamera/></span>
                    </label>
                  </div> */}
                  {/* <p className="text-center">use JPEG, JPG,  PNG  </p> */}
                  {/* </div> */}
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
                    onChange={(e) => handleInputChange(e, index)}
                    className="py-1 my-2 border border-black rounded-md"
                />
                <button type="button"
                onClick={() => handleDeleteIngredient(index)}
                >
                <RxCrossCircled/>
                </button>
                {/* <div className="border border-black rounded-md p-2"> */}
                {/* <label htmlFor="uploadInput">
                      <input
                        type="file"
                        id="uploadInput"
                        accept=".jpg, .jpeg, .png, .gif"
                        onChange={handleChange}
                        style={{ display: "none" }}
                    className="border"  />
                      <span>Upload a photo</span>
                      <span><FiCamera/></span>
                    </label> */}
                  {/* </div> */}
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
              onChange={(e) => handleInputChange(e, index)}
              className="py-1 my-2 border border-black rounded-md w-full"
            />

            <button type="button"
            // onClick={() => handleDeleteStep(index)}
            >
            <RxCrossCircled/>
            </button>
            </div>
          </div>
        ))}
        <button type="button"
        onClick={handleAddStep}
        //  className="flex flex-row items-center border boder-black bg-green-100 p-2 rounded-lg hover:bg-green-800"
        >
          {/* <FaPlus/> */}
          Add Step
        </button>
        <div className="flex flex-row items-center gap-3 justify-end">
          <input type="submit" value="Cancel"
        //   onClick={handleSubmit}
        //   className="text-blue-500 hover:underline"
          />
          <button type="submit"
        //   onClick={handleSubmit}
        //   className="border border-black p-2 bg-green-100 hover:bg-green-800"
          >Submit</button>
        </div>

        </div>
        </div>
      </form>
        </div>
    )
}
export default RecipeForm;