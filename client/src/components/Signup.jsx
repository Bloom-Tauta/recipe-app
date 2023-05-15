
import React from 'react'
import {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signup = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      admin:isAdmin
    }
    console.log(userData)
    submitDataToApi(userData)
  };

  function submitDataToApi(data){
    fetch('https://recipe-share-k3tx.onrender.com/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      });

navigate("/login")

  }
  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleSubmitAdmin = (event) => {
    event.preventDefault();
    console.log(`User is ${isAdmin ? 'an admin' : 'a regular user'}.`);
  };

  return (
    <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-20'>
        <div className='sm:block hidden w-full'>
        <h2 className='font-bold text-2xl text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit}
        className='flex flex-col gap-4'>
          <div >
            <label htmlFor="username" className="block text-black text-lg font-bold mb-2">Username</label>
            <input type="text" name='username' required
            className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='janeCollins' />
          </div>
          <div >
            <label htmlFor="email" className="block text-black text-lg font-bold mb-2">Email</label>
            <input type="email" name='email'
            className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='janecollins@gmail.com' />
          </div>
          <div className="mt-1">
            <label htmlFor="password" className="block text-back text-lg font-bold mb-2">Password</label>
            <input type="password" name='password'
            className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder='Password'/>
          </div>
          <div onSubmit={handleSubmitAdmin}>
            <label htmlFor="admin" className="block text-black text-lg font-bold mb-2">Admin</label>
            <div className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline">
              <label htmlFor="checked-checkbox" >
                <input type="checkbox" checked={isAdmin} onChange={handleCheckboxChange} className="pt-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                Are you an admin?
              </label>

            </div>
          </div>
          <div className="flex items-center flex-col">
            <button className="bg-[#0C54BF] hover:bg-blue-900 text-white font-bold py-2 px-12 rounded-md focus:outline-none focus:shadow-outline">Sign Up</button>
            <h6>Already have an account? <Link to="/login" className="inline-block align-baseline font-bold text-sm text-[#160194] hover:text-blue-800">Login</Link></h6>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup