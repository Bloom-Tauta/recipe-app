// import Sidebar from "./Sidebar";
import React, { useState } from "react"
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaUserEdit, FaUserAlt } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import { MdNoMealsOuline } from 'react-icons/md'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { Link } from "react-router-dom";


function Dashboard(){
    const menus =[
        {name: "dashboard",link:'/',icon: MdOutlineDashboardCustomize},
        {name: "edit profile",link:'/',icon: FaUserEdit},
        {name: "view all users",link:'/',icon: FaUserAlt},
        {name: "add recipe",link:'/',icon: GiMeal},
        {name: "submitted recipes",link:'/',icon: MdNoMealsOuline},
    ];
    const [open, setOpen] = useState(true);
    return(
        <div className="flex">
            <section className="flex gap-6">
            <div className={`bg-black min-h-screen ${open ? 'w-72':"w-16"} duration -500 text-gray-100 px-4`}>
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() =>setOpen(!open)} />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {
                        menus?.map((menu,i) =>(

                    <Link to={menu?.link} key={i}
                    className={`I${menu?.margin && 'mt-5'}flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                        <div>
                            {React.createElement(menu?.icon,{size:"20"})}
                        </div>
                        <h2
                        style={{
                            transitionDelay:`${i + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                    </Link>
                    ))
                    }
                </div>
            </div>
          </section>
          <div className="flex flex-col gap-1 min-h-screen ">
            <div className="h-1/7  font-bold text-2xl p-2 mx-auto block border-b border-black w-screen">
                <h2>Welcome,
                    {/* {user.username} */}
                </h2>
            </div>
            <div className="h-3/4"></div>
          </div>
        </div>

    )
}
export default Dashboard;