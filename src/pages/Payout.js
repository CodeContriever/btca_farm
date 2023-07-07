import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"
import Main from "../components/Main";




const Payout = () => {

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

export default Payout