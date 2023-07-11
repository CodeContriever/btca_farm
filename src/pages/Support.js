import React from "react";
import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Header, Footer, Sidebar, Nav, Copyright } from "../components"
import Main from "../components/Main";

// import DraggableBox from '../components/dragDrop/DraggableBox';
// import DroppableArea from '../components/dragDrop/DroppableArea';

import { Box, HStack, Image, Stack, Heading, Text, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, } from '@chakra-ui/react'
import {
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'
import { InputGroup, Input } from '@chakra-ui/react'
import { ButtonGroup, Button } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'





const Support = () => {
  // const [droppedBoxes, setDroppedBoxes] = useState([]);

  // const handleDrop = id => {
  //   const updatedDroppedBoxes = [...droppedBoxes, id];
  //   setDroppedBoxes(updatedDroppedBoxes);
  // };

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
                <div className="box-border flex flex-col gap-6">
                  <h1 className="mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6"
                  >
                    Support
                  </h1>
                  <p
                    className="mb-0 mt-0 text-gray-800 text-base font-medium font-inter leading-6"
                  >
                    Submit an inquiry to our support service
                  </p>
                </div>

                <Card
                  className="box-border flex flex-col flex-grow items-center justify-center rounded-md p-4 bg-white shadow-lg"
                >
                  <CardHeader>
                    <p
                      className="box-border mb-0 mt-0 text-gray-600 text-base font-medium font-inter leading-6"
                    >
                      {"If you have any problems with the BTCAFARM platform, we recommend that you seek advice from your sponsor or team leader. Our community members learn fast and can help each other."}
                    </p>{" "}
                  </CardHeader>

                  <CardBody className="w-full">

                    <Accordion
                      defaultIndex={[0]}
                      allowMultiple
                    >
                      {/* passport/address/phone */}
                      <AccordionItem
                      >

                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Change passport/address/phone
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-row gap-6 mb-6">
                              <Input
                                type='text'
                                variant='filled'
                                isRequired='true'
                                placeholder='Name'
                              />
                              <Input
                                type='email'
                                variant='filled'
                                isRequired='true'
                                placeholder='Email'
                              />
                            </InputGroup>
                          </HStack>

                          <Input
                            type='text'
                            size='lg'
                            placeholder='Description'
                          />

                          <Box
                            className="box-border grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[24px] mt-4"
                          >
                            <div className="box-border">
                              <p
                                className="box-border mt-0 text-gray-600 text-base font-medium font-inter leading-6 mb-[24px]"
                              >
                                {"Follow the requirements for screens:"}
                              </p>{" "}

                              <ul
                                className="box-border mb-0 mt-0 pl-0"
                              >
                                <li
                                  className="box-border flex"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}

                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    You cannot attach more than five files.
                                  </span>
                                </li>

                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-sm leading-5 break-words"
                                  >
                                    The screen size should not exceed 15 MB.
                                  </span>
                                </li>
                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    Screen format: .pdf, .png, .jpeg, .jpg, .bmp, .tiff, .tif
                                  </span>
                                </li>
                              </ul>
                            </div>{" "}

                            <Card
                              maxW='sm'
                              className="box-border border-dashed border-gray-300 rounded-md bg-gray-100 text-gray-300 cursor-pointer">
                              <CardBody>
                                <Image
                                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                  alt='Green double couch with wooden legs'
                                  className="border-0 box-content max-w-full align-middle h-[120px] w-[164px]"
                                />
                                <Box
                                  className="flex flex-col items-center justify-center "
                                >
                                  <h1
                                    className="box-border mb-0 text-gray-700 text-base font-inter font-medium leading-5 mt-4"
                                  >
                                    Drag and drop your photo here
                                  </h1>

                                  <p
                                    className="box-border mb-0 text-gray-400 text-base font-inter leading-5 break-words mt-2"
                                  >
                                    or click to browse
                                  </p>

                                </Box>
                              </CardBody>

                            </Card>
                          </Box>

                        </AccordionPanel>
                      </AccordionItem>

                      {/* email address */}
                      <AccordionItem
                      >

                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Change your e-mail address
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-row gap-6 mb-6">
                              <Input
                                type='text'
                                variant='filled'
                                isRequired='true'
                                placeholder='Name'
                              />
                              <Input
                                type='email'
                                variant='filled'
                                isRequired='true'
                                placeholder='Email'
                              />
                            </InputGroup>
                          </HStack>

                          <Input
                            type='email'
                            size='lg'
                            variant='filled'
                            isRequired='true'
                            placeholder='New email'
                            className="mb-4"
                          />

                          <Input
                            type='text'
                            size='lg'
                            placeholder='Description'
                          />

                          <Box
                            className="box-border grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[24px] mt-4"
                          >
                            <div className="box-border">
                              <p
                                className="box-border mt-0 text-gray-600 text-base font-inter font-medium leading-6 mb-[24px]"
                              >
                                {"Follow the requirements for screens:"}
                              </p>{" "}

                              <ul
                                className="box-border mb-0 mt-0 pl-0"
                              >
                                <li
                                  className="box-border flex"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}

                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    You cannot attach more than five files.
                                  </span>
                                </li>

                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    The screen size should not exceed 15 MB.
                                  </span>
                                </li>
                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    Screen format: .pdf, .png, .jpeg, .jpg, .bmp, .tiff, .tif
                                  </span>
                                </li>
                              </ul>
                            </div>{" "}

                            <Card
                              maxW='sm'
                              className="box-border border-dashed border-gray-300 rounded-md bg-gray-100 text-gray-300 cursor-pointer">
                              <CardBody>
                                <Image
                                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                  alt='Green double couch with wooden legs'
                                  className="border-0 box-content max-w-full align-middle h-[120px] w-[164px]"
                                />
                                <Box
                                  className="flex flex-col items-center justify-center "
                                >
                                  <h1
                                    className="box-border mb-0 text-gray-700 text-base font-inter font-medium leading-5 mt-4"
                                  >
                                    Drag and drop your photo here
                                  </h1>

                                  <p
                                    className="box-border mb-0 text-gray-400 text-base font-inter leading-5 break-words mt-2"
                                  >
                                    or click to browse
                                  </p>

                                </Box>
                              </CardBody>

                            </Card>
                          </Box>

                          <Button
                            colorScheme='blue'
                            className="ml-[730px] mt-8"
                          >
                            <a href="#">Send</a>
                          </Button>

                        </AccordionPanel>
                      </AccordionItem>

                      {/* Question about purchases */}
                      <AccordionItem
                      >

                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Question about purchases
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-row gap-6 mb-6">
                              <Input
                                type='text'
                                variant='filled'
                                isRequired='true'
                                placeholder='Name'
                              />
                              <Input
                                type='email'
                                variant='filled'
                                isRequired='true'
                                placeholder='Email'
                              />
                            </InputGroup>
                          </HStack>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-col gap-6 mb-6">

                              <Menu
                                className="flex  flex-col gap-8 w-full"
                              >
                                <MenuButton
                                  px={4}
                                  py={2}
                                  transition='all 0.2s'
                                  borderRadius='md'
                                  borderWidth='1px'
                                // _hover={{ bg: 'gray.400' }}
                                // _expanded={{ bg: 'blue.400' }}
                                // _focus={{ boxShadow: 'outline' }}
                                // className="flex flex-col gap-8 w-full"
                                >
                                  Payment method
                                  <ChevronDownIcon />
                                </MenuButton>
                                <MenuList>
                                  <MenuItem>Platincoin</MenuItem>
                                  <MenuItem>Interkassa</MenuItem>
                                  {/* <MenuDivider /> */}
                                  <MenuItem>KLana</MenuItem>
                                  <MenuItem>Cash</MenuItem>
                                </MenuList>
                              </Menu>
                              {/* <Input
                              type='text'
                              size='lg'
                              variant='filled'
                              isRequired='true'
                              placeholder='Payment method'
                              className="mb-4"
                            /> */}

                              <Input
                                type='text'
                                size='lg'
                                placeholder='Description'
                              />
                            </InputGroup>
                          </HStack>

                          <Box
                            className="box-border grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[24px] mt-4"
                          >
                            <div className="box-border">
                              <p
                                className="box-border mt-0 text-gray-600 text-base font-inter font-medium leading-6 mb-[24px]"
                              >
                                {"Follow the requirements for screens:"}
                              </p>{" "}

                              <ul
                                className="box-border mb-0 mt-0 pl-0"
                              >
                                <li
                                  className="box-border flex"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}

                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    You cannot attach more than five files.
                                  </span>
                                </li>

                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    The screen size should not exceed 15 MB.
                                  </span>
                                </li>
                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-sm leading-5 break-words"
                                  >
                                    Screen format: .pdf, .png, .jpeg, .jpg, .bmp, .tiff, .tif
                                  </span>
                                </li>
                              </ul>
                            </div>{" "}

                            <Card
                              maxW='sm'
                              className="box-border border-dashed border-gray-300 rounded-md bg-gray-100 text-gray-300 cursor-pointer">
                              <CardBody>
                                <Image
                                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                  alt='Green double couch with wooden legs'
                                  className="border-0 box-content max-w-full align-middle h-[120px] w-[164px]"
                                />
                                <Box
                                  className="flex flex-col items-center justify-center "
                                >
                                  <h1
                                    className="box-border mb-0 text-gray-700 text-base font-inter  font-medium leading-5 mt-4"
                                  >
                                    Drag and drop your photo here
                                  </h1>

                                  <p
                                    className="box-border mb-0 text-gray-400 text-base font-inter leading-5 break-words mt-2"
                                  >
                                    or click to browse
                                  </p>

                                </Box>
                              </CardBody>

                            </Card>
                          </Box>

                          <Button
                            colorScheme='blue'
                            className="ml-[730px] mt-8"
                          >
                            <a href="#">Send</a>
                          </Button>

                        </AccordionPanel>
                      </AccordionItem>

                      {/* Promo/Event/Webinar */}
                      <AccordionItem
                      >

                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Promo / Event / Webinar
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-row gap-6 mb-6">
                              <Input
                                type='text'
                                variant='filled'
                                isRequired='true'
                                placeholder='Name'
                              />
                              <Input
                                type='email'
                                variant='filled'
                                isRequired='true'
                                placeholder='Email'
                              />
                            </InputGroup>
                          </HStack>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-col gap-6 mb-6">
                              {/* <Input
                              type='text'
                              size='lg'
                              variant='filled'
                              isRequired='true'
                              placeholder='Payment method'
                              className="mb-4"
                            /> */}

                              <Input
                                type='text'
                                size='lg'
                                placeholder='Description'
                              />
                            </InputGroup>
                          </HStack>

                          <Box
                            className="box-border grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[24px] mt-4"
                          >
                            <div className="box-border">
                              <p
                                className="box-border mt-0 text-gray-600 text-base font-inter font-medium leading-6 mb-[24px]"
                              >
                                {"Follow the requirements for screens:"}
                              </p>{" "}

                              <ul
                                className="box-border mb-0 mt-0 pl-0"
                              >
                                <li
                                  className="box-border flex"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}

                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    You cannot attach more than five files.
                                  </span>
                                </li>

                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-sm leading-5 break-words"
                                  >
                                    The screen size should not exceed 15 MB.
                                  </span>
                                </li>
                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    Screen format: .pdf, .png, .jpeg, .jpg, .bmp, .tiff, .tif
                                  </span>
                                </li>
                              </ul>
                            </div>{" "}

                            <Card
                              maxW='sm'
                              className="box-border border-dashed border-gray-300 rounded-md bg-gray-100 text-gray-300 cursor-pointer">
                              <CardBody>
                                <Image
                                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                  alt='Green double couch with wooden legs'
                                  className="border-0 box-content max-w-full align-middle h-[120px] w-[164px]"
                                />
                                <Box
                                  className="flex flex-col items-center justify-center "
                                >
                                  <h1
                                    className="box-border mb-0 text-gray-700 text-base font-inter  font-medium leading-5 mt-4"
                                  >
                                    Drag and drop your photo here
                                  </h1>

                                  <p
                                    className="box-border mb-0 text-gray-400 text-base font-inter leading-5 break-words mt-2"
                                  >
                                    or click to browse
                                  </p>

                                </Box>
                              </CardBody>

                            </Card>
                          </Box>

                          <Button
                            colorScheme='blue'
                            className="ml-[730px] mt-8"
                          >
                            <a href="#">Send</a>
                          </Button>

                        </AccordionPanel>
                      </AccordionItem>

                      {/* Questions about verification */}
                      <AccordionItem
                      >

                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Questions about verification
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-row gap-6 mb-6">
                              <Input
                                type='text'
                                variant='filled'
                                isRequired='true'
                                placeholder='Name'
                              />
                              <Input
                                type='email'
                                variant='filled'
                                isRequired='true'
                                placeholder='Email'
                              />
                            </InputGroup>
                          </HStack>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-col gap-6 mb-6">
                              {/* <Input
                              type='text'
                              size='lg'
                              variant='filled'
                              isRequired='true'
                              placeholder='Payment method'
                              className="mb-4"
                            /> */}

                              <Input
                                type='text'
                                size='lg'
                                placeholder='Description'
                              />
                            </InputGroup>
                          </HStack>

                          <Box
                            className="box-border grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[24px] mt-4"
                          >
                            <div className="box-border">
                              <p
                                className="box-border mt-0 text-gray-600 text-base font-inter font-medium leading-6 mb-[24px]"
                              >
                                {"Follow the requirements for screens:"}
                              </p>{" "}

                              <ul
                                className="box-border mb-0 mt-0 pl-0"
                              >
                                <li
                                  className="box-border flex"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}

                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    You cannot attach more than five files.
                                  </span>
                                </li>

                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    The screen size should not exceed 15 MB.
                                  </span>
                                </li>
                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    Screen format: .pdf, .png, .jpeg, .jpg, .bmp, .tiff, .tif
                                  </span>
                                </li>
                              </ul>
                            </div>{" "}

                            <Card
                              maxW='sm'
                              className="box-border border-dashed border-gray-300 rounded-md bg-gray-100 text-gray-300 cursor-pointer">
                              <CardBody>
                                <Image
                                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                  alt='Green double couch with wooden legs'
                                  className="border-0 box-content max-w-full align-middle h-[120px] w-[164px]"
                                />
                                <Box
                                  className="flex flex-col items-center justify-center "
                                >
                                  <h1
                                    className="box-border mb-0 text-gray-700 text-base font-inter font-medium leading-5 mt-4"
                                  >
                                    Drag and drop your photo here
                                  </h1>

                                  <p
                                    className="box-border mb-0 text-gray-400 text-base font-inter leading-5 break-words mt-2"
                                  >
                                    or click to browse
                                  </p>

                                </Box>
                              </CardBody>

                            </Card>
                          </Box>

                          <Button
                            colorScheme='blue'
                            className="ml-[730px] mt-8"
                          >
                            <a href="#">Send</a>
                          </Button>

                        </AccordionPanel>
                      </AccordionItem>

                      {/* Account recovery, safety */}
                      <AccordionItem
                      >

                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Account recovery, safety
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-row gap-6 mb-6">
                              <Input
                                type='text'
                                variant='filled'
                                isRequired='true'
                                placeholder='Name'
                              // _placeholder={{ color: "red", fontStyle: "italic" }} 
                              />
                              <Input
                                type='email'
                                variant='filled'
                                isRequired='true'
                                placeholder='Email'
                              />
                            </InputGroup>
                          </HStack>

                          <HStack spacing={6}>
                            <InputGroup
                              size='lg'
                              isRequired='true'
                              className="flex flex-col gap-6 mb-6">
                              {/* <Input
                              type='text'
                              size='lg'
                              variant='filled'
                              isRequired='true'
                              placeholder='Payment method'
                              className="mb-4"
                            /> */}

                              <Input
                                type='text'
                                size='lg'
                                placeholder='Description'
                              />
                            </InputGroup>
                          </HStack>

                          <Box
                            className="box-border grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[24px] mt-4"
                          >
                            <div className="box-border">
                              <p
                                className="box-border mt-0 text-gray-600 text-base font-inter font-medium leading-6 mb-[24px]"
                              >
                                {"Follow the requirements for screens:"}
                              </p>{" "}

                              <ul
                                className="box-border mb-0 mt-0 pl-0"
                              >
                                <li
                                  className="box-border flex"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}

                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    You cannot attach more than five files.
                                  </span>
                                </li>

                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    The screen size should not exceed 15 MB.
                                  </span>
                                </li>
                                <li
                                  className="box-border flex mt-4"
                                >
                                  <svg
                                    className="box-border text-green-500 flex-shrink-0 mr-2"
                                    height="16"
                                    width="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clipRule="evenodd"
                                      d="M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zm-1.334 0a5.333 5.333 0 11-1.372-3.571L7.333 9.057 5.471 7.195a.667.667 0 10-.942.943L6.39 10c.521.52 1.365.52 1.886 0l4.458-4.458c.383.735.6 1.571.6 2.458z"
                                      fillRule="evenodd"
                                      style={{ boxSizing: "border-box" }}
                                    />
                                  </svg>{" "}
                                  <span
                                    className="box-border outline-none text-gray-400 text-base font-inter leading-5 break-words"
                                  >
                                    Screen format: .pdf, .png, .jpeg, .jpg, .bmp, .tiff, .tif
                                  </span>
                                </li>
                              </ul>
                            </div>{" "}

                            <Card
                              maxW='sm'
                              className="box-border border-dashed border-gray-300 rounded-md bg-gray-100 text-gray-300 cursor-pointer">
                              <CardBody>
                                <Image
                                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                  alt='Green double couch with wooden legs'
                                  className="border-0 box-content max-w-full align-middle h-[120px] w-[164px]"
                                />
                                <Box
                                  className="flex flex-col items-center justify-center "
                                >
                                  <h1
                                    className="box-border mb-0 text-gray-700 text-base font-inter  font-medium leading-5 mt-4"
                                  >
                                    Drag and drop your photo here
                                  </h1>

                                  <p
                                    className="box-border mb-0 text-gray-400 text-base font-inter leading-5 break-words mt-2"
                                  >
                                    or click to browse
                                  </p>

                                </Box>
                              </CardBody>

                            </Card>
                          </Box>

                          <Button
                            colorScheme='blue'
                            className="ml-[730px] mt-8"
                          >
                            <a href="#">Send</a>
                          </Button>

                        </AccordionPanel>
                      </AccordionItem>

                    </Accordion>
                  </CardBody>

                  <CardFooter
                    className=""
                  >
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

export default Support