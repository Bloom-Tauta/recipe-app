import { NavLink } from "react-router-dom";
import Search from "./Search";
import Swal from 'sweetalert2'
import {useNavigate } from 'react-router-dom'
import { IoMdRestaurant} from 'react-icons/io'



function Navbar({search, handleSearch}){
    const user = localStorage.getItem('user');
    const role = localStorage.getItem('admin');
    const navigate = useNavigate()

    function handleDashboards(){

      if(role+"" === true+""){
        navigate('/admins')
      }else{
        navigate('/user')
      }
    }

  const logout = () => {
    localStorage.clear();
  };

    const handleOnclick = () => {
     Swal.fire({
      icon: 'success',
      title: 'logout successfully',
      confirmButtonText: 'OK'
     }).then(()=>{
    logout();
      window.location.href = '/';
     });
    };

    function handleAddFavorites(){
      navigate("/")
      document.querySelector('#favorite')?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    }

    return(
        <div className="bg-white drop-shadow-xl p-4 items-center justify-between flex ">
            <span className="text-black text-4xl flex items-center gap-1"><IoMdRestaurant size={40} className="text-orange-600"/>Recipe-Share</span>
            <Search search={search} handleSearch={handleSearch} />
            <div className="flex items-center">
                <ul className=" flex gap-4 text-[#] text-base ">

                    <NavLink to="/home" className="hover:text-orange-600  font-bold" >Home</NavLink>
                    {user?
                    <>
                    <button  onClick={handleAddFavorites} className="hover:text-orange-600 font-bold" >Favorite Recipes</button>
                    <NavLink to="/addrecipe"  className="hover:text-orange-600  font-bold" >Add Recipe</NavLink>
                    <button onClick={handleDashboards}  className="hover:text-orange-600  font-bold" >{user}</button>
                    <NavLink onClick={handleOnclick} > Logout</NavLink>


                    </>
                    :
                    <>
                    <NavLink to="/signup" className="hover:text-white font-bold p-1 bg-orange-600 rounded-lg hover:border-transparent" >Sign Up</NavLink>
                    <NavLink to="/login" className="border border-black hover:text-white font-bold p-1 bg-orange-600 rounded-lg hover:border-transparent" >Login</NavLink>
                    </>
}
                </ul>



            </div>
        </div>
    )
}

export default Navbar;