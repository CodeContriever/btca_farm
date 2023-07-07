  {/*Dashboard main */}
  <Layout>
  <Main>
    {/* Dashboard sidebar */}
    <Container>
      <Sidebar />
    </Container>

    {/* Dashboard main content */}
    <Container className="pageFarm__content">
      <ShareLink />
      <Dashbar />
      <Indicator />
      <FarmSpeed />
      <FarmPackages />
    </Container>

  </Main>
</Layout>

<Header
>
  <Nav>
  </Nav>
</Header>