import { NavLink } from "react-router-dom";
// import Search from "./Search";


function NavBar(){
    return(
        <div
        // className="bg-gray-700 p-4 items-center justify-between flex "
        >
            {/* <span
            //  className="text-white text-4xl"
            >Recipe-Share</span> */}
            {/* <Search/> */}
            <div>
                <ul
                // className=" flex gap-4 text-blue-300 text-base "
                >
                    <NavLink to="/"
                    // className="hover:text-blue-800 font-bold"
                    >Home</NavLink>
                    <NavLink to="/sign-up"
                    //  className="hover:text-blue-800 font-bold"
                      >Sign Up</NavLink>
                    <NavLink to="/login"
                    //  className="hover:text-blue-800 font-bold"
                     >Login</NavLink>
                    <NavLink to="/favorite-recipes"
                    // className="hover:text-blue-800 font-bold"
                     >Favorite Recipes</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;


