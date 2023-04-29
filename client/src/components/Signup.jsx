import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function SignUp() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [userType, setUserType] = useState("user");

  function handleRegister(e) {
    e.preventDefault();
    console.log(username, email, userType, password);
    register(username, email, userType, password);
  }
  return (
          // <div className="">
            <div className="block rounded-lg bg-white shadow-lg mt-10 dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">

                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">

                    <form onSubmit={handleRegister}>
                      <p className="mb-4">Please Create An Account</p>

                      {/* <!--Username input--> */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label
                          htmlFor="exampleFormControlInput1"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-3 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />

                      </div>

                      {/* <!--Email input--> */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label
                          htmlFor="exampleFormControlInput1"
                        >
                          Email address
                        </label>
                        <input
                          type="Email"
                          className="peer block min-h-[auto] w-full rounded border-3 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                      </div>

                      {/*  <!--Password input--> */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                         <label
                          htmlFor="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-3 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                      </div>
                      {/*  <!--UserType input--> */}

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="userType"
                        >
                          Click to select User
                        </label>
                        <select
                          className="shadow appearance-none border-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="userType"
                          value={userType}
                          onChange={(e) => {
                            console.log(e.target.value);
                            setUserType(e.target.value);
                          }}
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>

                      {/*  */}
                      {/* <!--Registration button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="  bg-green-500 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Sign Up
                        </button>
                        <div className='flex  items-center justify-between pb-6'>
													<p className='mb-0 mr-2'>Already have an account?</p>
													<Link  to="/login"
														type='button'
														className=' bg-green-500 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
														data-te-ripple-init
														data-te-ripple-color='light'
													>

														Login
													</Link>
												</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      // </div>

  );
}
export default SignUp;