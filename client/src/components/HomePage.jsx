import { useEffect, useState } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import recipe from "../images/recipe.jpg"

function HomePage(){

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/favorites")
        .then(response =>  {
            if(response.status < 400) {
                response.json().then(data => {
                    setFavorites(data)
                })
            }
        })
    }, [])

    return(
        <div>
            <div className="relative">
                <div>
                    <img src={recipe} alt="" className="w-full"/>
                </div>
                <div  className="text-center absolute inset-0 font-bold text-3xl text-white flex flex-col justify-center items-center">
                    <h1 className="text-5xl p-12">Join Recipe-Share</h1>
                    <p className="p-2 text-3xl">Thousands of recipe. Endless inspiration.<br></br>Discover our recipe suggestions and get inspired to create your own dishes.</p>
                    <NavLink to="/signup" className="border bg-orange-600 rounded-md py-2 px-6 my-5" >TRY IT FOR FREE</NavLink>
                </div>
            </div>

            <div
            className="text-center mt-20 text-white">

            </div>
            <div id="favorite" className="flex flex-col justify-center items-center">
                <h2 className="text-bold text-2xl text-orange-600 ml-8">Favorites</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-md justify-center ">

                {
                    favorites.map((favorite, index) => {
                        return (
                            <Card key={index} recipe={favorite.recipe} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default HomePage;


//  bg-[url)]
// bg-no-repeat  bg-cover