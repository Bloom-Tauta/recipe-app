// import { createContext, useState } from "react";
// import React from "react"
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"
// export const AuthContext = createContext();




// export default function AuthProvider({children})
// {
//     const navigate = useNavigate()
//     const [currentUser, setCurrentUser] = useState('')

//     // login
//     const login = (username, password) =>{
//         fetch(`http://localhost:3000/login`,{
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username, password
//             })
//         }
//         )
//         .then(res=>res.json())
//         .then(response=>{
//             console.log(response)
//             if(response.errors){
//                  const Toast = Swal.mixin({
//                     toast: true,
//                     position: 'top-end',
//                     showConfirmButton: false,
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                         toast.addEventListener('mouseenter', Swal.stopTimer)
//                         toast.addEventListener('mouseleave', Swal.resumeTimer)
//                     }
//                     })

//                     Toast.fire({
//                     icon: 'error',
//                     title: 'Signed in successfully'
//                     })
//             }
//             else if (response.user) {
//                 // set the user token in the session storage
//               sessionStorage.setItem('jwtToken', response.jwt);
//                 sessionStorage.setItem('userTYpe', response.user.userType);
//                 sessionStorage.setItem('username', response.user.username);
//                  sessionStorage.setItem('userId', response.user.id);
//                 setCurrentUser(response.user)
//                 navigate('/')
//                 // show success message
//                     const Toast = Swal.mixin({
//                     toast: true,
//                     position: 'top-end',
//                     showConfirmButton: false,
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                         toast.addEventListener('mouseenter', Swal.stopTimer)
//                         toast.addEventListener('mouseleave', Swal.resumeTimer)
//                     }
//                     })

//                     Toast.fire({
//                     icon: 'success',
//                     title: 'Signed in successfully'
//                     })
//             }
//             else{

//             }
//         })
//     }

// // Register
//     const register = (username, email, userType, password) => {
//          console.log("userType:", userType);

//         fetch('http://localhost:3000/users',{
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                username, email, userType, password
//             })
//         }
//         )
//         .then(res=>res.json())
//         .then(response=>{
//             console.log(response)
//             if(response.errors){
//                  const Toast = Swal.mixin({
//                     toast: true,
//                     position: 'top-end',
//                     showConfirmButton: false,
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                         toast.addEventListener('mouseenter', Swal.stopTimer)
//                         toast.addEventListener('mouseleave', Swal.resumeTimer)
//                     }
//                     })

//                     Toast.fire({
//                     icon: 'error',
//                     title: 'Unable to Sign-up'
//                     })
//             }

//             else if (response.status==='created') {
//                 // show success message
//                 navigate('/login')
//                 const Toast = Swal.mixin({
//                     toast: true,
//                     position: 'top-end',
//                     showConfirmButton: false,
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                         toast.addEventListener('mouseenter', Swal.stopTimer)
//                         toast.addEventListener('mouseleave', Swal.resumeTimer)
//                     }
//                     })

//                     Toast.fire({
//                     icon: 'success',
//                     title: 'Signed up successfully'
//                     })

//             }
//             else{

//             }
//         })

//     }

//      // Logout
//      const logout = () =>{
//        sessionStorage.clear();
//        localStorage.clear();
//              navigate('/login');
//      }

//     const contextData = {
//         login, logout, register, currentUser
//     }

//   return (
//     <>
//      <AuthContext.Provider value={contextData}>
//         {children}
//      </AuthContext.Provider>
//     </>
//   )
// }

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function loginUser(username, password) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.authorized) {
      const token = data.token;

      // save the token in localStorage or sessionStorage for future use
      return { user: data.user, token: token };
    } else {
      throw new Error('Invalid username or password');
    }
  });
}

export const AuthContext = createContext({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedToken && storedUser) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);


  };

  const signup = async (userData) => {
    if (!userData.email || !userData.password ) {
        console.log('signup function executed with userData:', userData);
      throw new Error('Email and password are required.');
    }
    try {
      const res = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        Swal.fire({
          icon: 'success',
          title: 'User created successfully',
        });
        navigate("/login");
      }
    } catch (error) {
       console.error(error.message);

      Swal.fire({
        icon: 'error',
        title: 'Error creating user',
        text: error.message,
      });
      throw error;
    }
  };

  const login = async (username, password) => {
    if (user) {
      Swal.fire({
        icon: 'warning',
        title: 'You are already logged in',
      });
      navigate("/");
      return;

    }
    try {
      const { user, token } = await loginUser(username, password);
      setUser(user);
      setToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      Swal.fire({
        icon: 'success',
        title: 'Logged in successfully',
      });
      navigate("/");
    } catch (error) {
      console.error(error.message);

      Swal.fire({
        icon: 'error',
        title: 'Error logging in',
        text: error.message,
      });
      throw error;
    }

  };


  return (
    <AuthContext.Provider value={{ user, token, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;