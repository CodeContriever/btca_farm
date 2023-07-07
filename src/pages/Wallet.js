import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"
import Main from "../components/Main";
import { Box, Image, Button} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import { ArrowForwardIcon } from "react-icons/md"




const Wallet = () => {

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
              className="box-border flex flex-col flex-grow"
            >
              {" "}
              <div className="box-border">
                <div
                  className="box-border gap-6 grid grid-cols-[1fr,max-content] mb-6"
                >
                  <Box className="box-border">
                    <h1
                      className="box-border mb-0 mt-0 text-gray-700 text-base font-medium font-inter leading-6 "
                    >
                      My Wallets
                    </h1>{" "}
                  </Box>{" "}
                </div>{" "}

                <Box
                className="box-border rounded-md bg-white shadow-md"
                >
                  <Box
                   className="box-border gap-6 grid p-6"
                  >
                    
                    {/* Card 1 */}
                  <div 
                 className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white"
                  >

                    {/* card body */}
                    <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">
                      <div className="flex flex-row">
                        <Image></Image>
                        <p 
                        className="box-border mt-0 text-gray-700 text-base font-medium font-inter leading-6 mb-2"
                        >
                          No wallet assigned
                          </p>
                      </div>
                      <div>
                        <p 
                        className="box-border mb-0 mt-0 text-gray-600 text-base break-words font-inter leading-6"
                        >
                          Please install the corresponding application and log in
                          </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Image 
                      src="/logo.png" 
                      boxSize='40px'
                      />
                      <h1
                      className="box-border mb-0 mt-0 text-gray-800 text-base font-bold font-inter leading-6 break-words flex items-center text-uppercase"
                      >
                        BTCA WALLET
                        </h1>
                    </div>

                    {/* card footer */}
                    <div>
                      <Button 
                      // rightIcon={<ArrowForwardIcon />} 
                      colorScheme='teal' 
                      variant='outline'
                      >
                        Go to my Apps
                      </Button>

                    </div>
                  </div>

                    {/* Card 2 */}
                    <div 
                 className="box-border flex flex-col gap-6 rounded-b-md border border-gray-300 p-6 bg-white"
                  >

                    {/* card body */}
                    <div className="flex flex-col gap-6 bg-[#fff7d9] p-4">
                      <div className="flex flex-row">
                        <Image></Image>
                        <p
                         className="box-border mt-0 text-gray-700 text-base font-medium font-inter leading-6 mb-2"
                        >
                          No wallet assigned
                          </p>
                      </div>
                      <div>
                        <p
                        className="box-border mb-0 mt-0 text-gray-600 text-base break-words font-inter leading-6"
                        >
                          Please install the corresponding application and log in
                          </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Image 
                      src="/logo.png" 
                      boxSize='40px'
                      />
                      <h1
                      className="box-border mb-0 mt-0 text-gray-800 text-base font-bold font-inter leading-6 break-words flex items-center text-uppercase"
                      >
                        BTCA FARM
                        </h1>
                    </div>

                    {/* card footer */}
                    <div>
                      <Button 
                      // rightIcon={<ArrowForwardIcon />} 
                      colorScheme='teal' 
                      variant='outline'
                      >
                        Go to my Apps
                      </Button>

                    </div>
                  </div>
                  </Box>

                </Box>


              </div>
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

export default Wallet