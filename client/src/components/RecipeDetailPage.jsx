import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { GoPin } from "react-icons/go"
import { BsShareFill, BsFacebook, BsFillHeartFill,BsTwitter } from "react-icons/bs"
import{ RiWhatsappFill } from "react-icons/ri"
import Share from "./Share"

function RecipeDetails() {

    const [recipe, setRecipe] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${id}`)
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
                        <div className="rounded my-4 bg-slate-100  flex items-center gap-4">
                            <Share/>
                            <div className="flex items-center gap-2 border rounded-lg p-2 bg-slate-200">
                                <button className="">Add to favorites</button>
                                <BsFillHeartFill className="text-red-500"/>
                            </div>

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