import React from 'react'
import { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const Signup = () => {
  const{signup}=useContext(AuthContext)
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const [isAdmin, setIsAdmin] = useState(false);
  const[password,setPassword]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please enter all required fields');
      return;
    }
    const userData = { email, password, username, isAdmin};
    signup(userData);
    console.log(userData)
  };

  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleSubmitAdmin = (event) => {
    event.preventDefault();
    console.log(`User is ${isAdmin ? 'an admin' : 'a regular user'}.`);
  };

  return (
    <div className='bg-white py-4 mx-5 rounded-3xl mb-1 mt-1 w-[90%] ml-auto mr-auto'>
      <div className='bg-[#49D5F3] opacity-80 w-[500px] h-[650px] rounded-3xl flex flex-col items-center ml-auto mr-auto mt-2 p-20'>
        <form onSubmit={handleSubmit}
          className='bg-white shadow-lg  rounded-3xl px-8 pt-3 pb-3 mb-3 w-full'>
          <div >
            <label htmlFor="username" className="block text-black text-lg font-bold mb-2">Username</label>
            <input type="text" onChange={e=>setUsername(e.target.value)}
            className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='janeCollins' />
          </div>
          <div >
            <label htmlFor="email" className="block text-black text-lg font-bold mb-2">Email</label>
            <input type="email" onChange={e=>setEmail(e.target.value)}
            className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='janecollins@gmail.com' />
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
{/* className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" */}
          <div className="mt-1">
            <label htmlFor="password" className="block text-back text-lg font-bold mb-2">Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)}
            className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder='Password'/>
          </div>
          {/* <div className=" mt-2">
            <label htmlFor="password" className="block text-black text-lg font-bold mb-2">Confirm Password</label>
            <input type="password" className="shadow appearance-none border border-[#160194] rounded-md w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='Confirm Password' />

          </div> */}
          <div className="flex items-center flex-col">
            <button className="bg-[#0C54BF] hover:bg-blue-900 text-white font-bold py-2 px-12 rounded-md focus:outline-none focus:shadow-outline">Sign Up</button>
            <h6>Already have an account? <Link to="/login" className="inline-block align-baseline font-bold text-sm text-[#160194] hover:text-blue-800">Login</Link></h6>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup