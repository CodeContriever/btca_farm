import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"
import Main from "../components/Main";

import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
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
      <Layout>
        <Main>

          {/* Sidebar */}
          <Container>
            <Sidebar />
          </Container>

          {/* Main content */}
          <Container>
            <Wrapper
              className='box-border gap-6 grid mb-6 grid-cols-1 max-cols-content'
            >
              <div className="box-border">
                <h1 className="mb-0 mt-0 text-gray-800 text-base font-medium leading-6">
                  Activation
                </h1>
              </div>

              <Card
                className="box-border flex flex-col flex-grow items-center justify-center rounded-md p-4 bg-white shadow-md"
              >
                <CardHeader>
                  <p
                    className="box-border mb-0 mt-0 text-gray-600 text-sm font-medium leading-6"
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
          </Container>

        </Main>
      </Layout>

      {/* Footer */}
      <Container
        className="border-t-2 border-gray-200"
      >
        <Layout>
          <Footer />
          <Copyright />
        </Layout>
      </Container>
      
    </ParentCont>

  )
}

export default Activation