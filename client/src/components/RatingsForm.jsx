import React, { useState } from 'react';
import { BiStar } from 'react-icons/bi'

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [comment, setComment] = useState("");


  function handleSubmit(e){
    e.preventDefault();
  }

  const handleStarClick = (star) => {
    setRating(star);
    switch (star) {
        case 1:
          setComment("Poor");
          break;
        case 2:
          setComment("Fair");
          break;
        case 3:
          setComment("Average");
          break;
        case 4:
          setComment("Good");
          break;
        case 5:
          setComment("Excellent");
          break;
        default:
          setComment("");
      }
  };
  const handlereviewChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <div className='flex flex-col items-center  justify-center border border-black px-12 py-8 mx-auto max-w-lg mt-4'>
        <h3 className='text-center '>Your ratings</h3>
        <div className='flex items-center '>
            <div className='text-center p-6 flex flex-row'>
            {[1, 2, 3, 4, 5].map((star) => (
            <span
                key={star}
                onClick={() => handleStarClick(star)}
                style={{
                cursor: 'pointer',
                color: star <= rating ? 'red' : 'gray'
                }}
            >
            <BiStar/>
            </span>
            ))}
          </div>
          <p className='border-l border-black p-1'>{comment}</p>
        </div>

      <div className='flex flex-col'>
        <label htmlFor="review" className='text-center'>Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={handlereviewChange}
          rows={4}
          cols={50}
          className='bg-gray-50 border border-gray-300
          text-gray-900 sm:text-sm rounded-lg
          focus:ring-primary-600 p-2'
        />
      </div>
      <div className="flex flex-row items-center gap-3 justify-end mt-4">
          <input type="submit" value="Cancel"
          onClick={handleSubmit}
          className="text-blue-500 hover:underline"/>
          <button type="submit"
        onClick={handleSubmit}
          className="border border-black p-2 bg-green-100 hover:bg-green-800">Submit</button>
        </div>
    </div>
  );
};

export default RatingForm;
