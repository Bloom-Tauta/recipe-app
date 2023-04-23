
import Card from "./Card";
import { useState, useEffect } from "react";




function LandingPage({search}){



    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [recipes, setRecipes] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [searchBy, setSearchBy] = useState("area")

    useEffect(() =>{
        fetch("http://localhost:3000/meals",{
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

    let filteredMeals = []
    if(recipes.length > 0) {
        filteredMeals = (organizePages(recipes.flat().filter(meal => {
            return meal.strMeal.toLowerCase().includes(search.toLowerCase())
        }), itemsPerPage))
    }

    function handleChange(e){
        setSearchBy(e.target.value)
    }

    // const filteredRecipes = recipes.filter()
    console.log(search)


    return(
        <div className="">
            <div className="flex justify-center w-full gap-3">
                <div className="flex gap-2">
                    <input type="radio" value="area" onChange={handleChange} name="search"/>
                    <label>Area</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="ratings" onChange={handleChange} name="search"/>
                    <label>Ratings</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="ingredients" onChange={handleChange} name="search"/>
                    <label>Ingredients</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="servings" onChange={handleChange} name="search"/>
                    <label>Servings</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="createdat" onChange={handleChange} name="search"/>
                    <label>Created on</label>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 place-content-stretch md:w-3/4 mx-auto">
                {/* to be replaced by : filteredMeals */}
                { filteredMeals.length > 0 && filteredMeals[currentPage].map((meal, index) =>{
                    return (
                        <Card key={index} meal={meal} />
                    )
                })}

            </div>
            <Pagination totalPages={filteredMeals.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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