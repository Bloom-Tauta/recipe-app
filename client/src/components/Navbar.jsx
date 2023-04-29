import { NavLink } from "react-router-dom";
import Search from "./Search";
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import { useContext } from 'react'


function Navbar({search, handleSearch}){

    const{user,logout}=useContext(AuthContext)

    const handleOnclick = () => {
     Swal.fire({
      icon: 'success',
      title: 'thankyou for sharing the love',
      confirmButtonText: 'OK'
     }).then(()=>{
      logout();
      window.location.href = '/';
     });
    };
    return(
        <div className="bg-[#4F9FD9] p-4 items-center justify-between flex ">
            <span className="text-white text-4xl">Recipe-Share</span>
            <Search search={search} handleSearch={handleSearch} />
            <div>
                <ul className=" flex gap-4 text-[#] text-base ">

                    <NavLink to="/" className="hover:text-white font-bold" >Home</NavLink>
                    {user?
                    <>
                    <NavLink to="/favorite-recipes"  className="hover:text-white font-bold" >Favorite Recipes</NavLink>
                    <NavLink to="/addrecipeform"  className="hover:text-white font-bold" >Add Recipe</NavLink>
                    <NavLink to="/about"  className="hover:text-white font-bold" >About</NavLink>
                    <NavLink onClick={handleOnclick} > Logout</NavLink>
                    </>
                    :
                    <>
                    <NavLink to="/signup"  className="hover:text-white font-bold" >Sign Up</NavLink>
                    <NavLink to="/login"  className="hover:text-white font-bold" >Login</NavLink>
                    </>
}
                </ul>



            </div>
        </div>
    )
}

export default Navbar;