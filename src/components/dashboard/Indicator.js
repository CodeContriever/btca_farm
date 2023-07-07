import React from 'react'
import { Box, Flex, Heading, Spacer, Highlight, Image, Button, Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import Container from '../Container';
import Wrapper from '../Wrapper';


const Indicator = () => {
  return (
    <section className="box-border">
      {/* Card containers */}
      <Container
        className="box-border flex flex-col gap-6 lg:grid grid-cols-3 grid-rows-[auto_minmax(174px, _auto)_minmax(142px, _auto)_minmax(142px, _auto)] transition-opacity opacity-100"
      // style={{
      //   boxSizing: "border-box",
      //   gap: "24px",
      //   display: "grid",
      //   gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
      //   gridTemplateRows:
      //     "auto minmax(174px, auto) minmax(142px, auto) minmax(142px, auto)",
      //   transition: "opacity 0.5s ease 0s",
      //   opacity: 1,
      // }}
      >

        {/* Card Responsibilty indicator*/}
        <Container
          className="box-border rounded-md overflow-hidden p-4 bg-white shadow-md flex flex-col justify-between relative col-span-full"
        // style={{
        //   boxSizing: "border-box",
        //   borderRadius: "4px",
        //   overflow: "hidden",
        //   padding: "16px",
        //   backgroundColor: "#fff",
        //   boxShadow:
        //     "0 0 1px rgba(26,32,36,0.32),0 4px 8px rgba(91,104,113,0.24)",
        //   display: "flex",
        //   WebkitBoxOrient: "vertical",
        //   WebkitBoxDirection: "normal",
        //   flexDirection: "column",
        //   WebkitBoxPack: "justify",
        //   justifyContent: "space-between",
        //   position: "relative",
        //   gridColumn: "1 / -1",
        // }}
        >
          {/* Heading: Responsibility indicator */}
          <Wrapper
            className="box-border flex items-center justify-between mb-[16px]"
          // style={{
          //   boxSizing: "border-box",
          //   WebkitBoxAlign: "center",
          //   alignItems: "center",
          //   display: "flex",
          //   WebkitBoxPack: "justify",
          //   justifyContent: "space-between",
          //   marginBottom: "16px",
          // }}
          >
            <h1
              className="box-border mb-0 mt-0 text-gray-700 font-medium text-[14px] leading-6"
            // style={{
            //   boxSizing: "border-box",
            //   marginBottom: "0px",
            //   marginTop: "0px",
            //   color: "#2b2d33",
            //   fontFamily: "Inter",
            //   fontSize: "14px",
            //   fontWeight: 500,
            //   lineHeight: "21px",
            // }}
            >
              <span style={{ boxSizing: "border-box", outline: "none" }}>
                Responsibility Indicator
              </span>{" "}
            </h1>

            <Spacer></Spacer>

            <h1
              className="box-border rounded-md px-[3px] py-[3px] text-green-500 font-normal text-[12px] leading-5 bg-green-200 uppercase"
            // style={{
            //   boxSizing: "border-box",
            //   borderRadius: "4px",
            //   padding: "3px 8px",
            //   color: "#24c38e",
            //   fontFamily: "Inter",
            //   fontSize: "12px",
            //   fontWeight: 400,
            //   lineHeight: "18px",
            //   backgroundColor: "#ecf8eb",
            //   textTransform: "uppercase",
            // }}
            >
              <span style={{ boxSizing: "border-box", outline: "none" }}>
                Price is good
              </span>{" "}
            </h1>
          </Wrapper>


          <Wrapper
            className="box-border flex flex-col lg:grid grid-cols-[300px_1fr] gap-[24px] "
          // style={{
          //   boxSizing: "border-box",
          //   gap: "24px",
          //   display: "grid",
          //   gridTemplateColumns: "248px 1fr",
          // }}
          >

            {/* First Card */}
            <div
              className="box-border p-[16px] bg-gray-200 grid gap-[16px]"
            >
              {/* Card */}
              <div
                className='py-6'
              >
                <Box
                  style={{
                    boxSizing: "border-box",
                  }}
                >
                  <h1
                    className="box-border mt-0 text-gray-500 font-inter text-[14px] font-medium leading-6 mb-[4px]"
                  >
                    Market Price
                  </h1>{" "}
                </Box>

                {/* Card Body 1 */}
                <Box
                  className="resIndicatorPrice__amount"
                  style={{
                    boxSizing: "border-box",
                    gap: "8px",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    display: "grid",
                    gridTemplateColumns: "max-content 1fr max-content",
                  }}
                >

                  <Image
                    className="border-0 box-content max-w-full align-middle m-[2px] h-[20px] w-[20px]"
                    alt="BTCA logo"
                    src="/logo.png"
                  />{" "}

                  <svg
                    className="plc-svgIcon resIndicatorPrice__icon"
                    height="24"
                    width="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", color: "#aaabad" }}
                  >
                    <path
                      d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>{" "}

                  <Text
                    className="box-border mb-0 mt-0 text-aaabad font-Inter text-[20px] font-medium leading-[32px] break-words whitespace-nowrap"
                  >
                    USDT
                  </Text>
                </Box>
              </div>

              {/* Card Body 2 */}
              <div
              >
                <Box
                  style={{
                    boxSizing: "border-box",
                  }}
                >
                  <Heading
                    className="resIndicatorPrice__title"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      color: "#aaabad",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "21px",
                      marginBottom: "4px",
                    }}
                  >
                    Community Price
                  </Heading>{" "}
                </Box>

                <Box
                  className="resIndicatorPrice__amount"
                  style={{
                    boxSizing: "border-box",
                    gap: "8px",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    display: "grid",
                    gridTemplateColumns: "max-content 1fr max-content",
                  }}
                >

                  <Image
                    className="resIndicatorPrice__logo"
                    alt="BTCA logo"
                    src="/logo.png"
                    style={{
                      border: "0px",
                      boxSizing: "content-box",
                      maxWidth: "100%",
                      verticalAlign: "middle",
                      margin: "2px",
                      height: "20px",
                      width: "20px",
                    }}
                  />{" "}

                  <svg
                    className="plc-svgIcon resIndicatorPrice__icon"
                    height="24"
                    width="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", color: "#aaabad" }}
                  >
                    <path
                      d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>{" "}

                  <Text
                    className="resIndicatorPrice__currency"
                    style={{
                      boxSizing: "border-box",
                      marginBottom: "0px",
                      marginTop: "0px",
                      color: "#aaabad",
                      fontFamily: "Inter",
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "32px",
                      wordBreak: "break-word",
                      whiteSpace: "nowrap",
                    }}
                  >
                    USDT
                  </Text>
                </Box>
              </div>
            </div>

            {/* Second card */}
            <div
            >
              {/* Card Body */}
              <div
                className="box-border border-2 border-gray-300 rounded-md p-[40px] flex items-center justify-center flex flex-col lg:grid gap-8 grid-cols-[max-content, 1fr]"
              // style={{
              //   boxSizing: "border-box",
              //   border: "1px solid #e9eaea",
              //   borderRadius: "4px",
              //   padding: "16px",
              //   WebkitBoxAlign: "center",
              //   alignItems: "center",
              //   display: "grid",
              //   WebkitBoxPack: "center",
              //   justifyContent: "center",
              //   gap: "32px",
              //   gridTemplateColumns: "max-content 1fr",
              // }}
              >
                {/* indicator_Guage */}
                <Box
                  className="resIndicatorGauge__gauge"
                  style={{ boxSizing: "border-box", textAlign: "center" }}
                >
                  <svg
                    height="130"
                    width="232"
                    fill="none"
                    viewBox="0 0 232 130"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box" }}
                  >
                    <circle
                      cx="116"
                      cy="115"
                      fill="#E9EAEA"
                      r="10"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      clipRule="evenodd"
                      d="m118.693 120.489 63.782-35.106-67.895 23.911a6.018 6.018 0 0 0-1.265.446l-.157.055.01.018a6 6 0 1 0 5.516 10.657l.009.019Z"
                      fill="#55575C"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <circle
                      cx="116"
                      cy="115"
                      fill="#fff"
                      r="2"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M10.036 118.775A106 106 0 1 1 222 115.889"
                      stroke="#E9EAEA"
                      strokeLinecap="round"
                      strokeWidth="20"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M222 116a106.003 106.003 0 0 0-54.934-92.888"
                      stroke="#1DC08A"
                      strokeLinecap="round"
                      strokeWidth="16"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M168.999 24.201A105.997 105.997 0 0 0 25.045 61.565a106 106 0 0 0-15.022 52.215"
                      stroke="#E0CA08"
                      strokeLinecap="round"
                      strokeWidth="16"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M63 24.201a106 106 0 0 0-52.977 94.019"
                      stroke="#FF6A69"
                      strokeLinecap="round"
                      strokeWidth="16"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M225 115a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      fill="#fff"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </Box>{" "}

                {/* Indicator-guage_Legend */}
                <Box
                  className="box-border m-0"
                >
                  {/* Green */}
                  <Box
                    className="box-border gap-[8px] flex items-center"
                  >
                    <div
                      className="box-border rounded-full h-[8px] w-[8px] mr-[8px] bg-green-500"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-sm leading-6"
                    >
                      Green:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-sm leading-6 font-medium"
                    >
                      Price is Good
                    </p>
                  </Box>

                  {/* Yellow */}
                  <Box
                    className="box-border gap-[8px] flex items-center mt-[8px]"
                  >
                    <div
                      className="box-border rounded-full h-[8px] w-[8px] mr-[8px] bg-yellow-400"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-sm leading-6"
                    >
                      Yellow:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-sm leading-6 font-medium"
                    >
                      50% freezing
                    </p>
                  </Box>

                  {/* Red */}
                  <Box
                    className="box-border gap-[8px] flex items-center mt-[8px]"
                  >
                    <div
                      className="box-border rounded-full h-[8px] w-[8px] mr-[8px] bg-red-500"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-sm leading-6"
                    >
                      Red:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-sm leading-6 font-medium"
                    >
                      100% freezing
                    </p>
                  </Box>

                </Box>
              </div>

            </div>
          </Wrapper>

        </Container>

        {/* Card: Availble balance */}
        <Card
          className="box-border rounded-md overflow-hidden p-4 bg-white shadow-md flex flex-col justify-between relative"
        >
          <CardHeader
            className="box-border flex items-center justify-between mb-[16px]"
          >
            <h1
              className="box-border mb-0 mt-0 text-gray-800 font-inter text-sm font-medium leading-6"
            >
              BTCA Available Balance
            </h1>


            <svg
              className="box-border text-gray-400 cursor-pointer inline-flex align-baseline"
              height="20"
              width="20"
              content="60% of FARMING PROFIT"
              fill="currentColor"
              tabIndex="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.01 9.01 0 01-9 9zm0-12a1 1 0 00-1 1v7a1 1 0 102 0v-7a1 1 0 00-1-1zm1-2a1 1 0 11-2 0 1 1 0 012 0z"
                fill="currentColor"
                fillRule="evenodd"
                style={{ boxSizing: "border-box" }}
              />
            </svg>
            <Box
              className="box-border rounded-md px-1 py-0.5 text-gray-400 font-inter text-xs font-medium leading-5 bg-gray-100 absolute top-2 right-2"
            >
              {"60%"}
            </Box>
          </CardHeader>

          <CardBody
            className="box-border gap-[8px] text-gray-800 font-inter text-base font-bold leading-6 break-words grid grid-cols-3"
          >
            <Image
              className="border-0 box-content max-w-full align-middle m-[2px] w-[20px]"
              alt="BTCA"
              src='/logo.png'
              >
            </Image>

            <Text
              className="box-border mb-0 mt-0"
            >
              0
            </Text>


            <Text
              className="box-border mb-0 mt-0 text-gray-400 whitespace-nowrap text-base"
            >
              BTCA
            </Text>
          </CardBody>

          <CardFooter>
            <a
              className="box-border text-base font-inter break-words align-center cursor-pointer inline-flex justify-center leading-none relative text-center bg-purple-700 text-white py-2 px-4 min-h-10 w-full mt-4 rounded-md outline-none transition-colors transition-bg duration-300"
              href="#"
            >
              {"Payout"}
            </a>
          </CardFooter>
        </Card>

        {/* Card: Upgrade balance */}
        <Card
          className="box-border rounded-md overflow-hidden p-[16px] bg-white shadow-sm flex flex-col justify-between relative"
        >
          <CardHeader
            className="box-border flex items-center justify-between mb-[16px]"
          >
            <h1
              className="box-border mb-0 mt-0 text-[#2b2d33] font-inter text-base font-medium leading-5"
            >
              BTCA Upgrade Balance
            </h1>


            <svg
              className="box-border text-[#aaabad] cursor-pointer inline-flex align-bottom"
              height="20"
              width="20"
              content="60% of FARMING PROFIT"
              fill="currentColor"
              tabIndex="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.01 9.01 0 01-9 9zm0-12a1 1 0 00-1 1v7a1 1 0 102 0v-7a1 1 0 00-1-1zm1-2a1 1 0 11-2 0 1 1 0 012 0z"
                fill="currentColor"
                fillRule="evenodd"
                style={{ boxSizing: "border-box" }}
              />
            </svg>
            <Box
              className="box-border rounded-md px-1 py-0 text-[#aaabad] font-inter text-xs font-medium leading-5 bg-[#f4f4f4] absolute right-[4px] top-[4px]"
            >
              {"40%"}
            </Box>
          </CardHeader>

          <CardBody
            className="box-border gap-8 text-[#2b2d33] font-inter text-lg font-bold leading-6 break-words grid grid-cols-3 auto"
          >
            <Image
              className="border-0 content-box max-w-full align-middle m-[2px] w-[20px]"
              alt="BTCA"
              src='/logo.png'
              >

            </Image>

            <Text
              className="box-border mb-0 mt-0"

            >
              0
            </Text>


            <Text
              className="box-border mb-0 mt-0 text-[#aaabad] whitespace-nowrap text-base"
            >
              BTCA
            </Text>
          </CardBody>

        </Card>

        {/* Card: Total farmed amount */}
        <Card
          className="box-border rounded-md overflow-hidden p-[16px] bg-white shadow-md flex flex-col justify-between relative"
        >
          <CardHeader
            className="box-border flex items-center justify-between mb-[16px]"
          >
            <h1
              className="box-border mb-0 mt-0 text-gray-700 font-inter text-base font-medium leading-6"
            >
              Total Framed Amount
            </h1>


            <svg
              className="box-border text-gray-400 cursor-pointer inline-flex align-bottom"
              height="20"
              width="20"
              content="60% of FARMING PROFIT"
              fill="currentColor"
              tabIndex="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                clipRule="evenodd"
                d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.01 9.01 0 01-9 9zm0-12a1 1 0 00-1 1v7a1 1 0 102 0v-7a1 1 0 00-1-1zm1-2a1 1 0 11-2 0 1 1 0 012 0z"
                fill="currentColor"
                fillRule="evenodd"
                style={{ boxSizing: "border-box" }}
              />
            </svg>
          </CardHeader>

          <CardBody
            className="box-border gap-[8px] text-gray-700 font-inter text-lg font-bold leading-6 break-words grid grid-cols-3"
          >
            <Image
              className="border-0 box-content max-w-full align-middle m-[2px] w-[20px]"
              alt="BTCA"
              src='/logo.png'
              >

            </Image>

            <Text
              className="box-border mb-0 mt-0"
            >
              0
            </Text>


            <Text
              className="box-border mb-0 mt-0 text-[#aaabad] whitespace-nowrap text-base"
            >
              BTCA
            </Text>
          </CardBody>

        </Card>

        {/* Card: Farm/minting status */}
        <Container
          className="box-border rounded-md overflow-hidden flex flex-col justify-between relative bg-[#f8f8f8] border-1 border-outline-none  p-[2px] lg:grid grid-cols-2 col-span-2 row-span-3 gap-4"
          // style={{
          //   boxSizing: "border-box",
          //   borderRadius: "4px",
          //   overflow: "hidden",
          //   WebkitBoxOrient: "vertical",
          //   WebkitBoxDirection: "normal",
          //   flexDirection: "column",
          //   WebkitBoxPack: "justify",
          //   justifyContent: "space-between",
          //   position: "relative",
          //   background: "#f8f8f8",
          //   outline: "1px solid #e9eaea",
          //   backgroundColor: "",
          //   boxShadow: "none",
          //   gridColumn: "1 / -1",
          //   gridArea: "2 / 2 / 5 / 4",
          //   gap: "16px",
          //   padding: "8px",
          //   display: "grid",
          //   gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
          // }}
        >
          {" "}

          {/* Farm Status */}
          <Wrapper
            className="box-border rounded-md overflow-hidden flex flex-col justify-between relative bg-[#f8f8f8] border-none outline-none px-4 py-4"
          >
            <Box
              className="box-border flex items-center justify-between mb-[6px]"
            >
              <h1
                className="box-border mb-0 mt-0 text-[#2b2d33] font-inter text-base font-medium leading-6"
              >
                <span style={{ boxSizing: "border-box", outline: "none" }}>
                  Farm Status
                </span>{" "}
              </h1>{" "}
            </Box>{" "}

            {/* Status guage */}
            <svg
              className="box-border mb-16 w-full"
              height="207"
              width="232"
              fill="none"
              viewBox="0 0 232 207"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.815 150.781c3.013 0 5.584-.668 7.711-2.004a16.134 16.134 0 0 0 5.185-5.208c1.33-2.227 2.305-4.764 2.925-7.613.621-2.85.931-5.833.931-8.949l-.931-48.75h25.927l.931 48.75c0 6.589-.842 12.777-2.527 18.565-1.684 5.698-4.299 10.64-7.844 14.825-3.546 4.185-8.022 7.479-13.429 9.884-5.318 2.404-11.611 3.606-18.879 3.606-7.535 0-14.005-1.247-19.412-3.74-5.318-2.582-9.706-6.01-13.163-10.284-3.457-4.274-5.983-9.216-7.578-14.825-1.596-5.699-2.393-11.709-2.393-18.031v-48.75h25.926v48.75c0 3.116.31 6.144.931 9.082.62 2.849 1.595 5.387 2.925 7.613 1.329 2.137 3.013 3.873 5.052 5.209 2.127 1.246 4.698 1.87 7.712 1.87Zm5-72.524h45.656l-22.828-24.35"
                fill="var(--primary-color)"
                opacity="0.1"
                style={{ boxSizing: "border-box" }}
              />{" "}
              <g style={{ boxSizing: "border-box" }}>
                <path
                  clipRule="evenodd"
                  d="M205.977 106.223a.4.4 0 0 1-.363.439l-2.496.232a.391.391 0 0 1-.075-.777l2.493-.254a.401.401 0 0 1 .441.36Zm-1.296-8.808c.044.219-.1.43-.318.473l-2.461.475a.39.39 0 0 1-.151-.766l2.456-.497a.401.401 0 0 1 .474.315Zm-2.157-8.637a.403.403 0 0 1-.27.503l-2.401.715a.39.39 0 0 1-.227-.748l2.394-.737a.402.402 0 0 1 .504.267Zm-6.81-16.426a.404.404 0 0 1-.167.546l-2.213 1.173a.392.392 0 0 1-.37-.69l2.202-1.192a.404.404 0 0 1 .548.163Zm-4.584-7.631a.404.404 0 0 1-.113.56l-2.087 1.384a.391.391 0 0 1-.435-.651l2.074-1.402a.403.403 0 0 1 .561.109Zm-5.308-7.147a.404.404 0 0 1-.058.57l-1.941 1.58a.392.392 0 0 1-.498-.605l1.927-1.598a.404.404 0 0 1 .57.053ZM173.247 45a.404.404 0 0 1 .054.569l-1.598 1.927a.392.392 0 0 1-.606-.497l1.581-1.942a.404.404 0 0 1 .569-.057Zm-7.037-4.748a.403.403 0 1 0-.67-.448l-1.384 2.087a.392.392 0 0 0 .651.436l1.403-2.075Zm-7.741-5.145c.197.106.27.351.163.548l-1.192 2.202a.39.39 0 0 1-.69-.37l1.173-2.212a.402.402 0 0 1 .546-.167Zm-16.426-6.81c.213.064.333.29.267.504l-.737 2.394a.39.39 0 0 1-.748-.227l.715-2.4a.403.403 0 0 1 .503-.271Zm-8.637-2.157a.4.4 0 0 1 .315.475l-.497 2.456a.39.39 0 0 1-.766-.152l.475-2.46a.402.402 0 0 1 .473-.32Zm-8.808-1.296c.222.021.383.22.36.441l-.254 2.494a.391.391 0 0 1-.777-.076l.232-2.496a.402.402 0 0 1 .439-.363Zm-17.349.363a.401.401 0 1 0-.799.078l.253 2.494a.39.39 0 0 0 .777-.076l-.231-2.496Zm-9.247.933c.219-.043.43.1.473.319l.475 2.46a.39.39 0 0 1-.766.152l-.498-2.456a.402.402 0 0 1 .316-.475Zm-8.637 2.157a.403.403 0 0 1 .502.27l.716 2.401a.39.39 0 0 1-.748.227l-.737-2.394a.403.403 0 0 1 .267-.504Zm-16.426 6.81a.403.403 0 0 1 .546.168l1.173 2.212a.391.391 0 0 1-.69.37l-1.193-2.202a.403.403 0 0 1 .164-.547Zm-7.632 4.584a.403.403 0 0 1 .56.113l1.384 2.087a.391.391 0 0 1-.65.436l-1.403-2.075a.403.403 0 0 1 .11-.56ZM58.161 45a.403.403 0 0 1 .569.057L60.31 47a.391.391 0 0 1-.605.497l-1.598-1.927a.403.403 0 0 1 .054-.57ZM45.586 57.574a.403.403 0 0 1 .57-.053l1.927 1.597a.392.392 0 0 1-.498.606l-1.941-1.58a.403.403 0 0 1-.058-.57Zm-5.308 7.147a.403.403 0 0 1 .56-.11l2.075 1.403a.391.391 0 0 1-.436.65l-2.086-1.383a.403.403 0 0 1-.113-.56Zm-4.584 7.631a.403.403 0 0 1 .547-.163l2.203 1.192a.391.391 0 0 1-.37.69l-2.213-1.173a.403.403 0 0 1-.167-.546Zm-6.81 16.426a.403.403 0 0 1 .503-.267l2.395.737a.39.39 0 0 1-.227.748l-2.4-.715a.403.403 0 0 1-.272-.503Zm-2.157 8.637a.402.402 0 0 1 .474-.315l2.456.497a.39.39 0 0 1-.151.767l-2.46-.476a.402.402 0 0 1-.32-.473Zm-1.297 8.808a.402.402 0 0 1 .442-.36l2.493.254a.39.39 0 0 1-.075.777l-2.496-.232a.402.402 0 0 1-.364-.439Zm.364 17.349a.403.403 0 1 0 .078.8l2.493-.254a.39.39 0 0 0-.075-.777l-2.496.231Zm.933 9.247a.403.403 0 0 1 .318-.473l2.46-.475a.39.39 0 0 1 .152.767l-2.456.497a.402.402 0 0 1-.474-.316Zm2.156 8.637a.403.403 0 0 1 .271-.502l2.401-.716a.39.39 0 0 1 .227.748l-2.395.738a.403.403 0 0 1-.504-.268Zm6.978 15.88a.403.403 0 1 0 .38.71l2.203-1.192a.392.392 0 0 0-.37-.69l-2.213 1.172Zm4.417 8.178a.403.403 0 0 1 .113-.56l2.086-1.384a.391.391 0 0 1 .436.651l-2.074 1.402a.404.404 0 0 1-.561-.109Zm5.308 7.146a.404.404 0 0 1 .058-.569l1.941-1.58a.392.392 0 0 1 .498.605l-1.928 1.598a.403.403 0 0 1-.569-.054Zm140.236 0a.404.404 0 0 1-.57.054l-1.927-1.598a.391.391 0 0 1 .498-.605l1.941 1.58a.405.405 0 0 1 .058.569Zm4.747-7.037a.403.403 0 1 0 .448-.669l-2.087-1.384a.391.391 0 0 0-.435.651l2.074 1.402Zm5.145-7.741a.404.404 0 0 1-.548.164l-2.202-1.192a.392.392 0 0 1 .37-.69l2.213 1.172c.197.105.272.35.167.546Zm6.81-16.426a.402.402 0 0 1-.504.268l-2.394-.738a.39.39 0 0 1 .227-.748l2.401.716a.403.403 0 0 1 .27.502Zm2.157-8.637a.402.402 0 0 1-.474.316l-2.456-.497a.39.39 0 0 1 .151-.767l2.461.475a.403.403 0 0 1 .318.473Zm1.296-8.808a.402.402 0 0 1-.441.361l-2.43-.248a.453.453 0 0 1-.405-.496.325.325 0 0 1 .354-.293l2.559.238a.4.4 0 0 1 .363.438Z"
                  fill="#D5D5D6"
                  fillRule="evenodd"
                  opacity=".6"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ boxSizing: "border-box" }}
                />{" "}
                <path
                  clipRule="evenodd"
                  d="M206.408 114.704a.846.846 0 0 1-.856.844l-4.953-.045a.798.798 0 0 1-.788-.799c0-.437.351-.795.788-.799l4.953-.045a.846.846 0 0 1 .856.844Zm-6.883-34.72a.842.842 0 0 1-.465 1.1l-4.603 1.86a.79.79 0 0 1-1.025-.434.79.79 0 0 1 .418-1.031l4.567-1.945a.841.841 0 0 1 1.108.45Zm-19.684-29.417a.842.842 0 0 1-.008 1.196l-3.541 3.476a.792.792 0 0 1-1.115-.008.792.792 0 0 1-.008-1.115l3.476-3.541a.841.841 0 0 1 1.196-.008Zm-29.416-19.684c.432.18.632.677.449 1.108l-1.945 4.567a.79.79 0 0 1-1.031.418.79.79 0 0 1-.433-1.025l1.858-4.604a.842.842 0 0 1 1.102-.464ZM115.704 24c.471 0 .849.385.844.856l-.045 4.953a.797.797 0 0 1-.799.788.797.797 0 0 1-.799-.788l-.045-4.953a.845.845 0 0 1 .844-.856Zm-34.72 6.883a.841.841 0 0 1 1.1.465l1.86 4.603a.791.791 0 0 1-.434 1.025.79.79 0 0 1-1.031-.418l-1.945-4.567a.84.84 0 0 1 .45-1.108ZM51.566 50.567a.842.842 0 0 1 1.196.008l3.476 3.54c.304.31.3.809-.008 1.116a.793.793 0 0 1-1.115.008l-3.541-3.476a.842.842 0 0 1-.008-1.196ZM31.883 79.983a.84.84 0 0 1 1.107-.449l4.568 1.945a.79.79 0 0 1 .418 1.031.791.791 0 0 1-1.025.433l-4.604-1.858a.841.841 0 0 1-.464-1.102Zm-6.027 33.877a.845.845 0 1 0 0 1.688l4.953-.045a.797.797 0 0 0 .788-.799.797.797 0 0 0-.788-.799l-4.953-.045Zm6.027 35.565a.842.842 0 0 1 .464-1.102l4.604-1.858a.79.79 0 0 1 1.025.433.79.79 0 0 1-.418 1.031l-4.568 1.945a.841.841 0 0 1-1.107-.449Zm19.684 29.416a.841.841 0 0 1 .008-1.196l3.54-3.476a.792.792 0 0 1 1.116.008.792.792 0 0 1 .008 1.115l-3.476 3.541a.842.842 0 0 1-1.196.008Zm128.274 0a.842.842 0 0 1-1.196-.008l-3.476-3.541a.792.792 0 0 1 .008-1.115.792.792 0 0 1 1.115-.008l3.541 3.476a.842.842 0 0 1 .008 1.196Zm19.684-29.416a.841.841 0 0 1-1.108.449l-4.567-1.945a.791.791 0 0 1-.419-1.031.791.791 0 0 1 1.026-.433l4.603 1.858a.842.842 0 0 1 .465 1.102Z"
                  fill="#D5D5D6"
                  fillRule="evenodd"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ boxSizing: "border-box" }}
                />
              </g>{" "}
              <g style={{ boxSizing: "border-box" }}>
                <circle
                  cx="116"
                  cy="115"
                  fill="#e9eaea"
                  r="10"
                  style={{ boxSizing: "border-box" }}
                />{" "}
                <path
                  clipRule="evenodd"
                  d="m111.5 111-46.965 55.631 54.817-46.654a6.063 6.063 0 0 0 1.022-.869l.126-.108-.015-.014a6 6 0 1 0-8.97-7.972L111.5 111Z"
                  fill="#55575c"
                  fillRule="evenodd"
                  transform="rotate(0 116 115)"
                  style={{ boxSizing: "border-box" }}
                />{" "}
                <circle
                  cx="116"
                  cy="115"
                  fill="#e9eaea"
                  r="2"
                  style={{ boxSizing: "border-box" }}
                />
              </g>{" "}
              <path
                d="M41 191A106 106 0 1 1 191 191"
                stroke="#e9eaea"
                strokeLinecap="round"
                strokeWidth="20"
                style={{ boxSizing: "border-box" }}
              />{" "}
              <path
                d="M41 191A106 106 0 0 1 41.04668119422594 190.95331880577402"
                stroke="url(#gauge)"
                strokeLinecap="round"
                strokeWidth="16"
                style={{ boxSizing: "border-box" }}
              />{" "}
              <path
                id="gauge-anim"
                d="M41 191A106 106 0 0 1 41.04668119422594 190.95331880577402"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="16"
                style={{
                  boxSizing: "border-box",
                  animation:
                    "2s ease 0s infinite normal none running anim-data-v-269d2259",
                }}
              />{" "}
              <circle
                cx="41.04668119422594"
                cy="190.95331880577402"
                fill="#fff"
                r="3"
                style={{ boxSizing: "border-box" }}
              />{" "}
              <defs style={{ boxSizing: "border-box" }}>
                <radialgradient
                  id="gauge"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(163.08315 -.52777 1.204 372.04105 34.722 198.861)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                  style={{ boxSizing: "border-box" }}
                >
                  <stop
                    offset="0"
                    stopColor="#ADC5EC"
                    style={{ boxSizing: "border-box" }}
                  />{" "}
                  <stop
                    offset="1"
                    stopColor="#0D5BDB"
                    style={{ boxSizing: "border-box" }}
                  />
                </radialgradient>
              </defs>
            </svg>{" "}

            {/* Buttons: increase license & top up my farm */}
            <div
              className="box-border gap-[8px] grid"
            >
              <button
                className="box-border bg-none border-0 m-0 overflow-visible antialiased subpixel-antialiased leading-normal align-middle cursor-pointer inline-flex justify-center items-center relative text-center font-inter text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 ease-in-out text-base break-words rounded-md outline-none py-[2px] px-[4px] min-h-[10px]"
              >
                {"Increase License"}
              </button>{" "}
              <button
                className="box-border bg-none border-0 m-0 overflow-visible antialiased subpixel-antialiased leading-normal align-middle cursor-not-allowed inline-flex justify-center items-center relative text-center text-gray-700 font-inter text-base break-words rounded-md outline-none py-[2px] px-[4px] min-h-[10px] transition-colors duration-300 ease-in-out opacity-50"
              >
                {"Top Up My Farm"}
              </button>
            </div>{" "}


            <Card
              className="box-border rounded-md overflow-hidden p-[10px] flex flex-col justify-between relative bg-gray-300 shadow-none mt-[24px]"
            >
              <CardHeader
                className="box-border flex items-center justify-between mb-[10px]"
              >
                <p
                  className="box-border mb-0 mt-0 text-[#2b2d33] font-inter text-base font-medium leading-5"
                >
                  <span 
                  className="box-border outline-none"
                  >
                    FROZEN
                  </span>{" "}
                </p>{" "}
              </CardHeader>{" "}

              <CardBody
                className="box-border gap-[8px] text-gray-700 font-inter text-base font-bold leading-6 break-words grid grid-cols-[24px,1fr,auto]"
                // style={{
                //   boxSizing: "border-box",
                //   gap: "8px",
                //   color: "#2b2d33",
                //   fontFamily: "Inter",
                //   fontSize: "16px",
                //   fontWeight: 700,
                //   lineHeight: "24px",
                //   wordBreak: "break-word",
                //   display: "grid",
                //   gridTemplateColumns: "24px 1fr auto",
                // }}
              >
                <img
                  className="border-0 box-content max-w-full align-middle m-[2px] h-[20px] w-[20px"
                  alt="BTCA"
                  src='/logo.png'
                />{" "}
                <p
                  className="box-border mb-0 mt-0"
                >
                  0
                </p>{" "}
                <p
                  className="box-border mb-0 mt-0 text-[#aaabad] whitespace-nowrap"
                >
                  BTCA
                </p>
              </CardBody>

            </Card>
          </Wrapper>{" "}

          {/* MaxLoad Status */}
          <Wrapper
            className="box-border rounded-md overflow-hidden p-[16px] flex flex-col justify-between relative bg-[#4B0F70] shadow-none"
          >

            {/* Header: maxload status */}
            <Box
              className="box-border flex items-center justify-between mb-[24px]"
            >
              <p
                className="box-border mb-0 mt-0 font-inter text-base font-medium leading-5 text-white"
              >
                <span 
                className="box-border outline-none"
                >
                  MAX LOAD Status
                </span>{" "}
              </p>{" "}
            </Box>{" "}

            {/* Load status widgets cont */}
            <Container
              className="box-border gap-[16px] grid flex-1"
            >
              {/* Total MaxLoad Card */}
              <Card
                className="box-border rounded-md overflow-hidden shadow-sm flex flex-col justify-between relative bg-opacity-12"
              >
                <CardHeader
                  className="box-border flex items-center justify-between"
                >
                  <p
                    className="box-border mb-0 mt-0 font-inter text-base font-medium leading-6 text-black opacity-50"
                  >
                    <span
                    className="box-border outline-none"
                    >
                      Total Max Load
                    </span>{" "}
                  </p>{" "}
                </CardHeader>{" "}

                <CardBody>
                  <p
                    className="box-border mb-0 mt-0 font-inter text-base font-bold leading-6 break-words flex min-w-0 text-black gap-[8px]"
                  >
                    0{" "}
                    <span
                      className="box-border outline-none whitespace-nowrap opacity-50 text-black ml-auto mr-0"

                    >
                      BTCA
                    </span>
                  </p>
                </CardBody>
              </Card>{" "}

              {/* Available Maxload */}
              <Card
                className="box-border rounded-md overflow-hidden shadow-sm flex flex-col justify-between relative bg-opacity-12 bg-white"
              >
                <CardHeader
                  className="box-border flex items-center justify-between"
                >
                  <p
                    className="box-border mb-0 mt-0 font-inter text-base font-medium leading-5 text-black opacity-50"
                  >
                    <span
                     className="box-border outline-none"
                    >
                      Available max load
                    </span>{" "}
                  </p>{" "}
                </CardHeader>{" "}

                <CardBody>
                  <p
                    className="box-border mb-0 mt-0 font-inter text-xl font-bold leading-6 break-words flex min-w-0 text-white gap-[8px]"

                  >
                    0{" "}
                    <span
                      className="box-border outline-none whitespace-nowrap opacity-50 text-black ml-auto mr-0"
                    >
                      BTCA
                    </span>
                  </p>
                </CardBody>
              </Card>{" "}

              {/* Used MaxLoad */}
              <Card
                className="box-border rounded-md overflow-hidden shadow-sm flex flex-col justify-between relative bg-opacity-12"
              >
                <CardHeader
                  className="box-border flex items-center justify-between"
                >
                  <p
                    className="box-border mb-0 mt-0 font-inter text-base font-medium leading-5 text-black opacity-50"
                  >
                    <span
                    className="box-border outline-none"
                    >
                      Used Max Load
                    </span>{" "}
                  </p>{" "}
                </CardHeader>{" "}

                <CardBody>
                  <p
                    className="box-border mb-0 mt-0 font-inter text-black text-base font-bold leading-6 break-words flex min-w-0 gap-2"
                  >
                    0{" "}
                    <span
                      className="box-border outline-none whitespace-nowrap opacity-50 text-black ml-auto mr-0"
                    >
                      BTCA
                    </span>
                  </p>
                </CardBody>
              </Card>
            </Container>

          </Wrapper>
        </Container>

      </Container>
    </section>
  )
}

export default Indicator