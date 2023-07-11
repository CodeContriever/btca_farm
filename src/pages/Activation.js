import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"
import Main from "../components/Main";

import { Card, CardHeader, CardBody, CardFooter, Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'




const Activation = () => {

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
              <Wrapper
                className='box-border gap-6 grid mb-6 grid-cols-1 max-cols-content'
              >
                <div className="box-border">
                  <h1 className="mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6">
                    Activation
                  </h1>
                </div>

                <Card
                  className="box-border flex flex-col flex-grow items-center justify-center rounded-md p-4 bg-white shadow-lg"
                >
                  <CardHeader>
                    <p
                      className="box-border mb-0 mt-0 text-gray-600 text-base font-medium leading-6"
                    >
                      {"Please, enter your Activation Code"}
                    </p>{" "}
                  </CardHeader>
                  <CardBody className="box-inherit whitespace-nowrap overflow-hidden truncate border-0 m-0 outline-none bg-transparent block text-inherit w-full max-w-[75%] text-gray-800 text-base leading-6 break-words py-5">
                    <Input
                      variant='outline'
                      placeholder='Activation Code'
                      // placeholderStyles={{
                      //   color: "gray.400",
                      //   fontStyle: "italic",
                      // }}

                      className="py-8 border border-b border-gray-200 font"
                    />
                  </CardBody>

                  <CardFooter
                    className="relative w-full"
                  >
                    <button
                      // onClick={}
                      className="box-border absolute bottom-0 right-[120px]  border-0 m-0 overflow-visible antialiased tracking-normal font-inter rounded-md outline-none transition duration-300 ease-in font-base leading-4 text-center bg-blue-500 text-white py-2 px-4 cursor-not-allowed pointer-events-none opacity-50"
                    >
                      Activate
                    </button>
                  </CardFooter>
                </Card>
              </Wrapper>
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

export default Activation