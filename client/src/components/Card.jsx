import { BsStarHalf } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';




function Card({meal}){

    // added by me


    const navigate = useNavigate()

    return(
        <div className='relative'>
        { meal.id ?
        <div className=' mt-4 ml-4 shadow-lg shadow-black' onClick={() => navigate(`/viewmeal/${meal.id}`)}>
            <img src={meal.image_url} alt={meal.recipe_name} className=''/>
            <h2 className='text-center p-1'>{meal.recipe_name}</h2>
            <div className='flex gap-3 items-center pl-4'>
                <div className='flex'>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarHalf/>
                </div>
                <div className='absolute top-5 right-2 text-red-800'>
                    <FaHeart size={32}/>
                </div>
                <div>
                    {/* {meal.ratings} */}
                    {123456789} ratings
                </div>
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
        </div>
    )
}
export default Card;