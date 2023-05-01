import { BsStarHalf } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



function Card({recipe}){

    const navigate = useNavigate()

    function deleteRecipe(e) {
            e.preventDefault();
            fetch(`/recipess/${e.target.id}`,{
              method: "DELETE",
            })
            .then((res) => {
              res.json();
              if (res.status === 204) {
                Swal.fire({
                  title: "Your have been successfully deleted the recipe",
                  icon: "success",
                  timer: 2000,
                });
              } else {
                Swal.fire({
                  title: "There was an error deleting the recipe",
                  icon: "error",
                  timer: 2000,
                });
              }
            });
          }

    return(
        <div className='relative'>
        { recipe.id ?
        <div className=' mt-4 ml-4 shadow-lg shadow-black' onClick={() => navigate(`/viewmeal/${recipe.id}`)}>
            <img src={recipe.recipe_thumb} alt={recipe.recipe_name} className=''/>
            <h2 className='text-center p-1'>{recipe.recipe_name}</h2>
            <div className='flex gap-3 items-center pl-4'>
                <div className='flex text-yellow-400 mx-auto block'>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarHalf/>
                </div>
                <div className='absolute top-5 right-2 text-red-800'>
                    <FaHeart size={32}/>
                </div>
            </div>
            <div className='p-3'>
            <button className='border w-1/2 mx-auto block p-3 bg-red-400'>View More</button>
            </div>
        </div>
        :
        <div className='max-w-md ml-3 mt-3 animate-pulse'>
            <div className='h-32 w-full bg-black/50'></div>
            <div className='h-4 bg-black/50 w-[90%] mx-auto my-1'></div>
            <div className='flex gap-3'>
                <div className='h-3 bg-black/50 w-1/2'></div>
                <div className='h-3 bg-black/50 w-1/2'></div>
            </div>
            <div className='h-4 bg-black/50 w-[90%] mx-auto my-1'></div>
        </div>
        }
        {/* {admin && ( */}
             <div className='mt-1 ml-4 shadow-lg shadow-black justify-end border border-white flex gap-3'>
              <div className='flex items-center'>
                <div >
                  <RiEdit2Line/>
                </div>
                <button className="btn-btn">
                 <Link to={`/update/${recipe.id}`}>Update</Link>
                </button>
              </div>
              <div className='flex items-center'>
                <div>
                  <RiDeleteBinLine/>
                </div>
                <button onClick={deleteRecipe} id={recipe.id} className="border  px-2 text-center rounded-lg">Delete</button>
              </div>
            </div>
            {/* )} */}

        {/* <div className='flex gap-1'>
                <button className='border w-1/2 mx-auto block p-2 my-1 bg-green-400'>Update</button>
                <button className='border w-1/2 mx-auto block p-2 my-1 bg-red-600'>Delete</button>
            </div> */}
        </div>
    )
}
export default Card;