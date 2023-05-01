// import { NavLink } from "react-router-dom";
// import Search from "./Search";
// import { AuthContext } from '../context/AuthContext'
// import Swal from 'sweetalert2'
// import { useContext } from 'react'


// function Navbar({search, handleSearch}){

//     const{user,logout}=useContext(AuthContext)
//     const handleOnclick = () => {
//      Swal.fire({
//       icon: 'success',
//       title: 'thankyou for sharing the love',
//       confirmButtonText: 'OK'
//      }).then(()=>{
//       logout();
//       window.location.href = '/';
//      });
//     };
//     return(
//         <div className="bg-[#4F9FD9] p-4 items-center justify-between flex ">
//             <span className="text-white text-4xl">Recipe-Share</span>
//             <Search search={search} handleSearch={handleSearch} />
//             <div>
//                 <ul className=" flex gap-4 text-[#] text-base ">
//                     <NavLink to="/" className="hover:text-white font-bold" >Home</NavLink>
//                     {user?
//                     <>
//                     <NavLink to="/favorite-recipes"  className="hover:text-white font-bold" >Favorite Recipes</NavLink>
//                     <NavLink to="/addrecipeform"  className="hover:text-white font-bold" >Add Recipe</NavLink>
//                     <NavLink to="/about"  className="hover:text-white font-bold" >About</NavLink>
//                     <NavLink onClick={handleOnclick} > Logout</NavLink>
//                     </>
//                     :
//                     <>
//                     {/* <NavLink to="/signup"  className="hover:text-white font-bold" >Sign Up</NavLink> */}
//                     <NavLink to="/login"  className="hover:text-white font-bold" >Login</NavLink>
//                     </>
// }
//                 </ul>



//             </div>
//         </div>
//     )
// }

// export default Navbar;

// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import Search from "./Search";
// import { AuthContext } from '../context/AuthContext'
// import Swal from 'sweetalert2'
// import { FaBars } from 'react-icons/fa';
// import DropdownMenu from "./DropDownMenu";



// function Navbar({search, handleSearch}){

//     const{user,logout}=useContext(AuthContext)

//     const handleOnclick = () => {
//         Swal.fire({
//             icon: 'success',
//             title: 'thankyou for sharing the love',
//             confirmButtonText: 'OK'
//         }).then(()=>{
//             logout();
//             window.location.href = '/';
//         });
//     };
   
//     return(
//         <div className="bg-[#4F9FD9] p-4 items-center justify-between flex ">
//             <span className="text-white text-4xl">Recipe-Share</span>
//             <Search search={search} handleSearch={handleSearch} />
//             <div>
//                 <ul className="flex gap-4 text-[#] text-base">
//                     <li>
//                         <Link to="/" className="hover:text-white font-bold">Home</Link>
//                         <Link to="/login" className="hover:text-white font-bold">Login</Link>
//                     </li>
//                     {user ?
//                         <li className="ml-auto">
//                             <DropdownMenu>
//                                 <Link to="/favorite-recipes" className="hover:text-white font-bold">Favorite Recipes</Link>
//                                 <Link to="/addrecipeform" className="hover:text-white font-bold">Add Recipe</Link>
//                                 <Link to="/about" className="hover:text-white font-bold">About</Link>
//                                 <button onClick={handleOnclick}>Logout</button>
//                             </DropdownMenu>
//                         </li>
//                         :
//                         <li>
//                             <Link to="/login" className="hover:text-white font-bold">Login</Link>
//                         </li>
//                     }
//                 </ul>
                
//             </div>
//         </div>
//      );
// }


//     export default Navbar;
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import { FaBars } from 'react-icons/fa';
import DropdownMenu from "./DropDownMenu";
import logo from "../logo.jpg";


// function Navbar({search, handleSearch}){

//     const {user, logout} = useContext(AuthContext);

//     const handleOnclick = () => {
//         Swal.fire({
//             icon: 'success',
//             title: 'thankyou for sharing the love',
//             confirmButtonText: 'OK'
//         }).then(()=>{
//             logout();
//             window.location.href = '/';
//         });
//     };
   
//     return(
//         <div className="bg-[#4F9FD9] p-4 items-center justify-between flex ">
//             <span className="text-white text-4xl">Recipe-Share</span>
//             <Search search={search} handleSearch={handleSearch} />
//             <div>
//                 <ul className="flex gap-4 text-[#] text-base">
//                     <li>
//                         <Link to="/" className="hover:text-white font-bold">Home</Link>
//                         {user ?
//                             null :
//                             <Link to="/login" className="hover:text-white font-bold">Login</Link>
//                         }
//                     </li>
//                     {user &&
//                         <li className="ml-auto">
//                             <DropdownMenu>
//                                 <Link to="/favorite-recipes" className="hover:text-white font-bold">Favorite Recipes</Link>
//                                 <Link to="/addrecipeform" className="hover:text-white font-bold">Add Recipe</Link>
//                                 <Link to="/about" className="hover:text-white font-bold">About</Link>
//                                 <button onClick={handleOnclick}>Logout</button>
//                             </DropdownMenu>
//                         </li>
//                     }
//                 </ul>
                
//             </div>
//         </div>
//      );
// }

// export default Navbar;
// function Navbar({search, handleSearch}){

//     const {user, logout} = useContext(AuthContext);
//     // #4F9FD9
   
//     return(
//         <div className="bg-[#FF6600] p-4 items-center justify-between flex ">
//             <span className="text-white text-4xl">Recipe-Share</span>
//             <Search search={search} handleSearch={handleSearch} />
//             <div>
//                 <ul className="flex gap-4 text-[#] text-base">
//                     <li>
//                         <Link to="/" className="hover:text-white font-bold">Home</Link>
//                         {user ?
//                             null :
//                             <Link to="/login" className="hover:text-white font-bold">Login</Link>
//                         }
//                     </li>
//                     {user &&
//                         <li className="ml-auto">
//                             <DropdownMenu logout={logout} />
//                         </li>
//                     }
//                 </ul>
                
//             </div>
//         </div>
//      );
// }

// export default Navbar;

function Navbar({search, handleSearch}){

    const {user, logout} = useContext(AuthContext);
   
    return(
        <div className="bg-[#FF6600] p-4 items-center justify-between flex ">
            <span>
                <img src={logo} alt="Recipe-Share Logo" className="h-24 text-white"/>
            </span>
            <Search search={search} handleSearch={handleSearch} />
            <div>
                <ul className="flex gap-4 text-[#] text-base">
                    <li>
                        <Link to="/" className="hover:text-white font-bold">Home</Link>
                        {user ?
                            null :
                            <Link to="/login" className="hover:text-white font-bold">Login</Link>
                        }
                    </li>
                    {user &&
                        <li className="ml-auto">
                            <DropdownMenu logout={logout} />
                        </li>
                    }
                </ul>
                
            </div>
        </div>
     );
}

export default Navbar;

