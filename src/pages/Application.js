import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"
import Main from "../components/Main";
import { Box, Card, CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";




const Application = () => {

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
              <Container
                className="box-border flex flex-col flex-grow"
              >
                {" "}
                <div className="box-border" >
                  <div
                    className="box-border gap-12 grid grid-cols-[1fr,max-content] mb-6"
                  >
                    {/* Heading */}
                    <Wrapper className="box-border">
                      <h1
                        className="box-border mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6"
                      >
                        Applications
                      </h1>{" "}
                      <p
                        className="box-border mb-0 text-gray-600 text-base leading-5 break-words mt-2 font-inter"
                      >
                        BTCA Technologies
                      </p>
                    </Wrapper>{" "}
                  </div>{" "}
                </div>

                <Wrapper
                  className="box-border mt-6 rounded-md bg-white shadow-xl"
                >
                  <Box
                    className="box-border p-[24px]"
                  >
                    <p
                      className="box-border mb-0 mt-0 text-gray-600 text-base leading-5 break-words font-inter"
                    >
                      {
                        "Download your BTCA Wallet and BTCA Farm to make transactions and minting PLCUX!"
                      }
                    </p>{" "}

                    {/* App cards */}
                    <Box
                      className="box-border mt-10 flex flex-col lg:grid grid-cols-2 gap-x-8 "
                    >
                      {/* Card 1 */}
                      <Card
                        className="px-0.5 lg:px-4 shadow-none"
                      >
                        <CardHeader
                          className="box-border gap-4 grid grid-cols-[auto,1fr]"
                        >
                          <Image src='/logo.png' alt='BTCA_FARM LOGO' className="border-0 box-content max-w-full align-middle h-14 w-14" />
                          <Box>
                            <h6
                              className="box-border mb-0 mt-0 text-[#2b2d33] text-lg font-bold leading-6 break-words flex items-center uppercase font-inter"
                            >
                              {"BTCA Wallet"}
                              <span
                                className="box-border outline-none border border-[#55575c] rounded-[2px] px-2 py-2 text-[#2b2d33] text-xs font-medium leading-4 ml-2"
                              >
                                4+
                              </span>
                            </h6>{" "}
                            <p
                              className="box-border mb-0 font-inter text-[#0078d2] text-base leading-5 break-words mt-2"
                            >
                              PLATINEXLLC
                            </p>
                          </Box>

                        </CardHeader>

                        <CardBody
                          className="box-border border-t border-[#e9eaea] gap-8 pt-6 pb-2 flex overflow-y-auto mt-6">

                          {/* mockup 1 */}
                          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                            <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                            </div>
                          </div>

                          {/* mockup 2 */}
                          <div class="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                            <div class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                            </div>
                          </div>

                          {/* mockup 3 */}
                          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                            </div>
                          </div>

                        </CardBody>

                        <CardFooter
                          className="box-border border-t border-[#e9eaea] mt-2 pt-6 lg:grid grid-cols-2 gap-2 lg:gap-6"
                        >
                          <div
                            className="bg-black px-0.5 lg:px-4 py-2 rounded-2xl"
                          >
                            <a
                              className="box-border text-no-underline text-current rounded-[4px] bg-[rgb(51, 51, 51)] inline-flex h-[48px] min-w-[120px] lg:min-w-[140px]"
                              href="'#"
                              target="_blank"
                              style={{
                                backgroundPosition: "50% center",
                                backgroundRepeat: "no-repeat",
                                backgroundImage:
                                  'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03MC4yOTIgMjUuNDc4Yy0xLjY3NyAwLTIuOTA0LS44MjktMy4wNDYtMi4wOWgtMS45NTFjLjEyMyAyLjMgMi4wMyAzLjc1NiA0Ljg1NiAzLjc1NiAzLjAyIDAgNC45MTgtMS40OSA0LjkxOC0zLjg3IDAtMS44Ni0xLjA4Ni0yLjkxLTMuNy0zLjUyNmwtMS40MDQtLjM0NGMtMS42NDItLjQwNS0yLjMxMy0uOTM1LTIuMzEzLTEuODM0IDAtMS4xMjggMS4wNTEtMS45MDQgMi41ODctMS45MDQgMS41MzYgMCAyLjU4Ny43NjcgMi43MDIgMi4wMzZoMS45MjRjLS4wNjItMi4xOTUtMS45MDctMy43MDItNC42LTMuNzAyLTIuNzE5IDAtNC42MzQgMS41MDgtNC42MzQgMy43MDIgMCAxLjc3MyAxLjA4NiAyLjg2NSAzLjQyNSAzLjQzbDEuNjUuMzk2YzEuNjUyLjQwNSAyLjM0OS45OTcgMi4zNDkgMS45ODQgMCAxLjEzNy0xLjE1NiAxLjk2Ni0yLjc2MyAxLjk2NnoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjIyMyAyMy40OTRoNC44NTVsMS4xNjYgMy40MzhoMi4wOTFsLTQuNTk5LTEyLjcySDMzLjZMMjkgMjYuOTMyaDIuMDU3bDEuMTY2LTMuNDM4em00LjM1Mi0xLjU4N2gtMy44NWwxLjktNS41OGguMDUybDEuODk4IDUuNTh6bTkuODE3IDUuMTIzYzIuMzMxIDAgMy44NzYtMS44NTMgMy44NzYtNC43MzQgMC0yLjg3NC0xLjU1NC00LjczNS0zLjkxMS00LjczNWEzLjI5OCAzLjI5OCAwIDAwLTIuOTU4IDEuNjRoLS4wMzV2LTEuNTQzSDQxLjUyVjMwaDEuOTA2di00LjU5M2guMDQ1YTMuMTQ2IDMuMTQ2IDAgMDAyLjkyMiAxLjYyMnptLS41MzgtNy44NDZjMS40ODMgMCAyLjQ1NCAxLjIzNCAyLjQ1NCAzLjExMiAwIDEuODk0LS45NzEgMy4xMi0yLjQ1NCAzLjEyLTEuNDU3IDAtMi40MzctMS4yNTItMi40MzctMy4xMiAwLTEuODUyLjk4LTMuMTEyIDIuNDM3LTMuMTEyem0xNC42MzYgMy4xMTJjMCAyLjg4MS0xLjU0NCA0LjczMy0zLjg3NSA0LjczM2EzLjE1MiAzLjE1MiAwIDAxLTIuOTIyLTEuNjIyaC0uMDQ1VjMwaC0xLjkwNlYxNy42NThoMS44NDV2MS41NDNoLjAzNWEzLjI5MyAzLjI5MyAwIDAxMi45NTgtMS42NGMyLjM1NyAwIDMuOTEgMS44NiAzLjkxIDQuNzM1em0tMS45NTkgMGMwLTEuODc4LS45NzEtMy4xMTItMi40NTQtMy4xMTItMS40NTcgMC0yLjQzNiAxLjI2LTIuNDM2IDMuMTEyIDAgMS44NjguOTggMy4xMiAyLjQzNiAzLjEyIDEuNDgzIDAgMi40NTQtMS4yMjYgMi40NTQtMy4xMnoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBkPSJNNzkuMTgzIDE1LjQ2M3YyLjE5NWgxLjc2NnYxLjUwOGgtMS43NjZ2NS4xMTJjMCAuNzk0LjM1MyAxLjE2NSAxLjEzIDEuMTY1LjIxLS4wMDQuNDE5LS4wMTkuNjI3LS4wNDV2MS40OTljLS4zNS4wNjUtLjcwNC4wOTUtMS4wNi4wODgtMS44OCAwLTIuNjEzLS43MDUtMi42MTMtMi41MDR2LTUuMzE1aC0xLjM1di0xLjUwOGgxLjM1di0yLjE5NWgxLjkxNnoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg2LjM3NyAxNy41NDRjLTIuNjg0IDAtNC40MDUgMS44MzQtNC40MDUgNC43NTIgMCAyLjkyNSAxLjcwNCA0Ljc1MSA0LjQwNSA0Ljc1MSAyLjcwMiAwIDQuNDA2LTEuODI2IDQuNDA2LTQuNzUyIDAtMi45MTctMS43MTMtNC43NS00LjQwNi00Ljc1em0wIDEuNTY5YzEuNTQ1IDAgMi40NjQgMS4xOCAyLjQ2NCAzLjE4MyAwIDIuMDEtLjkxOSAzLjE4MS0yLjQ2NCAzLjE4MXMtMi40NjItMS4xNzItMi40NjItMy4xODFjMC0xLjk5My45MTctMy4xODMgMi40NjItMy4xODN6IiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTkyLjM1NCAxNy42NThoMS44MTl2MS41NzloLjA0NGEyLjIxMiAyLjIxMiAwIDAxMi4yMzQtMS42NzZjLjIyIDAgLjQzOS4wMjMuNjUzLjA3MXYxLjc4YTIuNjcxIDIuNjcxIDAgMDAtLjg1Ny0uMTE0IDEuOTI1IDEuOTI1IDAgMDAtMS45MDIgMS4zMTcgMS45MTcgMS45MTcgMCAwMC0uMDg0LjgxN3Y1LjVoLTEuOTA3di05LjI3NHoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwMS44OTUgMjcuMDQ3YzIuMSAwIDMuNzQyLTEuMTU1IDMuOTk5LTIuODM5aC0xLjgxYTIuMTA2IDIuMTA2IDAgMDEtMi4xNDUgMS4zMDUgMi40MjcgMi40MjcgMCAwMS0xLjg0My0uNzUgMi40MTIgMi40MTIgMCAwMS0uNjU2LTEuODc3di0uMTE1SDEwNnYtLjY1MmMwLTIuODEyLTEuNjE2LTQuNTc1LTQuMTg2LTQuNTc1LTIuNjEyIDAtNC4yOTggMS44ODctNC4yOTggNC43OTYgMCAyLjkgMS42NzcgNC43MDcgNC4zNzkgNC43MDd6bTIuMTk4LTUuNjA3aC00LjY0NGEyLjM0NCAyLjM0NCAwIDAxMS40Ni0yLjE3OCAyLjM0IDIuMzQgMCAwMS45MDUtLjE3NSAyLjI0IDIuMjQgMCAwMTEuNjU1LjY4IDIuMjM2IDIuMjM2IDAgMDEuNjI0IDEuNjc0eiIgZmlsbD0iI0YyRjJGMiIvPjxwYXRoIGQ9Ik0xNS42MjMgMWE1Ljg0NiA1Ljg0NiAwIDAxLTEuMzIgNC4xNjggNC44NjYgNC44NjYgMCAwMS0xLjcxIDEuMzU4IDQuODMgNC44MyAwIDAxLTIuMTI3LjQ2OSA1LjU3NCA1LjU3NCAwIDAxMS4zNTYtNC4wMTNBNS44NjIgNS44NjIgMCAwMTE1LjYyMyAxem0yLjY4MSAxMC45ODZhNS45NDMgNS45NDMgMCAwMC0uNzY0IDIuODQgNS43NCA1Ljc0IDAgMDAuOTQ1IDMuMTUxQTUuNjc4IDUuNjc4IDAgMDAyMSAyMC4wOGExMy4xMjcgMTMuMTI3IDAgMDEtMS44IDMuNjkzYy0xLjA2IDEuNTk3LTIuMTcxIDMuMTU4LTMuOTM2IDMuMTg3LS44MzkuMDE5LTEuNDA1LS4yMjQtMS45OTUtLjQ3Ny0uNjE2LS4yNjQtMS4yNTctLjU0LTIuMjYxLS41NC0xLjA2NSAwLTEuNzM1LjI4NC0yLjM4MS41NTgtLjU2LjIzNy0xLjEuNDY2LTEuODYyLjQ5OC0xLjY4LjA2My0yLjk2NC0xLjcwNS00LjA2My0zLjI4Ny0yLjE5Ni0zLjIzMi0zLjkwNi05LjEwNy0xLjYxMy0xMy4xMDVhNi4zMjYgNi4zMjYgMCAwMTIuMjI0LTIuMzMzYy45My0uNTcgMS45OS0uODg5IDMuMDc4LS45MjQuOTUyLS4wMiAxLjg2Ny4zNSAyLjY2OC42NzQuNjE0LjI0OCAxLjE2LjQ3IDEuNjA5LjQ3LjM5NCAwIC45MjYtLjIxMyAxLjU0NS0uNDYuOTc3LS4zOTEgMi4xNzItLjg2OSAzLjM5LS43NC45MzIuMDMgMS44NDYuMjc3IDIuNjY3LjcyNWE2LjAxOSA2LjAxOSAwIDAxMi4wNjMgMS44NTEgNS44OSA1Ljg5IDAgMDAtMi4wMyAyLjExN3pNMzIuNTIzIDhoLTEuODg0VjIuMTgyaDEuOTQzYy41NyAwIDEuMDYuMTE2IDEuNDcuMzUuNDA4LjIzLjcyMi41NjMuOTQuOTk2LjIyLjQzMi4zMjkuOTUuMzI5IDEuNTU0IDAgLjYwNi0uMTEgMS4xMjctLjMzMiAxLjU2My0uMjIuNDM1LS41MzguNzctLjk1NSAxLjAwNi0uNDE3LjIzMy0uOTIuMzQ5LTEuNTExLjM0OXptLTEuMDA2LS43NjdoLjk1N2MuNDQ0IDAgLjgxMi0uMDgzIDEuMTA2LS4yNS4yOTMtLjE2OS41MTMtLjQxMi42NTktLjczLjE0Ni0uMzIuMjE4LS43MS4yMTgtMS4xNyAwLS40NTctLjA3Mi0uODQ0LS4yMTgtMS4xNjNhMS41NDYgMS41NDYgMCAwMC0uNjQ1LS43MjRjLS4yODYtLjE2NS0uNjQxLS4yNDctMS4wNjYtLjI0N2gtMS4wMTF2NC4yODR6bTYuNjY1Ljg1NWMtLjQwOSAwLS43NjYtLjA5NC0xLjA3LS4yODFhMS44OTYgMS44OTYgMCAwMS0uNzEtLjc4N2MtLjE3LS4zMzctLjI1NC0uNzMxLS4yNTQtMS4xODIgMC0uNDUzLjA4NS0uODQ4LjI1My0xLjE4Ny4xNjktLjM0LjQwNi0uNjAzLjcxLS43OWEyLjAwMyAyLjAwMyAwIDAxMS4wNzItLjI4MWMuNDA5IDAgLjc2Ni4wOTMgMS4wNy4yOC4zMDYuMTg4LjU0Mi40NTIuNzEuNzkuMTcuMzQuMjU0LjczNS4yNTQgMS4xODggMCAuNDUtLjA4NS44NDUtLjI1MyAxLjE4Mi0uMTY5LjMzNy0uNDA1LjYtLjcxLjc4N2EyLjAwNCAyLjAwNCAwIDAxLTEuMDcyLjI4MXptLjAwMy0uNzEzYy4yNjUgMCAuNDg1LS4wNy42Ni0uMjFhMS4yMyAxLjIzIDAgMDAuMzg2LS41NmMuMDg1LS4yMzMuMTI4LS40OS4xMjgtLjc3IDAtLjI3OC0uMDQzLS41MzQtLjEyOC0uNzY3YTEuMjUgMS4yNSAwIDAwLS4zODctLjU2NSAxLjAxIDEuMDEgMCAwMC0uNjU5LS4yMTNjLS4yNjcgMC0uNDg4LjA3LS42NjQuMjEzYTEuMjcgMS4yNyAwIDAwLS4zOS41NjUgMi4yNjQgMi4yNjQgMCAwMC0uMTI1Ljc2N2MwIC4yOC4wNDIuNTM3LjEyNS43Ny4wODYuMjMzLjIxNS40Mi4zOS41Ni4xNzYuMTQuMzk3LjIxLjY2NC4yMXpNNDEuOTc4IDhsLTEuMjg0LTQuMzY0aC44NzhsLjg1NSAzLjIwNWguMDQybC44NTgtMy4yMDVoLjg3OGwuODUyIDMuMTloLjA0M2wuODUtMy4xOWguODc3TDQ1LjU0NyA4aC0uODY3bC0uODg3LTMuMTVoLS4wNjVMNDIuODQyIDhoLS44NjR6bTYuNTA1LTIuNTlWOGgtLjg1VjMuNjM2aC44MTZ2LjcxaC4wNTRjLjEtLjIzLjI1Ny0uNDE2LjQ3MS0uNTU2LjIxNi0uMTQuNDg4LS4yMS44MTYtLjIxLjI5NyAwIC41NTcuMDYyLjc4MS4xODcuMjI0LjEyMy4zOTcuMzA3LjUyLjU1MS4xMjMuMjQ1LjE4NS41NDcuMTg1LjkwNlY4aC0uODVWNS4zMjdjMC0uMzE3LS4wODItLjU2NC0uMjQ3LS43NDItLjE2NS0uMTgtLjM5MS0uMjctLjY3OS0uMjdhMS4wNyAxLjA3IDAgMDAtLjUyNi4xMjguOTIuOTIgMCAwMC0uMzYuMzc1IDEuMjQgMS4yNCAwIDAwLS4xMzEuNTkxem00Ljc4MS0zLjIyOFY4aC0uODVWMi4xODJoLjg1em0yLjk4MSA1LjkwNmMtLjQxIDAtLjc2Ni0uMDk0LTEuMDcxLS4yODFhMS44OTYgMS44OTYgMCAwMS0uNzEtLjc4N2MtLjE2OS0uMzM3LS4yNTMtLjczMS0uMjUzLTEuMTgyIDAtLjQ1My4wODQtLjg0OC4yNTMtMS4xODdhMS44OCAxLjg4IDAgMDEuNzEtLjc5IDIuMDAzIDIuMDAzIDAgMDExLjA3MS0uMjgxYy40MSAwIC43NjYuMDkzIDEuMDcxLjI4LjMwNS4xODguNTQyLjQ1Mi43MS43OS4xNjkuMzQuMjUzLjczNS4yNTMgMS4xODggMCAuNDUtLjA4NC44NDUtLjI1MyAxLjE4MmExLjg5IDEuODkgMCAwMS0uNzEuNzg3IDIuMDA0IDIuMDA0IDAgMDEtMS4wNzEuMjgxem0uMDAzLS43MTNjLjI2NSAwIC40ODUtLjA3LjY1OS0uMjFhMS4yMyAxLjIzIDAgMDAuMzg2LS41NiAyLjIxIDIuMjEgMCAwMC4xMjgtLjc3IDIuMiAyLjIgMCAwMC0uMTI4LS43NjcgMS4yNSAxLjI1IDAgMDAtLjM4Ni0uNTY1IDEuMDEgMS4wMSAwIDAwLS42Ni0uMjEzYy0uMjY2IDAtLjQ4OC4wNy0uNjY0LjIxM2ExLjI3IDEuMjcgMCAwMC0uMzkuNTY1IDIuMjY0IDIuMjY0IDAgMDAtLjEyNC43NjdjMCAuMjguMDQyLjUzNy4xMjUuNzcuMDg1LjIzMy4yMTUuNDIuMzkuNTYuMTc1LjE0LjM5Ny4yMS42NjQuMjF6bTQuMjUuNzIyYy0uMjc3IDAtLjUyNy0uMDUyLS43NS0uMTU0YTEuMjY0IDEuMjY0IDAgMDEtLjUzMi0uNDUyIDEuMjk2IDEuMjk2IDAgMDEtLjE5My0uNzI0YzAtLjI0Ni4wNDctLjQ0OS4xNDItLjYwOC4wOTUtLjE1OS4yMjItLjI4NS4zODMtLjM3OC4xNjEtLjA5My4zNDEtLjE2My41NC0uMjEuMTk5LS4wNDcuNDAyLS4wODMuNjA4LS4xMDhsLjYzNi0uMDc0YS45MzUuOTM1IDAgMDAuMzU1LS4xYy4wNzQtLjA0NS4xMTEtLjExOS4xMTEtLjIydi0uMDJjMC0uMjQ5LS4wNy0uNDQxLS4yMS0uNTc3LS4xMzgtLjEzNy0uMzQ1LS4yMDUtLjYyLS4yMDUtLjI4NSAwLS41MS4wNjMtLjY3NS4xOWExLjAxOCAxLjAxOCAwIDAwLS4zMzguNDE4bC0uNzk5LS4xODJjLjA5NS0uMjY1LjIzMy0uNDc5LjQxNS0uNjQyLjE4NC0uMTY1LjM5NS0uMjg0LjYzNC0uMzU4LjIzOC0uMDc2LjQ5LS4xMTMuNzUyLS4xMTMuMTc1IDAgLjM2LjAyLjU1NC4wNjIuMTk3LjA0LjM4MS4xMTQuNTUxLjIyMi4xNzMuMTA4LjMxNC4yNjIuNDI0LjQ2My4xMS4xOTkuMTY1LjQ1Ny4xNjUuNzc1VjhoLS44M3YtLjU5N2gtLjAzNGMtLjA1NS4xMS0uMTM3LjIxOC0uMjQ3LjMyNC0uMTEuMTA2LS4yNTEuMTk0LS40MjMuMjY0YTEuNjUgMS42NSAwIDAxLS42Mi4xMDZ6bS4xODQtLjY4MmMuMjM1IDAgLjQzNS0uMDQ3LjYwMi0uMTRhLjk3NC45NzQgMCAwMC4zODQtLjM2My45NDMuOTQzIDAgMDAuMTMzLS40ODZ2LS41NjJhLjQ0My40NDMgMCAwMS0uMTc2LjA4NSAyLjczOCAyLjczOCAwIDAxLS4yOTMuMDY1bC0uMzIuMDQ4LS4yNjIuMDM1Yy0uMTY1LjAyLS4zMTUuMDU1LS40NTIuMTA1YS43NzYuNzc2IDAgMDAtLjMyNC4yMTMuNTMzLjUzMyAwIDAwLS4xMTkuMzYzYzAgLjIxLjA3OC4zNy4yMzMuNDc4LjE1NS4xMDYuMzUzLjE1OS41OTQuMTU5em00LjczMy42N2ExLjY5IDEuNjkgMCAwMS0uOTQzLS4yNyAxLjg0IDEuODQgMCAwMS0uNjQ3LS43NzVjLS4xNTYtLjMzNy0uMjMzLS43NDItLjIzMy0xLjIxMyAwLS40NzIuMDc4LS44NzUuMjM1LTEuMjFhMS44MSAxLjgxIDAgMDEuNjU0LS43NyAxLjcgMS43IDAgMDEuOTQtLjI2N2MuMjcxIDAgLjQ4OS4wNDUuNjU0LjEzNi4xNjYuMDg5LjI5NS4xOTMuMzg2LjMxMi4wOTMuMTIuMTY1LjIyNS4yMTYuMzE2aC4wNTFWMi4xODJoLjg1VjhoLS44M3YtLjY3OWgtLjA3MWEyLjI1IDIuMjUgMCAwMS0uMjIyLjMxOGMtLjA5NC4xMi0uMjI1LjIyNC0uMzkyLjMxMy0uMTY2LjA4OS0uMzgyLjEzMy0uNjQ4LjEzM3ptLjE4OC0uNzI0YS45OS45OSAwIDAwLjYyLS4xOTMgMS4yIDEuMiAwIDAwLjM4Ni0uNTQzYy4wODktLjIzMS4xMzMtLjUuMTMzLS44MDcgMC0uMzAzLS4wNDMtLjU2OC0uMTMtLjc5NWExLjE2OSAxLjE2OSAwIDAwLS4zODQtLjUzMiAxLjAxIDEuMDEgMCAwMC0uNjI1LS4xOSAxLjAxIDEuMDEgMCAwMC0uNjQuMTk5Yy0uMTcuMTMzLS4yOTguMzEzLS4zODYuNTQzYTIuMjE0IDIuMjE0IDAgMDAtLjEyNy43NzVjMCAuMjkyLjA0My41NTQuMTMuNzg3LjA4Ny4yMzMuMjE2LjQxOC4zODcuNTU0YS45OTguOTk4IDAgMDAuNjM2LjIwMnptNy4xNDIuNzI3Yy0uNDEgMC0uNzY2LS4wOTQtMS4wNzEtLjI4MWExLjg5NiAxLjg5NiAwIDAxLS43MS0uNzg3Yy0uMTY5LS4zMzctLjI1My0uNzMxLS4yNTMtMS4xODIgMC0uNDUzLjA4NC0uODQ4LjI1My0xLjE4N2ExLjg4IDEuODggMCAwMS43MS0uNzkgMi4wMDMgMi4wMDMgMCAwMTEuMDcxLS4yODFjLjQxIDAgLjc2Ni4wOTMgMS4wNzEuMjguMzA1LjE4OC41NDIuNDUyLjcxLjc5LjE2OS4zNC4yNTMuNzM1LjI1MyAxLjE4OCAwIC40NS0uMDg0Ljg0NS0uMjUzIDEuMTgyYTEuODkgMS44OSAwIDAxLS43MS43ODcgMi4wMDQgMi4wMDQgMCAwMS0xLjA3MS4yODF6bS4wMDMtLjcxM2MuMjY1IDAgLjQ4NS0uMDcuNjU5LS4yMWExLjIzIDEuMjMgMCAwMC4zODYtLjU2IDIuMjEgMi4yMSAwIDAwLjEyOC0uNzcgMi4yIDIuMiAwIDAwLS4xMjgtLjc2NyAxLjI1IDEuMjUgMCAwMC0uMzg2LS41NjUgMS4wMSAxLjAxIDAgMDAtLjY2LS4yMTNjLS4yNjYgMC0uNDg4LjA3LS42NjQuMjEzYTEuMjcgMS4yNyAwIDAwLS4zOS41NjUgMi4yNjQgMi4yNjQgMCAwMC0uMTI0Ljc2N2MwIC4yOC4wNDIuNTM3LjEyNS43Ny4wODUuMjMzLjIxNS40Mi4zOS41Ni4xNzUuMTQuMzk3LjIxLjY2NC4yMXptMy44MjktMS45NjZWOGgtLjg1VjMuNjM2aC44MTZ2LjcxaC4wNTRjLjEtLjIzLjI1Ny0uNDE2LjQ3MS0uNTU2LjIxNi0uMTQuNDg4LS4yMS44MTYtLjIxLjI5NyAwIC41NTcuMDYyLjc4LjE4Ny4yMjQuMTIzLjM5OC4zMDcuNTIuNTUxLjEyNC4yNDUuMTg1LjU0Ny4xODUuOTA2VjhoLS44NVY1LjMyN2MwLS4zMTctLjA4Mi0uNTY0LS4yNDYtLjc0Mi0uMTY1LS4xOC0uMzkxLS4yNy0uNjgtLjI3LS4xOTYgMC0uMzcxLjA0My0uNTI1LjEyOGEuOTIuOTIgMCAwMC0uMzYuMzc1Yy0uMDg4LjE2My0uMTMxLjM2LS4xMzEuNTkxem04LjA4Ni0xLjc3M3YuNjgyaC0yLjM4NHYtLjY4MmgyLjM4NHptLTEuNzQ1LTEuMDQ1aC44NXY0LjEyOGMwIC4xNjUuMDI0LjI4OS4wNzQuMzcyYS4zODkuMzg5IDAgMDAuMTkuMTY4Yy4wOC4wMjguMTY2LjA0Mi4yNTguMDQyYS45OTQuOTk0IDAgMDAuMTgtLjAxNGwuMTE5LS4wMjMuMTUzLjcwMmExLjY2NSAxLjY2NSAwIDAxLS41NTEuMDkgMS40OTUgMS40OTUgMCAwMS0uNjI1LS4xMTggMS4wNzIgMS4wNzIgMCAwMS0uNDY5LS4zODdjLS4xMTktLjE3NC0uMTc5LS4zOTMtLjE3OS0uNjU2VjIuNTl6bTMuNjI3IDIuODE4VjhoLS44NDlWMi4xODJoLjgzOHYyLjE2NWguMDU0Yy4xMDItLjIzNS4yNTktLjQyMi40NjktLjU2LjIxLS4xMzguNDg1LS4yMDcuODI0LS4yMDcuMjk5IDAgLjU2LjA2MS43ODQuMTg0LjIyNS4xMjMuNC4zMDcuNTIyLjU1MS4xMjYuMjQzLjE4OC41NDYuMTg4LjkxVjhoLS44NVY1LjMyN2MwLS4zMi0uMDgyLS41NjgtLjI0Ny0uNzQ1LS4xNjQtLjE3OC0uMzk0LS4yNjctLjY4Ny0uMjY3LS4yIDAtLjM4LjA0My0uNTQuMTI4YS45MjIuOTIyIDAgMDAtLjM3Mi4zNzVjLS4wODkuMTYzLS4xMzMuMzYtLjEzMy41OTF6bTUuODQ0IDIuNjhjLS40MyAwLS44LS4wOTMtMS4xMS0uMjc3YTEuODcgMS44NyAwIDAxLS43MTYtLjc4Yy0uMTY3LS4zMzgtLjI1LS43MzMtLjI1LTEuMTg1IDAtLjQ0Ny4wODMtLjg0MS4yNS0xLjE4Mi4xNjgtLjM0MS40MDMtLjYwNy43MDQtLjc5OWExLjk0OCAxLjk0OCAwIDAxMS4wNjMtLjI4NmMuMjQ2IDAgLjQ4NC4wNC43MTYuMTIyLjIzLjA4MS40MzguMjA5LjYyMi4zODMuMTgzLjE3NC4zMjguNC40MzQuNjguMTA2LjI3Ni4xNi42MTIuMTYgMS4wMDh2LjNoLTMuNDd2LS42MzZoMi42MzdjMC0uMjIzLS4wNDYtLjQyLS4xMzYtLjU5M2ExLjAzIDEuMDMgMCAwMC0uOTU4LS41NjMgMS4xMSAxLjExIDAgMDAtLjYyNS4xNzYgMS4xODMgMS4xODMgMCAwMC0uNDA5LjQ1NSAxLjMxMiAxLjMxMiAwIDAwLS4xNDIuNjA1di40OTdjMCAuMjkyLjA1MS41NC4xNTMuNzQ1LjEwNS4yMDQuMjUuMzYuNDM1LjQ2OC4xODYuMTA2LjQwMy4xNi42NS4xNi4xNjIgMCAuMzA4LS4wMjMuNDQxLS4wNjlhLjkxMy45MTMgMCAwMC41NjUtLjU1NGwuODA0LjE0NWMtLjA2NC4yMzctLjE4LjQ0NC0uMzQ2LjYyMmExLjY4IDEuNjggMCAwMS0uNjIyLjQxMiAyLjMyOCAyLjMyOCAwIDAxLS44NS4xNDV6IiBmaWxsPSIjRjJGMkYyIi8+PC9zdmc+")',
                              }}
                            />
                          </div>{" "}

                          <div
                            className="bg-black px-0.5 lg:px-4 py-2 rounded-2xl"
                          >
                            <a

                              className="box-border text-no-underline text-current rounded-[4px] bg-[rgb(51, 51, 51)] inline-flex h-[48px] min-w-[120px] lg:min-w-[140px]"
                              href="#"
                              target="_blank"
                              style={{
                                backgroundPosition: "50% center",
                                backgroundRepeat: "no-repeat",
                                backgroundImage:
                                  'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE0IiBoZWlnaHQ9IjMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01OS4wNzIgMTguNDE2Yy0yLjIxNyAwLTQuMDMgMS42ODEtNC4wMyAzLjk5MyAwIDIuMzAyIDEuODEzIDMuOTkzIDQuMDMgMy45OTMgMi4yMTggMCA0LjAzLTEuNjkyIDQuMDMtMy45OTMgMC0yLjMxMS0xLjgxMi0zLjk5My00LjAzLTMuOTkzem0wIDYuNDE3Yy0xLjIxNyAwLTIuMjY1LS45OTYtMi4yNjUtMi40MjQgMC0xLjQzOCAxLjA0OC0yLjQyNCAyLjI2NS0yLjQyNHMyLjI2NS45ODYgMi4yNjUgMi40MjRjMCAxLjQyOC0xLjA0OCAyLjQyNC0yLjI2NSAyLjQyNHptLTguNzk0LTYuNDE3Yy0yLjIxOCAwLTQuMDMgMS42ODEtNC4wMyAzLjk5MyAwIDIuMzAyIDEuODEyIDMuOTkzIDQuMDMgMy45OTMgMi4yMTcgMCA0LjAyOS0xLjY5MiA0LjAyOS0zLjk5MyAwLTIuMzExLTEuODAzLTMuOTkzLTQuMDMtMy45OTN6bTAgNi40MTdjLTEuMjE4IDAtMi4yNjUtLjk5Ni0yLjI2NS0yLjQyNCAwLTEuNDM4IDEuMDQ3LTIuNDI0IDIuMjY1LTIuNDI0IDEuMjE3IDAgMi4yNjQuOTg2IDIuMjY0IDIuNDI0IDAgMS40MjgtMS4wNDcgMi40MjQtMi4yNjQgMi40MjR6bS0xMC40NTYtNS4xODZ2MS42OUg0My45Yy0uMTIzLjk1LS40NDQgMS42NTQtLjkyNSAyLjEzMy0uNTk0LjU5Mi0xLjUyIDEuMjQtMy4xNDIgMS4yNC0yLjUxIDAtNC40NzMtMi4wMS00LjQ3My00LjUxIDAtMi40OTggMS45NjMtNC41MDkgNC40NzMtNC41MDkgMS4zNSAwIDIuMzQuNTI2IDMuMDY2IDEuMjEybDEuMTk5LTEuMTkzYy0xLjAyLS45NjgtMi4zNjktMS43MS00LjI3NS0xLjcxLTMuNDM0IDAtNi4zMjIgMi43ODEtNi4zMjIgNi4yMSAwIDMuNDIgMi44ODggNi4yMSA2LjMyMiA2LjIxIDEuODYgMCAzLjI1Ni0uNiA0LjM1LTEuNzM4IDEuMTIzLTEuMTE4IDEuNDcyLTIuNjk2IDEuNDcyLTMuOTY0YTUuMSA1LjEgMCAwMC0uMDk0LTEuMDYyaC01LjcyOHYtLjAxem00Mi43NTYgMS4zMTVjLS4zMy0uODkzLTEuMzUtMi41NDYtMy40MzUtMi41NDYtMi4wNjcgMC0zLjc4NCAxLjYxNi0zLjc4NCAzLjk5MyAwIDIuMjM2IDEuNjk4IDMuOTkzIDMuOTgyIDMuOTkzYTMuOTggMy45OCAwIDAwMy4zNC0xLjc2N2wtMS4zNjgtLjkxMWMtLjQ1My42NjctMS4wNzYgMS4xMDktMS45NzIgMS4xMDktLjg5NiAwLTEuNTM4LS40MDQtMS45NDQtMS4yMTJsNS4zNy0yLjIwOC0uMTktLjQ1MXptLTUuNDczIDEuMzM0Yy0uMDQ4LTEuNTQgMS4xOTgtMi4zMyAyLjA5NC0yLjMzLjY5OSAwIDEuMjkzLjM0OCAxLjQ5MS44NDVsLTMuNTg1IDEuNDg1em0tNC4zNiAzLjg3aDEuNzY1VjE0LjQyNGgtMS43NjV2MTEuNzQ0em0tMi44ODctNi44NThINjkuOGMtLjM5Ni0uNDctMS4xNTEtLjg5Mi0yLjExNC0uODkyLTIuMDEgMC0zLjg1IDEuNzU3LTMuODUgNC4wMTEgMCAyLjIzNiAxLjg0IDMuOTg0IDMuODUgMy45ODQuOTUzIDAgMS43MTgtLjQyMyAyLjExNC0uOTExaC4wNTd2LjU3M2MwIDEuNTMxLS44MjEgMi4zNDktMi4xNDIgMi4zNDktMS4wNzYgMC0xLjc0Ni0uNzctMi4wMi0xLjQybC0xLjUzOC42NEM2NC42MDIgMjguNzAzIDY1Ljc3MiAzMCA2Ny43MTYgMzBjMi4wNjYgMCAzLjgxMi0xLjIxMiAzLjgxMi00LjE2MlYxOC42NmgtMS42N3YuNjQ4em0tMi4wMiA1LjUyNWMtMS4yMTcgMC0yLjIzNi0xLjAxNS0yLjIzNi0yLjQwNSAwLTEuNDEgMS4wMTktMi40MzQgMi4yMzYtMi40MzQgMS4xOTkgMCAyLjE0MiAxLjAzNCAyLjE0MiAyLjQzMyAwIDEuMzkxLS45NDMgMi40MDYtMi4xNDIgMi40MDZ6bTIzLjAwNi0xMC40MWgtNC4yMTh2MTEuNzQ0aDEuNzY0di00LjQ1NGgyLjQ2M2MxLjk1MyAwIDMuODY5LTEuNDA5IDMuODY5LTMuNjQ1IDAtMi4yMzYtMS45MzQtMy42NDUtMy44NzgtMy42NDV6bS4wMzggNS42NTZIODguMzh2LTQuMDNoMi41YTIuMDQxIDIuMDQxIDAgMDEyLjA2NyAyLjAxYzAgLjkyLS43NDUgMi4wMi0yLjA2NiAyLjAyem0xMC44ODktMS42ODJjLTEuMjc0IDAtMi41OTUuNTY0LTMuMTQyIDEuNzk0bDEuNTY2LjY0OWMuMzMtLjY0OS45NTMtLjg2NSAxLjYwNC0uODY1LjkwNiAwIDEuODQuNTQ1IDEuODUgMS41MTN2LjEyMmEzLjk1OCAzLjk1OCAwIDAwLTEuODQtLjQ1Yy0xLjY5IDAtMy4zOTcuOTItMy4zOTcgMi42NCAwIDEuNTY4IDEuMzc3IDIuNTgzIDIuOTI1IDIuNTgzIDEuMTc5IDAgMS44NC0uNTI2IDIuMjQ2LTEuMTQ2aC4wNTZ2LjkxMWgxLjY5OXYtNC41Yy4wMDktMi4wODYtMS41NDgtMy4yNTEtMy41NjctMy4yNTF6bS0uMjE3IDYuNDM2Yy0uNTc2IDAtMS4zNzgtLjI5Mi0xLjM3OC0uOTk2IDAtLjkwMiAxLTEuMjUgMS44NjgtMS4yNS43NzQgMCAxLjE0Mi4xNyAxLjYwNS4zOTUtLjEzMiAxLjA4LTEuMDc2IDEuODUtMi4wOTUgMS44NXptOS45ODMtNi4xODJsLTIuMDE5IDUuMDkyaC0uMDU3bC0yLjA5NS01LjA5MmgtMS44OTZsMy4xNDIgNy4xMjEtMS43OTMgMy45NTZoMS44NEwxMTMuNSAxOC42NWgtMS45NjN6bS0xNS44NTMgNy41MTZoMS43NjVWMTQuNDIzaC0xLjc2NHYxMS43NDR6IiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTIuNDU4IDIuMzk1YTEuOTQgMS45NCAwIDAwLS40NDggMS4zNjN2MjEuNTNjLS4wMy40OTQuMTMuOTgxLjQ0OCAxLjM2MmwuMDY4LjA2OCAxMi4wNTktMTIuMDV2LS4yODJMMi41MjUgMi4zMjZsLS4wNjcuMDY5eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik0xOC41NzYgMTguNjg4bC0zLjk5MS00LjAydi0uMjgybDMuOTktNC4wMy4wODguMDUgNC43OCAyLjcxNWMxLjM2Mi43NjkgMS4zNjIgMi4wMzQgMCAyLjgxM2wtNC43NiAyLjcwNi0uMTA3LjA0OHoiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNMTguNjkyIDE4LjYzbC00LjEwNy00LjEwOEwyLjQ1OCAyNi42NWExLjU4NiAxLjU4NiAwIDAwMi4wMjQuMDU4bDE0LjIyLTguMDc4IiBmaWxsPSJ1cmwoI2MpIi8+PHBhdGggZD0iTTE4LjY5MiAxMC40MTVMNC40NzIgMi4zMzdhMS41ODcgMS41ODcgMCAwMC0yLjAyNC4wNThsMTIuMTM3IDEyLjEyNyA0LjEwNy00LjEwN3oiIGZpbGw9InVybCgjZCkiLz48cGF0aCBvcGFjaXR5PSIuMiIgZD0iTTE4LjU3NiAxOC41NDJsLTE0LjEwNCA4LjAzYTEuNjI1IDEuNjI1IDAgMDEtMS45NDYgMGwtLjA2OC4wNjguMDY4LjA2OGExLjYxNiAxLjYxNiAwIDAwMS45NDYgMGwxNC4yMi04LjA3OC0uMTE2LS4wODh6IiBmaWxsPSIjMDAwIi8+PHBhdGggb3BhY2l0eT0iLjEyIiBkPSJNMi40NTggMjYuNTE0YTEuOTQ3IDEuOTQ3IDAgMDEtLjQ0OC0xLjM2M3YuMTQ2Yy0uMDMuNDk1LjEzLjk4Mi40NDggMS4zNjNsLjA2OC0uMDY5LS4wNjgtLjA3N3ptMjAuOTg0LTEwLjcyNmwtNC44NjYgMi43NTQuMDg3LjA4OCA0Ljc4LTIuNzA2YTEuNzA0IDEuNzA0IDAgMDAuOTcyLTEuNDAyIDEuODEgMS44MSAwIDAxLS45NzMgMS4yNjZ6IiBmaWxsPSIjMDAwIi8+PHBhdGggb3BhY2l0eT0iLjI1IiBkPSJNNC40NzIgMi40NzJsMTguOTcgMTAuNzg1YTEuODEgMS44MSAwIDAxLjk3MyAxLjI2NSAxLjcwMyAxLjcwMyAwIDAwLS45NzMtMS40MDJMNC40NzIgMi4zMzZDMy4xMSAxLjU2NyAyIDIuMjEgMiAzLjc2NnYuMTQ3Yy4wMy0xLjU2NyAxLjEyLTIuMjEgMi40NzItMS40NHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzguMDc3IDQuMDJhMS43NzUgMS43NzUgMCAwMC0uMjIyLS40NjMgMS40MTYgMS40MTYgMCAwMC0uNzYxLS41NzcgMS43NDggMS43NDggMCAwMC0uNTMyLS4wNzdjLS4zMjcgMC0uNjIzLjA4NS0uODg2LjI1M2ExLjcyNCAxLjcyNCAwIDAwLS42MjUuNzQyYy0uMTUxLjMyNC0uMjI3LjcyLS4yMjcgMS4xOSAwIC40NzIuMDc3Ljg3LjIzIDEuMTk2LjE1My4zMjYuMzY0LjU3My42My43NDIuMjY4LjE2OC41NzIuMjUyLjkxMy4yNTIuMzE2IDAgLjU5MS0uMDY0LjgyNi0uMTkzLjIzNy0uMTI5LjQyLS4zMS41NDktLjU0NS4xMy0uMjM3LjE5Ni0uNTE1LjE5Ni0uODM1bC4yMjcuMDQySDM2Ljczdi0uNzI0aDIuMjg3di42NjJjMCAuNDg4LS4xMDQuOTEzLS4zMTMgMS4yNzJhMi4xMjggMi4xMjggMCAwMS0uODU3LjgzYy0uMzY0LjE5NS0uNzguMjkzLTEuMjUuMjkzLS41MjcgMC0uOTg5LS4xMjItMS4zODctLjM2NGEyLjQ2NSAyLjQ2NSAwIDAxLS45MjYtMS4wMzFjLS4yMjEtLjQ0Ny0uMzMyLS45NzgtLjMzMi0xLjU5MSAwLS40NjQuMDY0LS44OC4xOTMtMS4yNXMuMzEtLjY4My41NDItLjk0Yy4yMzUtLjI2LjUxLS40NTguODI3LS41OTRhMi41ODggMi41ODggMCAwMTEuMDQzLS4yMDhjLjMxNCAwIC42MDcuMDQ3Ljg3OC4xNC4yNzIuMDkyLjUxNS4yMjQuNzI3LjM5NGEyLjIzNyAyLjIzNyAwIDAxLjgxNSAxLjM4NGgtLjl6TTQwLjEzIDhWMi4xODJoMy42NDh2Ljc1NmgtMi43N1Y0LjcxaDIuNTh2Ljc1M2gtMi41OHYxLjc4MWgyLjgwNFY4SDQwLjEzem00LjUzNC01LjA2M3YtLjc1NWg0LjUwM3YuNzU2aC0xLjgxNlY4aC0uODc1VjIuOTM3aC0xLjgxMnptOC40OTMtLjc1NVY4aC0uODc4VjIuMTgyaC44Nzh6bS45OTEuNzU2di0uNzU2aDQuNTAzdi43NTZoLTEuODE1VjhoLS44NzVWMi45MzdoLTEuODEzek02Ni44MiA1LjA5YzAgLjYyMS0uMTE1IDEuMTU1LS4zNDIgMS42MDJhMi41MDMgMi41MDMgMCAwMS0uOTM0IDEuMDI5IDIuNTQyIDIuNTQyIDAgMDEtMS4zNDQuMzU4IDIuNTcgMi41NyAwIDAxLTEuMzUtLjM1OCAyLjUwNSAyLjUwNSAwIDAxLS45MzEtMS4wMzJjLS4yMjgtLjQ0Ny0uMzQxLS45OC0uMzQxLTEuNiAwLS42Mi4xMTMtMS4xNTMuMzQtMS41OTkuMjI4LS40NDYuNTM4LS43OS45MzItMS4wMjguMzk2LS4yNC44NDYtLjM2IDEuMzUtLjM2LjUwMiAwIC45NS4xMiAxLjM0NC4zNi4zOTUuMjM5LjcwNy41ODIuOTM0IDEuMDI4LjIyNy40NDYuMzQxLjk3OS4zNDEgMS42em0tLjg3IDBjMC0uNDc0LS4wNzctLjg3Mi0uMjMtMS4xOTZhMS42OCAxLjY4IDAgMDAtLjYyNS0uNzM5IDEuNjI0IDEuNjI0IDAgMDAtLjg5NS0uMjUzYy0uMzM1IDAtLjYzNS4wODUtLjg5OC4yNTNhMS43MDUgMS43MDUgMCAwMC0uNjI1LjczOWMtLjE1MS4zMjQtLjIyNy43MjItLjIyNyAxLjE5NiAwIC40NzMuMDc2Ljg3My4yMjcgMS4xOTkuMTU0LjMyNC4zNjIuNTcuNjI1LjczOC4yNjMuMTY3LjU2My4yNS44OTguMjUuMzMzIDAgLjYzMi0uMDgzLjg5NS0uMjVhMS43IDEuNyAwIDAwLjYyNS0uNzM4Yy4xNTMtLjMyNi4yMy0uNzI2LjIzLTEuMnptNi42Ni0yLjkxVjhoLS44MDdsLTIuOTU4LTQuMjY3aC0uMDUzVjhoLS44NzhWMi4xODJoLjgxMmwyLjk2IDQuMjczaC4wNTRWMi4xODJoLjg3eiIgZmlsbD0iI0YyRjJGMiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjEzLjUxNCIgeTE9IjMuNTM0IiB4Mj0iLTIuODE4IiB5Mj0iMTkuODY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQTBGRiIvPjxzdG9wIG9mZnNldD0iLjAxIiBzdG9wLWNvbG9yPSIjMDBBMUZGIi8+PHN0b3Agb2Zmc2V0PSIuMjYiIHN0b3AtY29sb3I9IiMwMEJFRkYiLz48c3RvcCBvZmZzZXQ9Ii41MSIgc3RvcC1jb2xvcj0iIzAwRDJGRiIvPjxzdG9wIG9mZnNldD0iLjc2IiBzdG9wLWNvbG9yPSIjMDBERkZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBFM0ZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIyNS4yMjMiIHkxPSIxNC41MjIiIHgyPSIxLjY3OSIgeTI9IjE0LjUyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkUwMDAiLz48c3RvcCBvZmZzZXQ9Ii40MSIgc3RvcC1jb2xvcj0iI0ZGQkQwMCIvPjxzdG9wIG9mZnNldD0iLjc4IiBzdG9wLWNvbG9yPSJvcmFuZ2UiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjlDMDAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjE2LjQ2MyIgeTE9IjE2Ljc2MSIgeDI9Ii01LjY4OSIgeTI9IjM4LjkwNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjNBNDQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDMzExNjIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9Ii0uNTk5IiB5MT0iLTQuNzY5IiB4Mj0iOS4yOSIgeTI9IjUuMTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMzJBMDcxIi8+PHN0b3Agb2Zmc2V0PSIuMDciIHN0b3AtY29sb3I9IiMyREE3NzEiLz48c3RvcCBvZmZzZXQ9Ii40OCIgc3RvcC1jb2xvcj0iIzE1Q0Y3NCIvPjxzdG9wIG9mZnNldD0iLjgiIHN0b3AtY29sb3I9IiMwNkU3NzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEYwNzYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=")',
                              }}
                            />
                          </div>
                        </CardFooter>

                        <div className="hidden lg:flex py-4">
                          <a href="#" className="text-blue font-inter text-base font-inter">
                            <span >Download Android APK</span>
                          </a>
                        </div>

                      </Card>

                      {/* Card 2 */}
                      <Card
                        className="px-4"
                      >
                        <CardHeader
                          className="box-border gap-4 grid grid-cols-[auto,1fr]"
                        >
                          <Image src='/logo.png' alt='BTCA_FARM LOGO' className="border-0 box-content max-w-full align-middle h-14 w-14" />
                          <Box>
                            <h6
                              className="box-border mb-0 mt-0 text-[#2b2d33] text-lg font-inter font-bold leading-6 break-words flex items-center uppercase"
                            >
                              {"BTCA FARM"}
                              <span
                                className="box-border outline-none border border-[#55575c] rounded-[2px] px-2 py-2 text-[#2b2d33] text-xs font-medium font-inter leading-4 ml-2"
                              >
                                4+
                              </span>
                            </h6>{" "}
                            <p
                              className="box-border mb-0 font-inter text-[#0078d2] text-base leading-5 break-words mt-2"
                            >
                              PLATINEXLLC
                            </p>
                          </Box>

                        </CardHeader>

                        <CardBody
                          className="box-border border-t border-[#e9eaea] gap-8 pt-6 pb-2 flex overflow-y-auto mt-6">

                          {/* mockup 1 */}
                          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                            <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                            </div>
                          </div>

                          {/* mockup 2 */}
                          <div class="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                            <div class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                            </div>
                          </div>

                          {/* mockup 3 */}
                          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                            </div>
                          </div>

                        </CardBody>

                        <CardFooter
                          className="box-border border-t border-[#e9eaea] grid mt-2 pt-6 gap-6 grid-cols-2"
                        >
                          <div
                            className="bg-black px-4 py-2 rounded-2xl"
                          >
                            <a
                              className="box-border text-no-underline text-current rounded-[4px] bg-[rgb(51, 51, 51)] inline-flex h-[48px] min-w-[120px] lg:min-w-[140px]"
                              href="'#"
                              target="_blank"
                              style={{
                                backgroundPosition: "50% center",
                                backgroundRepeat: "no-repeat",
                                backgroundImage:
                                  'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03MC4yOTIgMjUuNDc4Yy0xLjY3NyAwLTIuOTA0LS44MjktMy4wNDYtMi4wOWgtMS45NTFjLjEyMyAyLjMgMi4wMyAzLjc1NiA0Ljg1NiAzLjc1NiAzLjAyIDAgNC45MTgtMS40OSA0LjkxOC0zLjg3IDAtMS44Ni0xLjA4Ni0yLjkxLTMuNy0zLjUyNmwtMS40MDQtLjM0NGMtMS42NDItLjQwNS0yLjMxMy0uOTM1LTIuMzEzLTEuODM0IDAtMS4xMjggMS4wNTEtMS45MDQgMi41ODctMS45MDQgMS41MzYgMCAyLjU4Ny43NjcgMi43MDIgMi4wMzZoMS45MjRjLS4wNjItMi4xOTUtMS45MDctMy43MDItNC42LTMuNzAyLTIuNzE5IDAtNC42MzQgMS41MDgtNC42MzQgMy43MDIgMCAxLjc3MyAxLjA4NiAyLjg2NSAzLjQyNSAzLjQzbDEuNjUuMzk2YzEuNjUyLjQwNSAyLjM0OS45OTcgMi4zNDkgMS45ODQgMCAxLjEzNy0xLjE1NiAxLjk2Ni0yLjc2MyAxLjk2NnoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjIyMyAyMy40OTRoNC44NTVsMS4xNjYgMy40MzhoMi4wOTFsLTQuNTk5LTEyLjcySDMzLjZMMjkgMjYuOTMyaDIuMDU3bDEuMTY2LTMuNDM4em00LjM1Mi0xLjU4N2gtMy44NWwxLjktNS41OGguMDUybDEuODk4IDUuNTh6bTkuODE3IDUuMTIzYzIuMzMxIDAgMy44NzYtMS44NTMgMy44NzYtNC43MzQgMC0yLjg3NC0xLjU1NC00LjczNS0zLjkxMS00LjczNWEzLjI5OCAzLjI5OCAwIDAwLTIuOTU4IDEuNjRoLS4wMzV2LTEuNTQzSDQxLjUyVjMwaDEuOTA2di00LjU5M2guMDQ1YTMuMTQ2IDMuMTQ2IDAgMDAyLjkyMiAxLjYyMnptLS41MzgtNy44NDZjMS40ODMgMCAyLjQ1NCAxLjIzNCAyLjQ1NCAzLjExMiAwIDEuODk0LS45NzEgMy4xMi0yLjQ1NCAzLjEyLTEuNDU3IDAtMi40MzctMS4yNTItMi40MzctMy4xMiAwLTEuODUyLjk4LTMuMTEyIDIuNDM3LTMuMTEyem0xNC42MzYgMy4xMTJjMCAyLjg4MS0xLjU0NCA0LjczMy0zLjg3NSA0LjczM2EzLjE1MiAzLjE1MiAwIDAxLTIuOTIyLTEuNjIyaC0uMDQ1VjMwaC0xLjkwNlYxNy42NThoMS44NDV2MS41NDNoLjAzNWEzLjI5MyAzLjI5MyAwIDAxMi45NTgtMS42NGMyLjM1NyAwIDMuOTEgMS44NiAzLjkxIDQuNzM1em0tMS45NTkgMGMwLTEuODc4LS45NzEtMy4xMTItMi40NTQtMy4xMTItMS40NTcgMC0yLjQzNiAxLjI2LTIuNDM2IDMuMTEyIDAgMS44NjguOTggMy4xMiAyLjQzNiAzLjEyIDEuNDgzIDAgMi40NTQtMS4yMjYgMi40NTQtMy4xMnoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBkPSJNNzkuMTgzIDE1LjQ2M3YyLjE5NWgxLjc2NnYxLjUwOGgtMS43NjZ2NS4xMTJjMCAuNzk0LjM1MyAxLjE2NSAxLjEzIDEuMTY1LjIxLS4wMDQuNDE5LS4wMTkuNjI3LS4wNDV2MS40OTljLS4zNS4wNjUtLjcwNC4wOTUtMS4wNi4wODgtMS44OCAwLTIuNjEzLS43MDUtMi42MTMtMi41MDR2LTUuMzE1aC0xLjM1di0xLjUwOGgxLjM1di0yLjE5NWgxLjkxNnoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg2LjM3NyAxNy41NDRjLTIuNjg0IDAtNC40MDUgMS44MzQtNC40MDUgNC43NTIgMCAyLjkyNSAxLjcwNCA0Ljc1MSA0LjQwNSA0Ljc1MSAyLjcwMiAwIDQuNDA2LTEuODI2IDQuNDA2LTQuNzUyIDAtMi45MTctMS43MTMtNC43NS00LjQwNi00Ljc1em0wIDEuNTY5YzEuNTQ1IDAgMi40NjQgMS4xOCAyLjQ2NCAzLjE4MyAwIDIuMDEtLjkxOSAzLjE4MS0yLjQ2NCAzLjE4MXMtMi40NjItMS4xNzItMi40NjItMy4xODFjMC0xLjk5My45MTctMy4xODMgMi40NjItMy4xODN6IiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTkyLjM1NCAxNy42NThoMS44MTl2MS41NzloLjA0NGEyLjIxMiAyLjIxMiAwIDAxMi4yMzQtMS42NzZjLjIyIDAgLjQzOS4wMjMuNjUzLjA3MXYxLjc4YTIuNjcxIDIuNjcxIDAgMDAtLjg1Ny0uMTE0IDEuOTI1IDEuOTI1IDAgMDAtMS45MDIgMS4zMTcgMS45MTcgMS45MTcgMCAwMC0uMDg0LjgxN3Y1LjVoLTEuOTA3di05LjI3NHoiIGZpbGw9IiNGMkYyRjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwMS44OTUgMjcuMDQ3YzIuMSAwIDMuNzQyLTEuMTU1IDMuOTk5LTIuODM5aC0xLjgxYTIuMTA2IDIuMTA2IDAgMDEtMi4xNDUgMS4zMDUgMi40MjcgMi40MjcgMCAwMS0xLjg0My0uNzUgMi40MTIgMi40MTIgMCAwMS0uNjU2LTEuODc3di0uMTE1SDEwNnYtLjY1MmMwLTIuODEyLTEuNjE2LTQuNTc1LTQuMTg2LTQuNTc1LTIuNjEyIDAtNC4yOTggMS44ODctNC4yOTggNC43OTYgMCAyLjkgMS42NzcgNC43MDcgNC4zNzkgNC43MDd6bTIuMTk4LTUuNjA3aC00LjY0NGEyLjM0NCAyLjM0NCAwIDAxMS40Ni0yLjE3OCAyLjM0IDIuMzQgMCAwMS45MDUtLjE3NSAyLjI0IDIuMjQgMCAwMTEuNjU1LjY4IDIuMjM2IDIuMjM2IDAgMDEuNjI0IDEuNjc0eiIgZmlsbD0iI0YyRjJGMiIvPjxwYXRoIGQ9Ik0xNS42MjMgMWE1Ljg0NiA1Ljg0NiAwIDAxLTEuMzIgNC4xNjggNC44NjYgNC44NjYgMCAwMS0xLjcxIDEuMzU4IDQuODMgNC44MyAwIDAxLTIuMTI3LjQ2OSA1LjU3NCA1LjU3NCAwIDAxMS4zNTYtNC4wMTNBNS44NjIgNS44NjIgMCAwMTE1LjYyMyAxem0yLjY4MSAxMC45ODZhNS45NDMgNS45NDMgMCAwMC0uNzY0IDIuODQgNS43NCA1Ljc0IDAgMDAuOTQ1IDMuMTUxQTUuNjc4IDUuNjc4IDAgMDAyMSAyMC4wOGExMy4xMjcgMTMuMTI3IDAgMDEtMS44IDMuNjkzYy0xLjA2IDEuNTk3LTIuMTcxIDMuMTU4LTMuOTM2IDMuMTg3LS44MzkuMDE5LTEuNDA1LS4yMjQtMS45OTUtLjQ3Ny0uNjE2LS4yNjQtMS4yNTctLjU0LTIuMjYxLS41NC0xLjA2NSAwLTEuNzM1LjI4NC0yLjM4MS41NTgtLjU2LjIzNy0xLjEuNDY2LTEuODYyLjQ5OC0xLjY4LjA2My0yLjk2NC0xLjcwNS00LjA2My0zLjI4Ny0yLjE5Ni0zLjIzMi0zLjkwNi05LjEwNy0xLjYxMy0xMy4xMDVhNi4zMjYgNi4zMjYgMCAwMTIuMjI0LTIuMzMzYy45My0uNTcgMS45OS0uODg5IDMuMDc4LS45MjQuOTUyLS4wMiAxLjg2Ny4zNSAyLjY2OC42NzQuNjE0LjI0OCAxLjE2LjQ3IDEuNjA5LjQ3LjM5NCAwIC45MjYtLjIxMyAxLjU0NS0uNDYuOTc3LS4zOTEgMi4xNzItLjg2OSAzLjM5LS43NC45MzIuMDMgMS44NDYuMjc3IDIuNjY3LjcyNWE2LjAxOSA2LjAxOSAwIDAxMi4wNjMgMS44NTEgNS44OSA1Ljg5IDAgMDAtMi4wMyAyLjExN3pNMzIuNTIzIDhoLTEuODg0VjIuMTgyaDEuOTQzYy41NyAwIDEuMDYuMTE2IDEuNDcuMzUuNDA4LjIzLjcyMi41NjMuOTQuOTk2LjIyLjQzMi4zMjkuOTUuMzI5IDEuNTU0IDAgLjYwNi0uMTEgMS4xMjctLjMzMiAxLjU2My0uMjIuNDM1LS41MzguNzctLjk1NSAxLjAwNi0uNDE3LjIzMy0uOTIuMzQ5LTEuNTExLjM0OXptLTEuMDA2LS43NjdoLjk1N2MuNDQ0IDAgLjgxMi0uMDgzIDEuMTA2LS4yNS4yOTMtLjE2OS41MTMtLjQxMi42NTktLjczLjE0Ni0uMzIuMjE4LS43MS4yMTgtMS4xNyAwLS40NTctLjA3Mi0uODQ0LS4yMTgtMS4xNjNhMS41NDYgMS41NDYgMCAwMC0uNjQ1LS43MjRjLS4yODYtLjE2NS0uNjQxLS4yNDctMS4wNjYtLjI0N2gtMS4wMTF2NC4yODR6bTYuNjY1Ljg1NWMtLjQwOSAwLS43NjYtLjA5NC0xLjA3LS4yODFhMS44OTYgMS44OTYgMCAwMS0uNzEtLjc4N2MtLjE3LS4zMzctLjI1NC0uNzMxLS4yNTQtMS4xODIgMC0uNDUzLjA4NS0uODQ4LjI1My0xLjE4Ny4xNjktLjM0LjQwNi0uNjAzLjcxLS43OWEyLjAwMyAyLjAwMyAwIDAxMS4wNzItLjI4MWMuNDA5IDAgLjc2Ni4wOTMgMS4wNy4yOC4zMDYuMTg4LjU0Mi40NTIuNzEuNzkuMTcuMzQuMjU0LjczNS4yNTQgMS4xODggMCAuNDUtLjA4NS44NDUtLjI1MyAxLjE4Mi0uMTY5LjMzNy0uNDA1LjYtLjcxLjc4N2EyLjAwNCAyLjAwNCAwIDAxLTEuMDcyLjI4MXptLjAwMy0uNzEzYy4yNjUgMCAuNDg1LS4wNy42Ni0uMjFhMS4yMyAxLjIzIDAgMDAuMzg2LS41NmMuMDg1LS4yMzMuMTI4LS40OS4xMjgtLjc3IDAtLjI3OC0uMDQzLS41MzQtLjEyOC0uNzY3YTEuMjUgMS4yNSAwIDAwLS4zODctLjU2NSAxLjAxIDEuMDEgMCAwMC0uNjU5LS4yMTNjLS4yNjcgMC0uNDg4LjA3LS42NjQuMjEzYTEuMjcgMS4yNyAwIDAwLS4zOS41NjUgMi4yNjQgMi4yNjQgMCAwMC0uMTI1Ljc2N2MwIC4yOC4wNDIuNTM3LjEyNS43Ny4wODYuMjMzLjIxNS40Mi4zOS41Ni4xNzYuMTQuMzk3LjIxLjY2NC4yMXpNNDEuOTc4IDhsLTEuMjg0LTQuMzY0aC44NzhsLjg1NSAzLjIwNWguMDQybC44NTgtMy4yMDVoLjg3OGwuODUyIDMuMTloLjA0M2wuODUtMy4xOWguODc3TDQ1LjU0NyA4aC0uODY3bC0uODg3LTMuMTVoLS4wNjVMNDIuODQyIDhoLS44NjR6bTYuNTA1LTIuNTlWOGgtLjg1VjMuNjM2aC44MTZ2LjcxaC4wNTRjLjEtLjIzLjI1Ny0uNDE2LjQ3MS0uNTU2LjIxNi0uMTQuNDg4LS4yMS44MTYtLjIxLjI5NyAwIC41NTcuMDYyLjc4MS4xODcuMjI0LjEyMy4zOTcuMzA3LjUyLjU1MS4xMjMuMjQ1LjE4NS41NDcuMTg1LjkwNlY4aC0uODVWNS4zMjdjMC0uMzE3LS4wODItLjU2NC0uMjQ3LS43NDItLjE2NS0uMTgtLjM5MS0uMjctLjY3OS0uMjdhMS4wNyAxLjA3IDAgMDAtLjUyNi4xMjguOTIuOTIgMCAwMC0uMzYuMzc1IDEuMjQgMS4yNCAwIDAwLS4xMzEuNTkxem00Ljc4MS0zLjIyOFY4aC0uODVWMi4xODJoLjg1em0yLjk4MSA1LjkwNmMtLjQxIDAtLjc2Ni0uMDk0LTEuMDcxLS4yODFhMS44OTYgMS44OTYgMCAwMS0uNzEtLjc4N2MtLjE2OS0uMzM3LS4yNTMtLjczMS0uMjUzLTEuMTgyIDAtLjQ1My4wODQtLjg0OC4yNTMtMS4xODdhMS44OCAxLjg4IDAgMDEuNzEtLjc5IDIuMDAzIDIuMDAzIDAgMDExLjA3MS0uMjgxYy40MSAwIC43NjYuMDkzIDEuMDcxLjI4LjMwNS4xODguNTQyLjQ1Mi43MS43OS4xNjkuMzQuMjUzLjczNS4yNTMgMS4xODggMCAuNDUtLjA4NC44NDUtLjI1MyAxLjE4MmExLjg5IDEuODkgMCAwMS0uNzEuNzg3IDIuMDA0IDIuMDA0IDAgMDEtMS4wNzEuMjgxem0uMDAzLS43MTNjLjI2NSAwIC40ODUtLjA3LjY1OS0uMjFhMS4yMyAxLjIzIDAgMDAuMzg2LS41NiAyLjIxIDIuMjEgMCAwMC4xMjgtLjc3IDIuMiAyLjIgMCAwMC0uMTI4LS43NjcgMS4yNSAxLjI1IDAgMDAtLjM4Ni0uNTY1IDEuMDEgMS4wMSAwIDAwLS42Ni0uMjEzYy0uMjY2IDAtLjQ4OC4wNy0uNjY0LjIxM2ExLjI3IDEuMjcgMCAwMC0uMzkuNTY1IDIuMjY0IDIuMjY0IDAgMDAtLjEyNC43NjdjMCAuMjguMDQyLjUzNy4xMjUuNzcuMDg1LjIzMy4yMTUuNDIuMzkuNTYuMTc1LjE0LjM5Ny4yMS42NjQuMjF6bTQuMjUuNzIyYy0uMjc3IDAtLjUyNy0uMDUyLS43NS0uMTU0YTEuMjY0IDEuMjY0IDAgMDEtLjUzMi0uNDUyIDEuMjk2IDEuMjk2IDAgMDEtLjE5My0uNzI0YzAtLjI0Ni4wNDctLjQ0OS4xNDItLjYwOC4wOTUtLjE1OS4yMjItLjI4NS4zODMtLjM3OC4xNjEtLjA5My4zNDEtLjE2My41NC0uMjEuMTk5LS4wNDcuNDAyLS4wODMuNjA4LS4xMDhsLjYzNi0uMDc0YS45MzUuOTM1IDAgMDAuMzU1LS4xYy4wNzQtLjA0NS4xMTEtLjExOS4xMTEtLjIydi0uMDJjMC0uMjQ5LS4wNy0uNDQxLS4yMS0uNTc3LS4xMzgtLjEzNy0uMzQ1LS4yMDUtLjYyLS4yMDUtLjI4NSAwLS41MS4wNjMtLjY3NS4xOWExLjAxOCAxLjAxOCAwIDAwLS4zMzguNDE4bC0uNzk5LS4xODJjLjA5NS0uMjY1LjIzMy0uNDc5LjQxNS0uNjQyLjE4NC0uMTY1LjM5NS0uMjg0LjYzNC0uMzU4LjIzOC0uMDc2LjQ5LS4xMTMuNzUyLS4xMTMuMTc1IDAgLjM2LjAyLjU1NC4wNjIuMTk3LjA0LjM4MS4xMTQuNTUxLjIyMi4xNzMuMTA4LjMxNC4yNjIuNDI0LjQ2My4xMS4xOTkuMTY1LjQ1Ny4xNjUuNzc1VjhoLS44M3YtLjU5N2gtLjAzNGMtLjA1NS4xMS0uMTM3LjIxOC0uMjQ3LjMyNC0uMTEuMTA2LS4yNTEuMTk0LS40MjMuMjY0YTEuNjUgMS42NSAwIDAxLS42Mi4xMDZ6bS4xODQtLjY4MmMuMjM1IDAgLjQzNS0uMDQ3LjYwMi0uMTRhLjk3NC45NzQgMCAwMC4zODQtLjM2My45NDMuOTQzIDAgMDAuMTMzLS40ODZ2LS41NjJhLjQ0My40NDMgMCAwMS0uMTc2LjA4NSAyLjczOCAyLjczOCAwIDAxLS4yOTMuMDY1bC0uMzIuMDQ4LS4yNjIuMDM1Yy0uMTY1LjAyLS4zMTUuMDU1LS40NTIuMTA1YS43NzYuNzc2IDAgMDAtLjMyNC4yMTMuNTMzLjUzMyAwIDAwLS4xMTkuMzYzYzAgLjIxLjA3OC4zNy4yMzMuNDc4LjE1NS4xMDYuMzUzLjE1OS41OTQuMTU5em00LjczMy42N2ExLjY5IDEuNjkgMCAwMS0uOTQzLS4yNyAxLjg0IDEuODQgMCAwMS0uNjQ3LS43NzVjLS4xNTYtLjMzNy0uMjMzLS43NDItLjIzMy0xLjIxMyAwLS40NzIuMDc4LS44NzUuMjM1LTEuMjFhMS44MSAxLjgxIDAgMDEuNjU0LS43NyAxLjcgMS43IDAgMDEuOTQtLjI2N2MuMjcxIDAgLjQ4OS4wNDUuNjU0LjEzNi4xNjYuMDg5LjI5NS4xOTMuMzg2LjMxMi4wOTMuMTIuMTY1LjIyNS4yMTYuMzE2aC4wNTFWMi4xODJoLjg1VjhoLS44M3YtLjY3OWgtLjA3MWEyLjI1IDIuMjUgMCAwMS0uMjIyLjMxOGMtLjA5NC4xMi0uMjI1LjIyNC0uMzkyLjMxMy0uMTY2LjA4OS0uMzgyLjEzMy0uNjQ4LjEzM3ptLjE4OC0uNzI0YS45OS45OSAwIDAwLjYyLS4xOTMgMS4yIDEuMiAwIDAwLjM4Ni0uNTQzYy4wODktLjIzMS4xMzMtLjUuMTMzLS44MDcgMC0uMzAzLS4wNDMtLjU2OC0uMTMtLjc5NWExLjE2OSAxLjE2OSAwIDAwLS4zODQtLjUzMiAxLjAxIDEuMDEgMCAwMC0uNjI1LS4xOSAxLjAxIDEuMDEgMCAwMC0uNjQuMTk5Yy0uMTcuMTMzLS4yOTguMzEzLS4zODYuNTQzYTIuMjE0IDIuMjE0IDAgMDAtLjEyNy43NzVjMCAuMjkyLjA0My41NTQuMTMuNzg3LjA4Ny4yMzMuMjE2LjQxOC4zODcuNTU0YS45OTguOTk4IDAgMDAuNjM2LjIwMnptNy4xNDIuNzI3Yy0uNDEgMC0uNzY2LS4wOTQtMS4wNzEtLjI4MWExLjg5NiAxLjg5NiAwIDAxLS43MS0uNzg3Yy0uMTY5LS4zMzctLjI1My0uNzMxLS4yNTMtMS4xODIgMC0uNDUzLjA4NC0uODQ4LjI1My0xLjE4N2ExLjg4IDEuODggMCAwMS43MS0uNzkgMi4wMDMgMi4wMDMgMCAwMTEuMDcxLS4yODFjLjQxIDAgLjc2Ni4wOTMgMS4wNzEuMjguMzA1LjE4OC41NDIuNDUyLjcxLjc5LjE2OS4zNC4yNTMuNzM1LjI1MyAxLjE4OCAwIC40NS0uMDg0Ljg0NS0uMjUzIDEuMTgyYTEuODkgMS44OSAwIDAxLS43MS43ODcgMi4wMDQgMi4wMDQgMCAwMS0xLjA3MS4yODF6bS4wMDMtLjcxM2MuMjY1IDAgLjQ4NS0uMDcuNjU5LS4yMWExLjIzIDEuMjMgMCAwMC4zODYtLjU2IDIuMjEgMi4yMSAwIDAwLjEyOC0uNzcgMi4yIDIuMiAwIDAwLS4xMjgtLjc2NyAxLjI1IDEuMjUgMCAwMC0uMzg2LS41NjUgMS4wMSAxLjAxIDAgMDAtLjY2LS4yMTNjLS4yNjYgMC0uNDg4LjA3LS42NjQuMjEzYTEuMjcgMS4yNyAwIDAwLS4zOS41NjUgMi4yNjQgMi4yNjQgMCAwMC0uMTI0Ljc2N2MwIC4yOC4wNDIuNTM3LjEyNS43Ny4wODUuMjMzLjIxNS40Mi4zOS41Ni4xNzUuMTQuMzk3LjIxLjY2NC4yMXptMy44MjktMS45NjZWOGgtLjg1VjMuNjM2aC44MTZ2LjcxaC4wNTRjLjEtLjIzLjI1Ny0uNDE2LjQ3MS0uNTU2LjIxNi0uMTQuNDg4LS4yMS44MTYtLjIxLjI5NyAwIC41NTcuMDYyLjc4LjE4Ny4yMjQuMTIzLjM5OC4zMDcuNTIuNTUxLjEyNC4yNDUuMTg1LjU0Ny4xODUuOTA2VjhoLS44NVY1LjMyN2MwLS4zMTctLjA4Mi0uNTY0LS4yNDYtLjc0Mi0uMTY1LS4xOC0uMzkxLS4yNy0uNjgtLjI3LS4xOTYgMC0uMzcxLjA0My0uNTI1LjEyOGEuOTIuOTIgMCAwMC0uMzYuMzc1Yy0uMDg4LjE2My0uMTMxLjM2LS4xMzEuNTkxem04LjA4Ni0xLjc3M3YuNjgyaC0yLjM4NHYtLjY4MmgyLjM4NHptLTEuNzQ1LTEuMDQ1aC44NXY0LjEyOGMwIC4xNjUuMDI0LjI4OS4wNzQuMzcyYS4zODkuMzg5IDAgMDAuMTkuMTY4Yy4wOC4wMjguMTY2LjA0Mi4yNTguMDQyYS45OTQuOTk0IDAgMDAuMTgtLjAxNGwuMTE5LS4wMjMuMTUzLjcwMmExLjY2NSAxLjY2NSAwIDAxLS41NTEuMDkgMS40OTUgMS40OTUgMCAwMS0uNjI1LS4xMTggMS4wNzIgMS4wNzIgMCAwMS0uNDY5LS4zODdjLS4xMTktLjE3NC0uMTc5LS4zOTMtLjE3OS0uNjU2VjIuNTl6bTMuNjI3IDIuODE4VjhoLS44NDlWMi4xODJoLjgzOHYyLjE2NWguMDU0Yy4xMDItLjIzNS4yNTktLjQyMi40NjktLjU2LjIxLS4xMzguNDg1LS4yMDcuODI0LS4yMDcuMjk5IDAgLjU2LjA2MS43ODQuMTg0LjIyNS4xMjMuNC4zMDcuNTIyLjU1MS4xMjYuMjQzLjE4OC41NDYuMTg4LjkxVjhoLS44NVY1LjMyN2MwLS4zMi0uMDgyLS41NjgtLjI0Ny0uNzQ1LS4xNjQtLjE3OC0uMzk0LS4yNjctLjY4Ny0uMjY3LS4yIDAtLjM4LjA0My0uNTQuMTI4YS45MjIuOTIyIDAgMDAtLjM3Mi4zNzVjLS4wODkuMTYzLS4xMzMuMzYtLjEzMy41OTF6bTUuODQ0IDIuNjhjLS40MyAwLS44LS4wOTMtMS4xMS0uMjc3YTEuODcgMS44NyAwIDAxLS43MTYtLjc4Yy0uMTY3LS4zMzgtLjI1LS43MzMtLjI1LTEuMTg1IDAtLjQ0Ny4wODMtLjg0MS4yNS0xLjE4Mi4xNjgtLjM0MS40MDMtLjYwNy43MDQtLjc5OWExLjk0OCAxLjk0OCAwIDAxMS4wNjMtLjI4NmMuMjQ2IDAgLjQ4NC4wNC43MTYuMTIyLjIzLjA4MS40MzguMjA5LjYyMi4zODMuMTgzLjE3NC4zMjguNC40MzQuNjguMTA2LjI3Ni4xNi42MTIuMTYgMS4wMDh2LjNoLTMuNDd2LS42MzZoMi42MzdjMC0uMjIzLS4wNDYtLjQyLS4xMzYtLjU5M2ExLjAzIDEuMDMgMCAwMC0uOTU4LS41NjMgMS4xMSAxLjExIDAgMDAtLjYyNS4xNzYgMS4xODMgMS4xODMgMCAwMC0uNDA5LjQ1NSAxLjMxMiAxLjMxMiAwIDAwLS4xNDIuNjA1di40OTdjMCAuMjkyLjA1MS41NC4xNTMuNzQ1LjEwNS4yMDQuMjUuMzYuNDM1LjQ2OC4xODYuMTA2LjQwMy4xNi42NS4xNi4xNjIgMCAuMzA4LS4wMjMuNDQxLS4wNjlhLjkxMy45MTMgMCAwMC41NjUtLjU1NGwuODA0LjE0NWMtLjA2NC4yMzctLjE4LjQ0NC0uMzQ2LjYyMmExLjY4IDEuNjggMCAwMS0uNjIyLjQxMiAyLjMyOCAyLjMyOCAwIDAxLS44NS4xNDV6IiBmaWxsPSIjRjJGMkYyIi8+PC9zdmc+")',
                              }}
                            />
                          </div>{" "}

                          <div
                            className="bg-black px-4 py-2 rounded-2xl"
                          >
                            <a

                              className="box-border text-no-underline text-current rounded-[4px] bg-[rgb(51, 51, 51)] inline-flex h-[48px] min-w-[140px]"
                              href="#"
                              target="_blank"
                              style={{
                                backgroundPosition: "50% center",
                                backgroundRepeat: "no-repeat",
                                backgroundImage:
                                  'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE0IiBoZWlnaHQ9IjMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01OS4wNzIgMTguNDE2Yy0yLjIxNyAwLTQuMDMgMS42ODEtNC4wMyAzLjk5MyAwIDIuMzAyIDEuODEzIDMuOTkzIDQuMDMgMy45OTMgMi4yMTggMCA0LjAzLTEuNjkyIDQuMDMtMy45OTMgMC0yLjMxMS0xLjgxMi0zLjk5My00LjAzLTMuOTkzem0wIDYuNDE3Yy0xLjIxNyAwLTIuMjY1LS45OTYtMi4yNjUtMi40MjQgMC0xLjQzOCAxLjA0OC0yLjQyNCAyLjI2NS0yLjQyNHMyLjI2NS45ODYgMi4yNjUgMi40MjRjMCAxLjQyOC0xLjA0OCAyLjQyNC0yLjI2NSAyLjQyNHptLTguNzk0LTYuNDE3Yy0yLjIxOCAwLTQuMDMgMS42ODEtNC4wMyAzLjk5MyAwIDIuMzAyIDEuODEyIDMuOTkzIDQuMDMgMy45OTMgMi4yMTcgMCA0LjAyOS0xLjY5MiA0LjAyOS0zLjk5MyAwLTIuMzExLTEuODAzLTMuOTkzLTQuMDMtMy45OTN6bTAgNi40MTdjLTEuMjE4IDAtMi4yNjUtLjk5Ni0yLjI2NS0yLjQyNCAwLTEuNDM4IDEuMDQ3LTIuNDI0IDIuMjY1LTIuNDI0IDEuMjE3IDAgMi4yNjQuOTg2IDIuMjY0IDIuNDI0IDAgMS40MjgtMS4wNDcgMi40MjQtMi4yNjQgMi40MjR6bS0xMC40NTYtNS4xODZ2MS42OUg0My45Yy0uMTIzLjk1LS40NDQgMS42NTQtLjkyNSAyLjEzMy0uNTk0LjU5Mi0xLjUyIDEuMjQtMy4xNDIgMS4yNC0yLjUxIDAtNC40NzMtMi4wMS00LjQ3My00LjUxIDAtMi40OTggMS45NjMtNC41MDkgNC40NzMtNC41MDkgMS4zNSAwIDIuMzQuNTI2IDMuMDY2IDEuMjEybDEuMTk5LTEuMTkzYy0xLjAyLS45NjgtMi4zNjktMS43MS00LjI3NS0xLjcxLTMuNDM0IDAtNi4zMjIgMi43ODEtNi4zMjIgNi4yMSAwIDMuNDIgMi44ODggNi4yMSA2LjMyMiA2LjIxIDEuODYgMCAzLjI1Ni0uNiA0LjM1LTEuNzM4IDEuMTIzLTEuMTE4IDEuNDcyLTIuNjk2IDEuNDcyLTMuOTY0YTUuMSA1LjEgMCAwMC0uMDk0LTEuMDYyaC01LjcyOHYtLjAxem00Mi43NTYgMS4zMTVjLS4zMy0uODkzLTEuMzUtMi41NDYtMy40MzUtMi41NDYtMi4wNjcgMC0zLjc4NCAxLjYxNi0zLjc4NCAzLjk5MyAwIDIuMjM2IDEuNjk4IDMuOTkzIDMuOTgyIDMuOTkzYTMuOTggMy45OCAwIDAwMy4zNC0xLjc2N2wtMS4zNjgtLjkxMWMtLjQ1My42NjctMS4wNzYgMS4xMDktMS45NzIgMS4xMDktLjg5NiAwLTEuNTM4LS40MDQtMS45NDQtMS4yMTJsNS4zNy0yLjIwOC0uMTktLjQ1MXptLTUuNDczIDEuMzM0Yy0uMDQ4LTEuNTQgMS4xOTgtMi4zMyAyLjA5NC0yLjMzLjY5OSAwIDEuMjkzLjM0OCAxLjQ5MS44NDVsLTMuNTg1IDEuNDg1em0tNC4zNiAzLjg3aDEuNzY1VjE0LjQyNGgtMS43NjV2MTEuNzQ0em0tMi44ODctNi44NThINjkuOGMtLjM5Ni0uNDctMS4xNTEtLjg5Mi0yLjExNC0uODkyLTIuMDEgMC0zLjg1IDEuNzU3LTMuODUgNC4wMTEgMCAyLjIzNiAxLjg0IDMuOTg0IDMuODUgMy45ODQuOTUzIDAgMS43MTgtLjQyMyAyLjExNC0uOTExaC4wNTd2LjU3M2MwIDEuNTMxLS44MjEgMi4zNDktMi4xNDIgMi4zNDktMS4wNzYgMC0xLjc0Ni0uNzctMi4wMi0xLjQybC0xLjUzOC42NEM2NC42MDIgMjguNzAzIDY1Ljc3MiAzMCA2Ny43MTYgMzBjMi4wNjYgMCAzLjgxMi0xLjIxMiAzLjgxMi00LjE2MlYxOC42NmgtMS42N3YuNjQ4em0tMi4wMiA1LjUyNWMtMS4yMTcgMC0yLjIzNi0xLjAxNS0yLjIzNi0yLjQwNSAwLTEuNDEgMS4wMTktMi40MzQgMi4yMzYtMi40MzQgMS4xOTkgMCAyLjE0MiAxLjAzNCAyLjE0MiAyLjQzMyAwIDEuMzkxLS45NDMgMi40MDYtMi4xNDIgMi40MDZ6bTIzLjAwNi0xMC40MWgtNC4yMTh2MTEuNzQ0aDEuNzY0di00LjQ1NGgyLjQ2M2MxLjk1MyAwIDMuODY5LTEuNDA5IDMuODY5LTMuNjQ1IDAtMi4yMzYtMS45MzQtMy42NDUtMy44NzgtMy42NDV6bS4wMzggNS42NTZIODguMzh2LTQuMDNoMi41YTIuMDQxIDIuMDQxIDAgMDEyLjA2NyAyLjAxYzAgLjkyLS43NDUgMi4wMi0yLjA2NiAyLjAyem0xMC44ODktMS42ODJjLTEuMjc0IDAtMi41OTUuNTY0LTMuMTQyIDEuNzk0bDEuNTY2LjY0OWMuMzMtLjY0OS45NTMtLjg2NSAxLjYwNC0uODY1LjkwNiAwIDEuODQuNTQ1IDEuODUgMS41MTN2LjEyMmEzLjk1OCAzLjk1OCAwIDAwLTEuODQtLjQ1Yy0xLjY5IDAtMy4zOTcuOTItMy4zOTcgMi42NCAwIDEuNTY4IDEuMzc3IDIuNTgzIDIuOTI1IDIuNTgzIDEuMTc5IDAgMS44NC0uNTI2IDIuMjQ2LTEuMTQ2aC4wNTZ2LjkxMWgxLjY5OXYtNC41Yy4wMDktMi4wODYtMS41NDgtMy4yNTEtMy41NjctMy4yNTF6bS0uMjE3IDYuNDM2Yy0uNTc2IDAtMS4zNzgtLjI5Mi0xLjM3OC0uOTk2IDAtLjkwMiAxLTEuMjUgMS44NjgtMS4yNS43NzQgMCAxLjE0Mi4xNyAxLjYwNS4zOTUtLjEzMiAxLjA4LTEuMDc2IDEuODUtMi4wOTUgMS44NXptOS45ODMtNi4xODJsLTIuMDE5IDUuMDkyaC0uMDU3bC0yLjA5NS01LjA5MmgtMS44OTZsMy4xNDIgNy4xMjEtMS43OTMgMy45NTZoMS44NEwxMTMuNSAxOC42NWgtMS45NjN6bS0xNS44NTMgNy41MTZoMS43NjVWMTQuNDIzaC0xLjc2NHYxMS43NDR6IiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTIuNDU4IDIuMzk1YTEuOTQgMS45NCAwIDAwLS40NDggMS4zNjN2MjEuNTNjLS4wMy40OTQuMTMuOTgxLjQ0OCAxLjM2MmwuMDY4LjA2OCAxMi4wNTktMTIuMDV2LS4yODJMMi41MjUgMi4zMjZsLS4wNjcuMDY5eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik0xOC41NzYgMTguNjg4bC0zLjk5MS00LjAydi0uMjgybDMuOTktNC4wMy4wODguMDUgNC43OCAyLjcxNWMxLjM2Mi43NjkgMS4zNjIgMi4wMzQgMCAyLjgxM2wtNC43NiAyLjcwNi0uMTA3LjA0OHoiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNMTguNjkyIDE4LjYzbC00LjEwNy00LjEwOEwyLjQ1OCAyNi42NWExLjU4NiAxLjU4NiAwIDAwMi4wMjQuMDU4bDE0LjIyLTguMDc4IiBmaWxsPSJ1cmwoI2MpIi8+PHBhdGggZD0iTTE4LjY5MiAxMC40MTVMNC40NzIgMi4zMzdhMS41ODcgMS41ODcgMCAwMC0yLjAyNC4wNThsMTIuMTM3IDEyLjEyNyA0LjEwNy00LjEwN3oiIGZpbGw9InVybCgjZCkiLz48cGF0aCBvcGFjaXR5PSIuMiIgZD0iTTE4LjU3NiAxOC41NDJsLTE0LjEwNCA4LjAzYTEuNjI1IDEuNjI1IDAgMDEtMS45NDYgMGwtLjA2OC4wNjguMDY4LjA2OGExLjYxNiAxLjYxNiAwIDAwMS45NDYgMGwxNC4yMi04LjA3OC0uMTE2LS4wODh6IiBmaWxsPSIjMDAwIi8+PHBhdGggb3BhY2l0eT0iLjEyIiBkPSJNMi40NTggMjYuNTE0YTEuOTQ3IDEuOTQ3IDAgMDEtLjQ0OC0xLjM2M3YuMTQ2Yy0uMDMuNDk1LjEzLjk4Mi40NDggMS4zNjNsLjA2OC0uMDY5LS4wNjgtLjA3N3ptMjAuOTg0LTEwLjcyNmwtNC44NjYgMi43NTQuMDg3LjA4OCA0Ljc4LTIuNzA2YTEuNzA0IDEuNzA0IDAgMDAuOTcyLTEuNDAyIDEuODEgMS44MSAwIDAxLS45NzMgMS4yNjZ6IiBmaWxsPSIjMDAwIi8+PHBhdGggb3BhY2l0eT0iLjI1IiBkPSJNNC40NzIgMi40NzJsMTguOTcgMTAuNzg1YTEuODEgMS44MSAwIDAxLjk3MyAxLjI2NSAxLjcwMyAxLjcwMyAwIDAwLS45NzMtMS40MDJMNC40NzIgMi4zMzZDMy4xMSAxLjU2NyAyIDIuMjEgMiAzLjc2NnYuMTQ3Yy4wMy0xLjU2NyAxLjEyLTIuMjEgMi40NzItMS40NHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzguMDc3IDQuMDJhMS43NzUgMS43NzUgMCAwMC0uMjIyLS40NjMgMS40MTYgMS40MTYgMCAwMC0uNzYxLS41NzcgMS43NDggMS43NDggMCAwMC0uNTMyLS4wNzdjLS4zMjcgMC0uNjIzLjA4NS0uODg2LjI1M2ExLjcyNCAxLjcyNCAwIDAwLS42MjUuNzQyYy0uMTUxLjMyNC0uMjI3LjcyLS4yMjcgMS4xOSAwIC40NzIuMDc3Ljg3LjIzIDEuMTk2LjE1My4zMjYuMzY0LjU3My42My43NDIuMjY4LjE2OC41NzIuMjUyLjkxMy4yNTIuMzE2IDAgLjU5MS0uMDY0LjgyNi0uMTkzLjIzNy0uMTI5LjQyLS4zMS41NDktLjU0NS4xMy0uMjM3LjE5Ni0uNTE1LjE5Ni0uODM1bC4yMjcuMDQySDM2Ljczdi0uNzI0aDIuMjg3di42NjJjMCAuNDg4LS4xMDQuOTEzLS4zMTMgMS4yNzJhMi4xMjggMi4xMjggMCAwMS0uODU3LjgzYy0uMzY0LjE5NS0uNzguMjkzLTEuMjUuMjkzLS41MjcgMC0uOTg5LS4xMjItMS4zODctLjM2NGEyLjQ2NSAyLjQ2NSAwIDAxLS45MjYtMS4wMzFjLS4yMjEtLjQ0Ny0uMzMyLS45NzgtLjMzMi0xLjU5MSAwLS40NjQuMDY0LS44OC4xOTMtMS4yNXMuMzEtLjY4My41NDItLjk0Yy4yMzUtLjI2LjUxLS40NTguODI3LS41OTRhMi41ODggMi41ODggMCAwMTEuMDQzLS4yMDhjLjMxNCAwIC42MDcuMDQ3Ljg3OC4xNC4yNzIuMDkyLjUxNS4yMjQuNzI3LjM5NGEyLjIzNyAyLjIzNyAwIDAxLjgxNSAxLjM4NGgtLjl6TTQwLjEzIDhWMi4xODJoMy42NDh2Ljc1NmgtMi43N1Y0LjcxaDIuNTh2Ljc1M2gtMi41OHYxLjc4MWgyLjgwNFY4SDQwLjEzem00LjUzNC01LjA2M3YtLjc1NWg0LjUwM3YuNzU2aC0xLjgxNlY4aC0uODc1VjIuOTM3aC0xLjgxMnptOC40OTMtLjc1NVY4aC0uODc4VjIuMTgyaC44Nzh6bS45OTEuNzU2di0uNzU2aDQuNTAzdi43NTZoLTEuODE1VjhoLS44NzVWMi45MzdoLTEuODEzek02Ni44MiA1LjA5YzAgLjYyMS0uMTE1IDEuMTU1LS4zNDIgMS42MDJhMi41MDMgMi41MDMgMCAwMS0uOTM0IDEuMDI5IDIuNTQyIDIuNTQyIDAgMDEtMS4zNDQuMzU4IDIuNTcgMi41NyAwIDAxLTEuMzUtLjM1OCAyLjUwNSAyLjUwNSAwIDAxLS45MzEtMS4wMzJjLS4yMjgtLjQ0Ny0uMzQxLS45OC0uMzQxLTEuNiAwLS42Mi4xMTMtMS4xNTMuMzQtMS41OTkuMjI4LS40NDYuNTM4LS43OS45MzItMS4wMjguMzk2LS4yNC44NDYtLjM2IDEuMzUtLjM2LjUwMiAwIC45NS4xMiAxLjM0NC4zNi4zOTUuMjM5LjcwNy41ODIuOTM0IDEuMDI4LjIyNy40NDYuMzQxLjk3OS4zNDEgMS42em0tLjg3IDBjMC0uNDc0LS4wNzctLjg3Mi0uMjMtMS4xOTZhMS42OCAxLjY4IDAgMDAtLjYyNS0uNzM5IDEuNjI0IDEuNjI0IDAgMDAtLjg5NS0uMjUzYy0uMzM1IDAtLjYzNS4wODUtLjg5OC4yNTNhMS43MDUgMS43MDUgMCAwMC0uNjI1LjczOWMtLjE1MS4zMjQtLjIyNy43MjItLjIyNyAxLjE5NiAwIC40NzMuMDc2Ljg3My4yMjcgMS4xOTkuMTU0LjMyNC4zNjIuNTcuNjI1LjczOC4yNjMuMTY3LjU2My4yNS44OTguMjUuMzMzIDAgLjYzMi0uMDgzLjg5NS0uMjVhMS43IDEuNyAwIDAwLjYyNS0uNzM4Yy4xNTMtLjMyNi4yMy0uNzI2LjIzLTEuMnptNi42Ni0yLjkxVjhoLS44MDdsLTIuOTU4LTQuMjY3aC0uMDUzVjhoLS44NzhWMi4xODJoLjgxMmwyLjk2IDQuMjczaC4wNTRWMi4xODJoLjg3eiIgZmlsbD0iI0YyRjJGMiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjEzLjUxNCIgeTE9IjMuNTM0IiB4Mj0iLTIuODE4IiB5Mj0iMTkuODY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQTBGRiIvPjxzdG9wIG9mZnNldD0iLjAxIiBzdG9wLWNvbG9yPSIjMDBBMUZGIi8+PHN0b3Agb2Zmc2V0PSIuMjYiIHN0b3AtY29sb3I9IiMwMEJFRkYiLz48c3RvcCBvZmZzZXQ9Ii41MSIgc3RvcC1jb2xvcj0iIzAwRDJGRiIvPjxzdG9wIG9mZnNldD0iLjc2IiBzdG9wLWNvbG9yPSIjMDBERkZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBFM0ZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIyNS4yMjMiIHkxPSIxNC41MjIiIHgyPSIxLjY3OSIgeTI9IjE0LjUyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkUwMDAiLz48c3RvcCBvZmZzZXQ9Ii40MSIgc3RvcC1jb2xvcj0iI0ZGQkQwMCIvPjxzdG9wIG9mZnNldD0iLjc4IiBzdG9wLWNvbG9yPSJvcmFuZ2UiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjlDMDAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjE2LjQ2MyIgeTE9IjE2Ljc2MSIgeDI9Ii01LjY4OSIgeTI9IjM4LjkwNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjNBNDQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNDMzExNjIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9Ii0uNTk5IiB5MT0iLTQuNzY5IiB4Mj0iOS4yOSIgeTI9IjUuMTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMzJBMDcxIi8+PHN0b3Agb2Zmc2V0PSIuMDciIHN0b3AtY29sb3I9IiMyREE3NzEiLz48c3RvcCBvZmZzZXQ9Ii40OCIgc3RvcC1jb2xvcj0iIzE1Q0Y3NCIvPjxzdG9wIG9mZnNldD0iLjgiIHN0b3AtY29sb3I9IiMwNkU3NzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEYwNzYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=")',
                              }}
                            />
                          </div>
                        </CardFooter>

                        <div className="hidden lg:flex py-4">
                          <a href="#" className="text-blue font-inter text-base">
                            <span >Download Android APK</span>
                          </a>
                        </div>

                      </Card>

                    </Box>
                  </Box>
                </Wrapper>
              </Container>
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

export default Application