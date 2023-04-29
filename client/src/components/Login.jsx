import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const{login}=useContext(AuthContext)
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')

  const handleSubmit = (e)=>{
    // send Data to rails
    e.preventDefault()
    login(username, password)
    console.log(username)
}
  return (


    <div className=' bg-white py-4 mt-1 mx-5 mb-1 rounded-3xl'>
    <div className='bg-[#49D5F3] opacity-80 w-[50%] h-[90%] rounded-3xl flex flex-wrap flex-col items-center ml-auto mr-auto mt-2 p-20'>
    <form  onSubmit={handleSubmit}
    className='bg-white shadow-md rounded-3xl px-8 pt-6 pb-6 mb-4 w-full relative'>
      <div className="mb-4">
        <label htmlFor="username" className="block text-black text-lg font-bold mb-2">Username</label>
        <input type="text" onChange={e => setUsername(e.target.value)}
         className="shadow appearance-none border border-[#160194] outline-none rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outile-none focus:shadow-outline" placeholder='Username' />
      </div>
      <div className="mb-3 mt-4">
        <label htmlFor="password" className="block text-black text-lg font-bold mb-2">Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)}
        className="shadow  outline-none appearance-none border border-[#160194] rounded-3xl w-full py-2 px-3 text-black mb-3  focus:outline-none focus:shadow-outline"  placeholder=' password'/>
      </div>
      <div className="flex items-center flex-col">
      <a href='#signup' className="inline-block align-baseline font-bold text-sm text-[#160194] hover:text-blue-800 mb-2">Forgot Password?</a>
        <button disabled={!password||!username} className="bg-[#0C54BF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>

        <h6>Don't have an account?<Link to="/signup" className="inline-block align-baseline font-bold text-sm text-[#160194] hover:text-blue-800">Signup</Link></h6>
      </div>

    </form>
  </div>
  </div>


  )
}

export default Login