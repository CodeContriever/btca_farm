import React from 'react'
import { Box, Image } from '@chakra-ui/react';
import Wrapper from './Wrapper';
import { MdDashboard, MdOutlineContactSupport, MdOutlineAppShortcut } from 'react-icons/md';
import { IoWalletOutline, IoHelpBuoyOutline } from 'react-icons/io5';
import { GrLicense } from 'react-icons/gr';

import { Dropdown } from 'flowbite-react';

import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'

import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from '@chakra-ui/react'




const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      {" "}
      <aside
        className="box-border hidden lg:block transition-transform transition duration-300 ease-in-out bottom-0 flex-shrink-0 max-h-screen-[calc(100vh-88px)] left-0 top-[88px] overflow-hidden sticky w-auto z-10 transform-none p-0"
      >
        {" "}

        {/* main sidebar */}
        <Wrapper>
          <ul
            className="box-border mb-0 mt-0 border border-gray-200 rounded-md p-[4px] bg-gray-100 pl-[4px] pt-[24px] flex flex-col gap-8"
          >
            {/* Dashboard */}
            <li
              className="box-border block rounded-md"
            >
              <a
                className="box-border px-2 flex items-center justify-start no-underline rounded-md px-2 transition duration-300 ease-in-out font-inter text-[16px] font-medium leading-6  cursor-pointer relative w-full text-purple-600"
                href="/dashboard"
              >
                <MdDashboard
                  size={20}
                  className="box-border flex-shrink-0"
                />
                {" "}
                <span
                  className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis ml-[8px] block"
                >
                  Dashboard
                </span>
              </a>
            </li>

            {/* Application */}
            <li
              className="box-border block mt-[4px] rounded-md"
            >
              <a
                className="box-border px-2 text-no-underline rounded-md transition duration-300 ease-in-out text-gray-700 font-inter text-base font-medium leading-6 flex items-center cursor-pointer relative w-full justify-start"
                href="/application"
              >
                <MdOutlineAppShortcut
                  size={20}
                  className="box-border flex-shrink-0"
                />
                {" "}
                <span
                  className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis ml-[8px] block"
                >
                  Applications
                </span>
              </a>
            </li>

            {/* Wallet */}
            <li
              className="box-border block mt-[4px] rounded-md"
            >
              <a
                className="box-border px-2 bg-transparent border-none rounded-md px-[4px] transition duration-300 text-gray-700 font-inter text-base font-medium leading-6 flex items-center cursor-pointer h-[12px] relative w-full justify-start"
                href="/wallet"
              >
                <IoWalletOutline
                  size={20}
                  className="box-border flex-shrink-0"
                />
                {" "}
                <span
                  className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis ml-[8px] block"
                >
                  My Wallet
                </span>
              </a>
            </li>

            {/* License keys */}
            <li
              className="box-border block mt-[4px] rounded-md"
            >
              <a
                className="box-border px-2 rounded-md p-0 transition duration-300 ease-in-out text-gray-700 font-inter text-[16px] font-semibold leading-6 flex items-center cursor-pointer  relative w-full justify-start"
                href="/license"
              >
                <GrLicense
                  size={16}
                  className="box-border flex-shrink-0"
                />
                {" "}
                <span
                  className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis ml-2 block"
                >
                  License Keys
                </span>
              </a>
            </li>

            {/* Activation */}
            <li
              className="box-border block mt-[4px] rounded-md"
            >
              <a
                className="box-border px-2 no-underline rounded-md transition duration-300 ease-in-out text-gray-700 font-inter text-base font-medium leading-6 flex items-center cursor-pointer relative w-full justify-start"
                href="/activation"
              >
                <svg
                  className="plc-svgIcon sidebarFarmMenuItem__icon"
                  height="20"
                  width="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ boxSizing: "border-box", flexShrink: 0 }}
                >
                  <path
                    clipRule="evenodd"
                    d="M8.4 4.4h3.2c1.142 0 1.918.001 2.519.053.584.05.883.14 1.092.252.501.269.91.697 1.165 1.224.106.219.193.533.24 1.146.05.63.05 1.446.05 2.645v.56c0 1.2 0 2.014-.05 2.645-.047.613-.134.927-.24 1.146a2.737 2.737 0 01-1.165 1.224c-.209.111-.508.202-1.092.252-.6.052-1.377.053-2.519.053H8.4c-1.142 0-1.919-.001-2.519-.053-.584-.05-.883-.14-1.092-.252a2.737 2.737 0 01-1.165-1.224c-.106-.219-.193-.533-.24-1.146-.05-.63-.05-1.446-.05-2.645v-.56c0-1.2 0-2.014.05-2.645.047-.613.134-.927.24-1.146a2.737 2.737 0 011.165-1.224c.209-.111.508-.202 1.092-.252C6.481 4.4 7.258 4.4 8.4 4.4zM2 9.72c0-2.352 0-3.528.436-4.427a4.106 4.106 0 011.748-1.835C5.04 3 6.16 3 8.4 3h3.2c2.24 0 3.36 0 4.216.458a4.106 4.106 0 011.748 1.835C18 6.192 18 7.368 18 9.72v.56c0 2.352 0 3.528-.436 4.427a4.106 4.106 0 01-1.748 1.835C14.96 17 13.84 17 11.6 17H8.4c-2.24 0-3.36 0-4.216-.458a4.106 4.106 0 01-1.748-1.835C2 13.808 2 12.632 2 10.28v-.56zm4.333-3.045c0-.483-.373-.875-.833-.875-.46 0-.833.392-.833.875s.373.875.833.875c.46 0 .833-.392.833-.875zm2.334 0c0-.483-.373-.875-.834-.875-.46 0-.833.392-.833.875s.373.875.833.875c.46 0 .834-.392.834-.875zm1.5-.875c.46 0 .833.392.833.875s-.373.875-.833.875c-.46 0-.834-.392-.834-.875s.373-.875.834-.875zm2.612 2.98a.725.725 0 01.05.988l-3 3.5a.645.645 0 01-.922.07l-2-1.75a.724.724 0 01-.086-.986.645.645 0 01.94-.09l1.506 1.319 2.57-3a.645.645 0 01.942-.051z"
                    fillRule="evenodd"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>{" "}
                <span
                  className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis ml-[8px] block"
                >
                  Activation
                </span>
              </a>
            </li>

            {/* Payouts */}
            <li
              className="box-border block mt-[4px] rounded-md"
            >
              <a
                className="box-border bg-transparent border-none rounded-md p-0 px-2 transition duration-300 ease-in-out text-gray-700 font-inter text-base font-medium leading-6 flex items-center cursor-pointer relative w-full justify-start"
                href="/payout"
              >
                <svg
                  className="plc-svgIcon sidebarFarmMenuItem__icon"
                  height="20"
                  width="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ boxSizing: "border-box", flexShrink: 0 }}
                >
                  <path
                    clipRule="evenodd"
                    d="M16.547 7.298h4.083a2.355 2.355 0 012.355 2.355v10.992A2.355 2.355 0 0120.63 23H6.498a2.355 2.355 0 01-2.356-2.355v-5.496h.02a7.852 7.852 0 1112.385-7.851zM3.631 5.378a6.281 6.281 0 00-1.059 3.49 6.288 6.288 0 006.281 6.28 6.28 6.28 0 10-5.222-9.77zM6.498 21.43H20.63a.785.785 0 00.785-.785v-3.14h-1.57a2.355 2.355 0 110-4.712h1.57v-3.14a.785.785 0 00-.785-.785h-3.926a7.842 7.842 0 01-10.992 7.19v4.587a.785.785 0 00.786.785zm12.791-5.726a.79.79 0 00.556.23h1.57v-1.57h-1.57a.785.785 0 00-.555 1.34zM5.8 8.2a.8.8 0 000 1.6h4.84l-1.834 1.834a.8.8 0 001.132 1.132l3.137-3.137a.889.889 0 000-1.258L9.938 5.234a.8.8 0 00-1.132 1.132L10.641 8.2H5.8z"
                    fillRule="evenodd"
                    style={{ boxSizing: "border-box" }}
                  />
                </svg>{" "}
                <span
                  className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis ml-[8px] block"
                >
                  Payouts
                </span>
              </a>
            </li>
          </ul>
        </Wrapper>{" "}


        {/* Support & Help */}
        <Wrapper>
          <ul
            className="box-border flex flex-col mb-0 border-solid border-2 border-gray-200 rounded-md p-[4px] bg-gray-100 pl-[4px] mt-[8px]"
          >

            {/* Support */}
            <li
              className="box-border rounded-md"
            >
              <a
                className="box-border text-decoration-none rounded-md px-2 transition duration-300 ease-in-out text-gray-700 font-inter text-base font-medium leading-6 flex items-center cursor-pointer h-[48px] relative w-full justify-start"
                href="/support"
              >
                <MdOutlineContactSupport
                  size={20}
                  className="box-border flex-shrink-0"
                />
                {" "}
                <span
                  className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis ml-[8px] block"
                >
                  Support
                </span>
              </a>
            </li>

            {/* Help */}
            <li
              className="box-border mt-[4px] rounded-md"
            >
              <Button
                className="box-border bg-transparent border-0 m-0  antialiased tracking-normal  normal-case font-inherit font-inter rounded-md transition duration-300 ease-in-out text-gray-700 text-base font-medium leading-6 flex items-center cursor-pointer relative justify-start"
                ref={btnRef} onClick={onOpen}
              >
                <IoHelpBuoyOutline
                  size={20}
                  className="box-border flex-shrink-0"
                />
                {" "}
                <span
                  className="box-border outline-none ml-[8px] block"
                >
                  Help
                </span>
              </Button>

              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"lg"}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Instructions</DrawerHeader>

                  <DrawerBody>
                    {/* <Input placeholder='Type here...' /> */}
                    <Box
                    className='flex flex-col gap-4'
                    >

                      <div>
                        <p>
                          We have prepared special detailed instructions for Farming License owners, where we will show you how to start farming tokens and what you will need.
                        </p>
                      </div>

                      <div>
                        <p>
                          Farming is a simple and convenient way to farm Ultima tokens
                        </p>
                      </div>

                      <Menu>
                        <MenuButton
                          // px={8}
                          py={4}
                          transition='all 0.2s'
                          borderRadius='md'
                          borderWidth='1px'
                          // _hover={{ bg: 'gray.400' }}
                          _expanded={{ bg: 'blue.400' }}
                          _focus={{ boxShadow: 'outline' }}
                          className='w-full'
                          // arrowPadding="50px"
                        >
                          Complete the following steps to start farming <ChevronDownIcon />
                        </MenuButton>
                        <MenuList
                        >
                          <MenuItem>
                            <h1>Purchase BTCA Farming License</h1>
                            <p>
                              Farming licenses are available for purchase at the bottom of the dashboard page. Licenses vary in Max Load, that is the number of tokens that can be used for farming. The license is valid for one year.
                            </p>
                          </MenuItem>

                          <MenuItem>
                            <h1>Purchase BTCA Farming Units</h1>
                            <p>
                              After purchasing a license, you get access to Ultima Farming Units, the main product to mine Ultima tokens. By paying for a license you purchase a Max Load for farming, and by paying for a Farming Unit you load the Max Load and start the farming process.
                            </p>
                          </MenuItem>
                        </MenuList>
                      </Menu>

                      <div className='flex flex-col'>
                        <h1 className='mb-4'>
                          Each transaction is divided into two parts in a 60/40 ratio: 
                          </h1>

                          <div className='flex flex-col gap-8'>
                          <div className='flex flex-row gap-4'>
                            <Image />
                            <p>60% goes to BTCA Available Balance and these tokens are immediately available for withdrawal to a wallet or for paying for new licenses;</p>
                          </div>

                          <div className='flex flex-row gap-4'>
                            <Image />
                            <p>40% goes to BTCA Upgrade Balance - you can use this balance only to pay for new licenses, thereby upgrading your farm.</p>
                          </div>
                          </div>

                      </div>

                      <div
                      className='flex flex-col gap-8 mt-8'
                      >
                        <p>
                        Each unit provides a certain number of BTCA tokens for farming, and they are kept on a special FROZEN balance for the unit work period.
                        </p>

                        <p>
                        All available Farming Units can be found in the Farming History tab. And the Frozen History displays the number of frozen coins.
                        </p>
                      </div>

                    </Box>
                  </DrawerBody>

                  <DrawerFooter
                  >
                      <div className='flex flex-col gap-8'>
                    <Image />
                    <p>
                      We hope that we’ve answered all your questions about farming with the Farming License. If you still have some questions left, our support service is always happy to help!
                      <span><a>support@btcafarm.com</a></span>
                      </p>
                    <Button variant='outline' mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    </div>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </li>
          </ul>
        </Wrapper>{" "}

      </aside>

    </>
  )
}

export default Sidebar