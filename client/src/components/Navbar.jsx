import { NavLink } from "react-router-dom";
import Search from "./Search";
import MyAccount from "./MyAccount";


function Navbar({search, handleSearch}){
    return(
        <div className="bg-[#4F9FD9] p-4 items-center justify-between flex ">
            <span className="text-white text-4xl">Recipe-Share</span>
            <Search search={search} handleSearch={handleSearch} />
            <div className="flex gap-2 items-center">
                <ul className=" items-center flex gap-4 text-[#] text-base ">
                    <NavLink to="/" className="text-white hover:text-blue-200 font-bold" >Home</NavLink>
                    {/* <NavLink to="/favorite-recipes"  className="text-white hover:text-blue-200 font-bold" >Favorites</NavLink> */}
                    {/* <NavLink to="/signup"  className="text-white hover:text-blue-200 font-bold" >Sign Up</NavLink> */}
                    <NavLink to="/login"  className="border p-1 rounded-md bg-orange-400 text-white hover:text-blue-200 font-bold" >Login</NavLink>
                </ul>
                <div>
                    <MyAccount/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;


