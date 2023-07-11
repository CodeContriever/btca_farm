import React from "react";
import ParentCont from "../components/ParentCont";



import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Sidebar from "../components/Sidebar";
import Main_Three from "../components/Main_Three";
import Nav3 from "../components/Nav3";
import Footer from "../components/Footer";




const Dashboard = () => {
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <div
      className="">

      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 py-4">

        {/* Wrapper */}
        <div className="container mx-auto px-4">

          <Nav3></Nav3>

        </div>

      </header>



      <main
        className="bg-black mb-8"
      // className="bg-gradient-to-r from-[#A020F0] to-blue-500 mb-8"
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4 py-20">
          <div className="flex lg:grid grid-cols-3 gap-4">

            <Box className="">
              <Sidebar />
            </Box>

            <Box className="col-span-2 ">
              <Main_Three></Main_Three>
              {/* <ShareLink />
              <Dashbar />
              <Indicator />
              <FarmSpeed />
              <FarmPackages /> */}
            </Box>

          </div>

        </div>


      </main>



      {/* Footer */}
      <footer
        className="p-4 bg-white sm:p-6 dark:bg-gray-800 border-b-2 border-gray-200"
      >
        {/* Wrapper */}
        <div
          className="container mx-auto px-4"
        >

          <Footer />

        </div>

      </footer >



    </div>

  )
}

export default Dashboard