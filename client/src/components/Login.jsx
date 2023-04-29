// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Link } from "react-router-dom";


// function Login() {
//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function handleLogin(e) {
//     	e.preventDefault();
// 			// handle login logic here
// 	//   console.log(username, password)
// 		  login(username, password);



//   }
// 	return (
// 		// <div>
// 			// <section className='gradient-form h-full bg-neutral-200 dark:bg-neutral-700'>
// 				<div className='container h-full p-10'>
// 					<div className='g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
// 						<div className='w-full lg:max-w-4xl'>
// 							<div className='block rounded-lg bg-white mt-10 shadow-lg dark:bg-neutral-800'>
// 								<div className='g-0 lg:flex lg:flex-wrap'>
// 									{/* <!-- Left column container--> */}
// 									<div className='px-4 md:px-0 lg:w-6/12'>
// 										<div className='md:mx-6 md:p-12'>
// 											<form onSubmit={handleLogin}>
// 												<p className='mb-4'>Please login to your account</p>
// 												{/* <!--Username input--> */}
// 												<div
// 													className='relative mb-4'
// 													data-te-input-wrapper-init
// 												>
// 													<label htmlFor='exampleFormControlInput1'>
// 														Username
// 													</label>
// 													<input
// 														type='text'
// 														className='peer block min-h-[auto] w-full rounded border-3 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 														id='exampleFormControlInput1'
// 														placeholder=' Enter your Username'
// 														value={username}
// 														onChange={(e) => setUsername(e.target.value)}
// 													/>
// 												</div>

// 												{/* <!--Password input--> */}
// 												<div
// 													className='relative mb-4'
// 													data-te-input-wrapper-init
// 												>
// 													<label htmlFor='exampleFormControlInput11'>
// 														Password
// 													</label>
// 													<input
// 														type='password'
// 														className='peer block min-h-[auto] w-full rounded border-3 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
// 														id='exampleFormControlInput11'
// 														placeholder='Password'
// 														value={password}
// 														onChange={(e) => setPassword(e.target.value)}
// 													/>
// 												</div>

// 												{/* <!--Submit button--> */}
// 												<div className='mb-12 pb-1 pt-1 text-center'>
// 													<button
// 														className=' bg-green-500 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
// 														type='submit'
// 														data-te-ripple-init
// 														data-te-ripple-color='light'
// 														disabled={!username || !password}
// 													>
// 														{/* "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" */}
// 														Log in
// 													</button>
// 												</div>

// 												{/* <!--Register button--> */}
// 												<div className='flex  items-center justify-between pb-6'>
// 													<p className='mb-0 mr-2'>Don't have an account?</p>
// 													<Link  to="/signup"
// 														type='button'
// 														className=' bg-green-500 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
// 														data-te-ripple-init
// 														data-te-ripple-color='light'
// 													>

// 														Register
// 													</Link>
// 												</div>
// 											</form>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			// </section>
// 		// </div>
// 	);
// }
// export default Login;

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