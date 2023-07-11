import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';


import { ChevronUpIcon } from '@chakra-ui/icons'
import { Collapse, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { Card, } from '@chakra-ui/react'
import { Box, } from '@chakra-ui/react'

import { MdOutlineCancel } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';




const Signup = () => {
  const { isOpen, onToggle } = useDisclosure()

  const navigate = useNavigate()

  const { toggleColorMode } = useColorMode()
  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  const [showMenu, setShowMenu] = useState(false);
  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };
  const [showChapters, setShowChapters] = useState(false);
  const handleDropdownClick = () => {
    setShowChapters(!showChapters);
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const RegistrationSuccess = () => <h2>Registration Successful! Redirecting to Homepage...</h2>;
  const PageNotFound = () => <h2>404 Page Not Found</h2>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3100/account/createUserAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        RegistrationSuccess();

        // Registration successful, redirect to homepage
        setRedirectToHome(true);
        <Navigate to="/" />
        // {redirectToHome && <Navigate to="/" />}
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Register Form */}
          <div className="bg-white rounded-md shadow-md p-4">

            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

              {/* Logo */}
              <a href="/" class="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>

              {/* Form Column */}
              <div class="w-full bg-[#F9FAFB] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                  {/* form heading */}
                  <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                   Sign In account
                  </h1>

                  {/* Form */}
                  <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    

                      {/* Name Field */}
                      <div>

                        <label for="username" class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Username
                          </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-Inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonniee#123"
                          required=""
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      {/* Password Field */}
                      <div>

                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Password
                        </label>

                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-Inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                   

                    {/* OR */}
                    <div className="mt-6 flex flex-row justify-center items-center gap-4">
                      <hr className="border-black" />
                      <p className="font-medium font-Inter">OR</p>
                      <hr />
                    </div>

                    {/* App store button */}
                    <div className="mt-6 lg:mt-0 grid grid-cols-1 lg:flex justify-center gap-4 lg:gap-8">

                      <button className="flex justify-center items-center bg-red-500 text-white text-base py-2 px-4 rounded hover:bg-red-600">
                        Signin with Google
                      </button>
                      <button className="flex justify-center items-center bg-black text-white text-base py-2 px-4 rounded hover:bg-gray-900">
                        Signin with Apple
                      </button>

                    </div>

                    {/* Login account button */}
                    <div class="container mx-auto flex flex-col justify-center items-center gap-2">
                      <button className="w-auto lg:w-full flex justify-center items-center bg-blue-700 rounded-lg text-base px-16 py-1.5 lg:px-5 lg:py-2.5 mt-4 text-white font-medium font-Inter" type="submit">Login
                      </button>
                      {error && <p className="text-sm lg:text-base text-red-700 font-medium font-Inter">{error}</p>}
                    </div>

                    {/* Already have an account text */}
                    <p class="text-sm font-light font-Inter text-gray-500 dark:text-gray-400">
                      You don't have an account yet? <a href="/signup" class="font-medium font-Inter text-primary-600 hover:underline dark:text-primary-500">Signup here</a>
                    </p>

                  </form>

                </div>

              </div>
            </div>

          </div>

          <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">
            {/* Full image */}
            <div className="flex items-center justify-center p-4 md:p-8" >
              <img src="/logo.png" alt="logo"
              />
            </div>
          </div>

        </div>
      </main>

    </>


  )
}

export default Signup

