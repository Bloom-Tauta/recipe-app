
import Card from "./Card";
import { useState, useEffect } from "react";




function LandingPage({search}){



    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [recipes, setRecipes] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [searchBy, setSearchBy] = useState("name")

    useEffect(() =>{
        fetch("http://localhost:3000/recipes",{
        })
        .then((response) =>response.json())
        .then((data) =>{
            setRecipes(organizePages([...data,...data], itemsPerPage))
        })
    }, [])

    function organizePages(data, perPage) {
        let temp = []
        for(let i=0;i<data.length;i+=perPage){
            temp.push(data.slice(i,i+perPage))
        }
        return temp
    }

    //filter by name

    let filteredRecipe = recipes
    // if(recipes.length > 0) {
    //     filteredRecipe = (organizePages(recipes.flat().filter(recipe => {
    //         if(searchBy === 'recipe') {
    //             return recipe.recipe_name.toLowerCase().includes(search.toLowerCase())
    //         }
    //         if(searchBy === 'countryoforigin') {
    //             return recipe.country_of_origin.toLowerCase().includes(search.toLowerCase())
    //         } else if(searchBy === 'createdat') {

    //         } else if(searchBy === 'ratings') {
    //             return parseInt(recipe.rating) === parseInt(search)
    //         } else if(searchBy === 'ingredients') {
    //             return Object.keys(recipe).filter(f => f.startsWith("strIngredient")).map(key => ""+recipe[key]).filter(v => v !==  "").map(ingr => ingr.toLowerCase()).includes(search.toLowerCase())
    //         } else if(searchBy === 'numberofpeopleserved') {
    //             return parseInt(recipe.number_of_people) === parseInt(search)
    //         }
    //     }), itemsPerPage))
    // }

    function handleChange(e){
        setSearchBy(e.target.value)
    }




    return(
        <div className="">
            <div className="flex justify-end w-full gap-3 mr-6">
                <div className="flex gap-2">
                    <label>Search by:</label>
                        <select value={searchBy} onChange={handleChange} >
                            <option value="">--Select an option--</option>
                            <option  value="meal">Name</option>
                            <option  value="area">Country of origin</option>
                            <option  value="ratings">Ratings</option>
                            <option  value="ingredients">Ingredients</option>
                            <option  value="servings">Number of people served</option>
                        </select>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 place-content-stretch md:w-3/4 mx-auto">
                {/* to be replaced by : filteredRecipe */}
                { filteredRecipe.length > 0 && filteredRecipe[currentPage].map((recipe, index) =>{
                    return (
                        <Card key={index} recipe={recipe} />
                    )
                })}

            </div>
            <Pagination totalPages={filteredRecipe.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

function Pagination({totalPages, currentPage,  setCurrentPage}) {

    return (
        <div className="flex justify-center gap-3 my-4">
            {
                new Array(totalPages).fill(0).map((page, index) => {
                    return <button key={index} className={`h-6 w-6 ${index === currentPage ? "bg-blue-800 text-white" : "ring-1"} rounded-full font-bold`} onClick={() => setCurrentPage(index)}>{index+1}</button>
                })
            }
        </div>
    )
}

export default LandingPage;