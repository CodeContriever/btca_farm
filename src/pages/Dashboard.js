import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"
import Main from "../components/Main";

import ShareLink from "../components/dashboard/ShareLink"
import Indicator from "../components/dashboard/Indicator";
import Dashbar from "../components/dashboard/Dashbar";
import FarmSpeed from "../components/dashboard/FarmSpeed";
import FarmPackages from "../components/dashboard/FarmPackages";

import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Button } from 'flowbite-react';




const Dashboard = () => {
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <ParentCont
    >
      {/* Header */}
      <header
       className='box-border w-[100%] bg-black sticky top-0 left-0 right-0 z-[10001] mb-8 border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >
        <Container
        className="container mx-auto bg-white px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12"
        >
          {/* flex flex-wrap justify-between items-center overflow-hidden */}
          <Wrapper>
            <Nav></Nav>
          </Wrapper>

        </Container>
      </header>

    

      <main className="bg-black mb-8">

        <Container
          className="container mx-auto bg-white  px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12"
        >

          <Wrapper className='box-border flex-1 flex-col min-h-[calc(100vh-64px)] gap-12 p-6 pb-20 block mt-[48px] lg:grid grid-rows-auto grid-cols-[264px,minmax(0px,1fr)]'>

            <Box>
              <Sidebar />
            </Box>

            <Box>
              <ShareLink />
              <Dashbar />
              <Indicator />
              <FarmSpeed />
              <FarmPackages />
            </Box>
            
          </Wrapper>


        </Container>


      </main>

    

      {/* Footer */}
      <footer
        className="bg-black border-t-2 border-gray-200"
      >
        {/* <Layout> */}
        <Container
        className="container mx-auto bg-white px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 lg:px-20"
        >
          <Wrapper>
          <Footer />
          <Copyright />
          </Wrapper>
          </Container>
        {/* </Layout> */}
      </footer>

    </ParentCont>

  )
}

export default Dashboard