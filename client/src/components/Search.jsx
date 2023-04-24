
import { BiSearchAlt2 } from "react-icons/bi"

function Search({search, handleSearch}){

    return(
        <div className='flex items-center'>
            <div>
                <div className="flex">
                    <input value={search} onChange={(e) => handleSearch(e.target.value)}
                     type="text" placeholder="Search recipe"
                    className="border border-black rounded-lg p-2 outline-none"/>
                    <span className="py-2.5 mr-1 px-1 rounded-lg text-3xl ">
                        <BiSearchAlt2/>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Search;