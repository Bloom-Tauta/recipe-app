
import { NavLink  } from "react-router-dom";
import { MdCopyright } from "react-icons/md"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


function Footer(){
    return(
        <footer className="bg-[#4F9FD9] py-6">

        <div className=" w-full lg:w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full">
              <h4 className="text-3xl text-white font-semibold text-center">
               Get in touch with us
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Reach us on any of these platforms.
              </h5>
            </div>
            <div className=" w-full px-8 text-center">
              <ul className="flex flex-wrap list-none pl-0 mb-0 justify-center text-center">
                <li className="nav-item">
                  <NavLink to="#"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <FaTwitter size ={20} className="mr-5" />
                    <span>Twitter</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <FaFacebook size ={20} className="mr-5" />
                    <span>Facebook</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <FaInstagram size ={20} className="mr-5" />
                    <span>Instagram</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <hr className=" w-full my-6 border-gray-700" />
          <div className=" w-full flex flex-wrap items-center  justify-around">

          <div className="w-full lg:w-4/12 px-4">
              <div className="flex flex-row items-center text-lg text-left text-gray-500 gap-2 font-semibold py-1">
                        <MdCopyright/>
                        <span className="text-white">2023 Recipe-Share</span>
                    </div>
              </div>
            <div className=" lg:w-8/12 px-4 ">
              <ul className="flex flex-wrap list-none pl-0 mb-0 gap-5">
                <li className="nav-item">
                  <NavLink to="about"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">About Us</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="contact"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Contact Us</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <footer/>
        </div>
      </footer>
    )
}
export default Footer;

{/* <h4 className='text-center p-1'>{recipe.description}</h4>
            <h4 className='text-center p-1'>{recipe.country_of_origin}</h4>
            <h4 className='text-center p-1'>{recipe.number_of_people_served}</h4>
            <h4 className='text-center p-1'>{recipe.ingredients}</h4>
            <h4 className='text-center p-1'>{recipe.instructions}</h4>
            <h4 className='text-center p-1'>{recipe.youtube_code}</h4> */}