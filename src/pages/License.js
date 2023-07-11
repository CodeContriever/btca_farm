import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"

import { Box } from "@chakra-ui/react"




const License = () => {

  return (
    <ParentCont
    >
      {/* Header */}
      <Header
      >
        <Nav>
        </Nav>
      </Header>

      {/* Main */}
      <main
        className="bg-black mb-8"
      >

        <Container
          className="container mx-auto bg-white px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12"
        >

          <Wrapper
            className='box-border w-full mx-auto px-2 md:px-12 flex-1 flex-col min-h-[calc(100vh-64px)] gap-12 lg:gap-18 block mt-[48px] lg:grid grid-rows-auto grid-cols-[264px,minmax(0px,1fr)]'>

            <Box className="">
              <Sidebar />
            </Box>

            <Box>

            </Box>

          </Wrapper>


        </Container>


      </main>

      {/* Footer */}
      <footer
        className="bg-black border-t-2 border-gray-200"
      >
        <Container
          className="container mx-auto bg-white px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 lg:px-20"
        >
          <Wrapper>
            <Footer />
            <Copyright />
          </Wrapper>
        </Container>
      </footer>

    </ParentCont>

  )
}

export default License