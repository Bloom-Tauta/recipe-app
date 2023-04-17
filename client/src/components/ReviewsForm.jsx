

function ReviewsForm(){
    return(
        <div>
            <h3 className='text-center '>Your ratings</h3>
        <div className='flex items-center '>
            <div className='text-center p-6 flex flex-row'>
            {[1, 2, 3, 4, 5].map((star) => (
            <span
                key={star}
                // onClick={() => handleStarClick(star)}
                style={{
                cursor: 'pointer',
                // color: star <= rating ? 'red' : 'gray'
                }}
            >
            {/* <BiStar/> */}
            </span>
            ))}
          </div>
          <p className='border-l border-black p-1'>
            {/* {remark} */}
          </p>
        </div>

      <div className='flex flex-col'>
        <label htmlFor="Comment" className='text-start'>Comment:</label>
        <textarea
          id="Comment"
        //   value={comment}
        //   onChange={handleCommentChange}
          rows={4}
          cols={50}
          className='bg-gray-50 border border-gray-300
          text-gray-900 sm:text-sm rounded-lg
          focus:ring-primary-600 p-2'
        />
      </div>
      <div className="flex flex-row items-center gap-3 justify-end mt-4">
          <input type="submit" value="Cancel"
        //   onClick={handleSubmit}
          className="text-blue-500 hover:underline"/>
          <button type="submit"
        // onClick={handleSubmit}
          className="border border-black p-2 bg-green-100 hover:bg-green-800">Submit</button>
        </div>
        </div>
    )
}

export default ReviewsForm;