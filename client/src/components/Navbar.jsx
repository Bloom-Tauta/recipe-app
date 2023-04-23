import { useState } from 'react';
import { NavLink  } from 'react-router-dom';
import Searchbar from './Searchbar'

function Navbar(){

    const [search, setSearch] = useState('')

    return(
        <div className="bg-gray-700 p-4 items-center justify-between flex ">
            <span className="text-white text-4xl">Recipe-Share</span>
            <Searchbar search={search} setSearch={setSearch} />
            <div>
                <ul className=" flex gap-4 text-blue-300 text-base ">
                    <NavLink to="/" className="hover:text-blue-800 font-bold" >Home</NavLink>
                    <NavLink to="/sign-up"  className="hover:text-blue-800 font-bold" >Sign Up</NavLink>
                    <NavLink to="/login"  className="hover:text-blue-800 font-bold" >Login</NavLink>
                    <NavLink to="/favorite-recipes"  className="hover:text-blue-800 font-bold" >Favorite Recipes</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;