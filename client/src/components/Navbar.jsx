import { NavLink } from "react-router-dom";
import Search from "./Search";


function Navbar({search, handleSearch}){
    return(
        <div className="bg-[#4F9FD9] p-4 items-center justify-between flex ">
            <span className="text-white text-4xl">Recipe-Share</span>
            <Search search={search} handleSearch={handleSearch} />
            <div>
                <ul className=" flex gap-4 text-[#fff] text-base ">
                    <NavLink to="/" className="hover:text-white font-bold" >Home</NavLink>
                    <NavLink to="/signup"  className="hover:text-black font-bold" >Sign Up</NavLink>
                    <NavLink to="/login"  className="hover:text-white font-bold" >Login</NavLink>
                    <NavLink to="/favorite-recipes"  className="hover:text-white font-bold" >Favorite Recipes</NavLink>
                    <NavLink to="/forms"  className="hover:text-white font-bold" >Add Recipe</NavLink>
                    <NavLink to="/about"  className="hover:text-white font-bold" >About</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;


