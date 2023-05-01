import React from 'react'
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
    const names = localStorage.getItem("name");

    return (
        <div className="bg-gray-100 h-screen">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-center">
                    <img src="" alt="" className="w-32 h-32 rounded-full" />
                    <div className="ml-5">
                        <h2 className="text-3xl font-semibold">Hi {names}</h2>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-3xl font-semibold mb-5">Activity</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5" onClick={(e)=>navigate("/favorite")} value = "posts">Favorites</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5" onClick={(e)=>navigate("/addrecipe")}>Create Recipe</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e)=>navigate("/submitted")}>Submitted Recipes</button>
                </div>
            </div>
            <div className="absolute bottom-0 w-full bg-white py-2 px-4">
                <a href="/" className="text-blue-500 hover:text-blue-700">Back Home</a>
            </div>
        </div>
    )
}

export default Admin
