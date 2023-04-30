
import React, { useState } from 'react'
import {  AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';

function MyAccount() {

    const [isOpen, setIsOpen] =useState(false);
    let list = [
        {
            "menu": "View Profile"

        },
        {
            "menu": "Add Recipe"
        },
        {
            "menu": "View Favorites"

        },
        {
            "menu": "Log Out"

        },
    ]
  return (
   <div className='relative flex '>
     <button onClick={()=> setIsOpen((prev) => !prev)} className='bg-blue-400 flex items-center rounded-full p-1 text-white border-4 border-transparent active:border-slate-100 duration-300'
     >
        Acc
        {!isOpen ? (
            <AiOutlineCaretDown/>
        ): (
            <AiOutlineCaretUp/>
        )}
    </button>

    {isOpen &&(
       <div className='absolute w-full top-28 flex flex-col items-start rounded-lg cursor-pointer border border-blue-300 hover:border-l-white-border-l-4 gap-2 '>
        {list.map((items, i) =>(
            <div className='w-full hover:bg-slate-200 rounded-lg' key={i}>
                <h3>{items.menu}</h3>
            </div>
        ))}
       </div>
    )}
   </div>
  )
}

export default MyAccount