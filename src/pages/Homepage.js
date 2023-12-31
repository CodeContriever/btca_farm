import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { Collapse, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'

import Nav2 from "../components/Nav2";
import footer from "../components/Footer";





const LandingPage = () => {
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

  return (
    <div
      className="">

      <header className="bg-white border-b-2 border-gray-200 py-4">

        {/* Wrapper */}
        <div className="container mx-auto px-4">

         <Nav2 />

        </div>

      </header>

      <main className="bg-[#F9FAFB]">

        {/* Hero section */}
        <section className="bg-white dark:bg-gray-900 mb-8">

          {/* Wrapper */}
          <div className="container mx-auto px-4">

            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

              <div class="mr-auto place-self-center lg:col-span-7">
                {/* Hero heading */}
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">BTCA FARM</h1>

                {/* Hero descroption */}
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">BTCA Farm is an app for BTCA Tokens minting using smart contracts. It allows you to secure minting by simply freezing coins in your FARM wallet.</p>

                {/* Get started */}

                <a href="/home" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  Get started
                  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>

                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contact Us
                </a>

              </div>

              {/* Hero image */}
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
              </div>

            </div>

          </div>

        </section>

        {/* Farm description section */}
        <section className="bg-white dark:bg-gray-900 mb-8">

          {/* Wrapper */}
          <div className="container mx-auto px-4">

            <div class="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="text-gray-500 sm:text-lg dark:text-gray-400">

                <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>

                <p class="mb-4">BTCA FARM is a registered trademark of PLATINEX Limited Liability Company. Its use does not imply any affiliation with or endorsement by it.</p>

                <p>BTCA FARM is a registered trademark of PLATINEX Limited Liability Company. Its use does not imply any affiliation with or endorsement by it.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                <img class="w-full mt-4 rounded-lg lg:mt-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
              </div>
            </div>

          </div>

        </section>

        {/* Feature section */}
        <section className="bg-white dark:bg-gray-900 mb-8">

          {/* Wrapper */}
          <div className="container mx-auto px-4">

            <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">

              {/* Feature heading & desc */}
              <div class="max-w-screen-md mb-8 lg:mb-16">
                {/* Heading */}
                <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Designed for you</h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at BTCA_FARM we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
              </div>

              <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-20 md:space-y-0">

                <div>

                  {/* Max minting */}
                  <div class="flex items-center justify-center w-10 h-10 mb-4 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-900">
                    <svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  </div>

                  <h3 class="mb-2 text-xl font-bold dark:text-white">Max minting</h3>

                  <p class="text-gray-500 dark:text-gray-400">Monthly minting over the course of 12 to 24 months. The process is entirely on the SMART Blockchain.</p>
                </div>

                {/* Operating term */}
                <div>
                  <div class="flex items-center justify-center w-10 h-10 mb-4 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-900">
                    <svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                  </div>

                  <h3 class="mb-2 text-xl font-bold dark:text-white">Operating term</h3>

                  <p class="text-gray-500 dark:text-gray-400">Smart Contracts allow you to mint for a period of one year, providing uninterrupted minting during the entire operating term.</p>
                </div>

                {/* Fast transaction */}
                <div>

                  <div class="flex items-center justify-center w-10 h-10 mb-4 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-900">
                    <svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                  </div>

                  <h3 class="mb-2 text-xl font-bold dark:text-white">Fast transactions</h3>

                  <p class="text-gray-500 dark:text-gray-400">All minting transactions are available in the app. You can easily spend, transfer and freeze (mint) them again.</p>

                </div>

                {/* Safety & security */}
                <div>

                  <div class="flex items-center justify-center w-10 h-10 mb-4 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-900">

                    <svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                  </div>

                  <h3 class="mb-2 text-xl font-bold dark:text-white">Safety & security</h3>

                  <p class="text-gray-500 dark:text-gray-400">The user is the sole owner of all access keys to his wallet and all the coins in it.</p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CTA section */}
        <section className="bg-white dark:bg-gray-900 mb-8">

          {/* Wrapper */}
          <div className="container mx-auto px-4">

            <div class="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

              <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />

              <img class="hidden w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />

              <div class="mt-4 md:mt-0">

                <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Let's create more meaningful farming</h2>

                <p class="mb-6 text-gray-500 md:text-lg dark:text-gray-400">To start minting, you need to register on the site, download and install two free applications: BTCA Farm (a minting application) and BTCA Wallet (a wallet application).</p>

                <a href="/home" class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                  Get started
                  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>

              </div>
            </div>

          </div>

        </section>

      </main>

     
      {/* Footer */}
      <footer
        className="p-4 bg-white sm:p-6 dark:bg-gray-800 border-t-2 border-gray-200"
      >
        {/* Wrapper */}
        <div
          className="container mx-auto px-4"
        >

          <div class="max-w-screen-xl mx-auto">

            <div class="md:flex md:justify-between">

              {/* logo */}
              <div class="mb-6 md:mb-0">

                <a href="/home" class="flex items-center">
                  <img src="/logo.png" class="h-8 mr-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BTCA_FARM</span>
                </a>

              </div>

              {/* Help */}
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  {/* Heading */}
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help</h2>

                  <ul class="text-gray-600 dark:text-gray-400">

                    {/* Our support */}
                    <li class="mb-4">
                      <a href="#" class="hover:underline">Our Support</a>
                    </li>

                    {/* Imprint */}
                    <li>
                      <a href="#" class="hover:underline">Imprint</a>
                    </li>

                  </ul>

                </div>

                {/* Folow us */}
                <div>

                  {/* Heading */}
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>

                  <ul class="text-gray-600 dark:text-gray-400">
                    {/* Facebook */}
                    <li class="mb-4">
                      <a href="#" class="hover:underline ">Facebook</a>
                    </li>

                    {/* Instgram */}
                    <li>
                      <a href="#" class="hover:underline">Instagram</a>
                    </li>

                  </ul>

                </div>

                {/* Legal */}
                <div>

                  {/* Heading */}
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>

                  {/*  */}
                  <ul class="text-gray-600 dark:text-gray-400">
                    {/* Privacy policy */}
                    <li class="mb-4">
                      <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>

                    {/* Terms & conditions */}
                    <li>
                      <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>

                  </ul>

                </div>

              </div>

            </div>

            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            {/* Copyright */}
            <div class="sm:flex sm:items-center sm:justify-between">

              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">BTCA_FARM™</a>. All Rights Reserved.
              </span>

              {/* Socials */}
              <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

                {/* Facebook */}
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>

                {/* Instagram */}
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                </a>

                {/* Twitter */}
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>

              </div>

            </div>

          </div>

        </div>

      </footer >

    </div>
  )
}

export default LandingPage

