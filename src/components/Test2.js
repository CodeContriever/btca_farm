// import React from 'react'
// import './styles/Header.module.css';
// import logo from "../assets copy/images/logo.png"
// import Wrapper from './Wrapper';


// import { BellIcon } from '@chakra-ui/icons'
// import { Box, Button, Text, Wrap, useColorMode, useColorModeValue } from '@chakra-ui/react';
// // import { Avatar } from '@chakra-ui/react';
// import { WrapItem } from '@chakra-ui/react';
// import { Image } from '@chakra-ui/react'

// import { Navbar, Dropdown, Avatar } from 'flowbite-react';
// import Container from './Container';


// const Nav = () => {
//   const { toggleColorMode } = useColorMode()
//   const bg = useColorModeValue('red.500', 'red.200')
//   const color = useColorModeValue('white', 'gray.800')

//   return (

//     <Navbar
//       fluid
//       rounded
//     >
//       <Navbar.Brand href="#">
//         <img
//           alt="BTCA_FARM logo"
//           className="relative mr-3 h-6 sm:h-9"
//           src="/logo.png"
//         />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//           BTCA_FARM
//         </span>
//       </Navbar.Brand>

//       <div className="flex md:order-2">
//         <Navbar.Toggle />

//       </div>

//       <Navbar.Collapse
//         className='md:hidden'
//       >
//         <Navbar.Link
//           active
//           href="/dashboard"
//         >
//           <p>
//             Dashboard
//           </p>
//         </Navbar.Link>
//         <Navbar.Link href="#">
//           Applications
//         </Navbar.Link>
//         <Navbar.Link href="#">
//           My Wallets
//         </Navbar.Link>
//         <Navbar.Link href="#">
//           License Keys
//         </Navbar.Link>
//         <Navbar.Link href="#">
//           Activation
//         </Navbar.Link>
//         <Navbar.Link href="#">
//           Activation
//         </Navbar.Link>
//       </Navbar.Collapse>

//       <Box
//         className='absolute md:left-[300px] lg:left-[520px] xl:left-[550px] 2xl:left-[850px]'
//       >
//         <Container
//           className='hidden md:flex gap-8 justify-center items-center'
//         >

//           <Wrapper>
//             <button className="flex items-center p-2 transition-transform duration-300 ease-in transform-gpu hover:-translate-y-1 hover:scale-110 font-inter cursor-pointer">

//               <BellIcon  w={12} h={10} />

//               <span className="absolute top-1/4 right-1 px-1 py-1 text-xs font-bold bg-purple-600 text-white rounded-full">
//                 124
//               </span>
//             </button>
//           </Wrapper>

//           <Wrapper>
//             <button
//               onClick={toggleColorMode}
//               className="box-border bg-inherit border-0 m-0 overflow-visible font-normal font-inter rounded-6 outline-none px-8 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 self-center text-gray-700 cursor-pointer flex"
//             >
//               <svg
//                 height="28"
//                 width="28"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ boxSizing: "border-box" }}
//               >
//                 <path
//                   d="M20.147 8.836A.5.5 0 0120 8.483V4.5a.5.5 0 00-.5-.5h-3.982a.5.5 0 01-.354-.147l-2.81-2.81a.5.5 0 00-.707 0l-2.81 2.81A.5.5 0 018.483 4H4.5a.5.5 0 00-.5.5v3.983a.5.5 0 01-.146.353l-2.81 2.81a.5.5 0 000 .707l2.81 2.81a.5.5 0 01.146.354V19.5a.5.5 0 00.5.5h3.983a.5.5 0 01.354.146l2.81 2.81a.5.5 0 00.707 0l2.81-2.81a.5.5 0 01.354-.146H19.5a.5.5 0 00.5-.5v-3.983a.5.5 0 01.147-.353l2.81-2.81a.5.5 0 000-.708l-2.81-2.81zM12 18a5.976 5.976 0 01-1.479-.187c-.413-.106-.43-.658-.081-.903A5.99 5.99 0 0013 12a5.99 5.99 0 00-2.56-4.91c-.35-.245-.332-.797.081-.903.474-.122.97-.187 1.48-.187 3.31 0 6 2.69 6 6s-2.69 6-6 6z"
//                 />
//               </svg>
//             </button>{" "}
//           </Wrapper>

//           <Wrapper
//             className='hidden xl:block'
//           >
//             <button
//               className="box-border bg-transparent border-0 m-0 overflow-visible antialiased tracking-normal text-left font-normal font-inter outline-none transition-colors duration-300 ease-in-out self-center text-gray-700 cursor-pointer flex"
//             >
//               <span
//                 className="box-border outline-none bg-center bg-cover bg-no-repeat inline-block h-[24px] w-[24px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTJ6IiBmaWxsPSIjRjBGMEYwIi8+PHBhdGggZD0iTTIuNDggNC42OTVBMTEuOTU2IDExLjk1NiAwIDAwLjQxMyA4Ljg3aDYuMjQzTDIuNDggNC42OTV6TTIzLjU4NyA4Ljg3YTExLjk1NSAxMS45NTUgMCAwMC0yLjA2Ny00LjE3NkwxNy4zNDMgOC44N2g2LjI0M3pNLjQxMyAxNS4xM2ExMS45NTcgMTEuOTU3IDAgMDAyLjA2NyA0LjE3Nmw0LjE3Ni00LjE3NUguNDEzek0xOS4zMDYgMi40OEExMS45NTcgMTEuOTU3IDAgMDAxNS4xMy40MTV2Ni4yNDJsNC4xNzYtNC4xNzV6TTQuNjk0IDIxLjUyYTExLjk1NyAxMS45NTcgMCAwMDQuMTc1IDIuMDY3di02LjI0M0w0LjY5NCAyMS41MnpNOC44NjkuNDE0QTExLjk1OCAxMS45NTggMCAwMDQuNjk0IDIuNDhsNC4xNzUgNC4xNzVWLjQxNHptNi4yNjEgMjMuMTczYTExLjk1NiAxMS45NTYgMCAwMDQuMTc2LTIuMDY4bC00LjE3Ni00LjE3NXY2LjI0M3ptMi4yMTQtOC40NTdsNC4xNzUgNC4xNzZhMTEuOTU1IDExLjk1NSAwIDAwMi4wNjgtNC4xNzVoLTYuMjQzeiIgZmlsbD0iIzAwNTJCNCIvPjxwYXRoIGQ9Ik0yMy44OTggMTAuNDM1SDEzLjU2NVYuMTAyYTEyLjEyIDEyLjEyIDAgMDAtMy4xMyAwdjEwLjMzM0guMTAyYTEyLjEyIDEyLjEyIDAgMDAwIDMuMTNoMTAuMzMzdjEwLjMzM2ExMi4xMiAxMi4xMiAwIDAwMy4xMyAwVjEzLjU2NWgxMC4zMzNhMTIuMTIgMTIuMTIgMCAwMDAtMy4xM3oiIGZpbGw9IiNEODAwMjciLz48cGF0aCBkPSJNMTUuMTMgMTUuMTNsNS4zNTUgNS4zNTVjLjI0Ni0uMjQ2LjQ4MS0uNTAzLjcwNS0uNzdsLTQuNTg0LTQuNTg1SDE1LjEzem0tNi4yNiAwaC0uMDAxbC01LjM1NSA1LjM1NWMuMjQ2LjI0Ni41MDQuNDgxLjc3LjcwNmw0LjU4NS00LjU4NVYxNS4xM3ptMC02LjI2TDMuNTE1IDMuNTE1Yy0uMjQ2LjI0Ni0uNDgxLjUwMy0uNzA1Ljc3TDcuMzk0IDguODdIOC44N3ptNi4yNiAwbDUuMzU1LTUuMzU1YTEyLjAyMyAxMi4wMjMgMCAwMC0uNzctLjcwNkwxNS4xMyA3LjM5NFY4Ljg3eiIgZmlsbD0iI0Q4MDAyNyIvPjwvc3ZnPg==')]"
//               />
//             </button>{" "}
//           </Wrapper>


//           {/* <Wrapper
//             className="px-0 sm:px-[16px] flex items-center"
//           >
//             <button
//               className="box-border bg-transparent border-0 m-0 overflow-visible p-0 cursor-pointer antialiased tracking-normal text-left font-normal font-inter outline-none rounded-full gap-[8px] transition duration-300 ease-in-out grid grid-cols-max-content-auto-max-content  pr-[16px]"
//             >
//               <span
//                 className="box-border outline-none p-4"
//               >
//                     <Avatar
//                       size='xs'
//                       name='Kola Tioluwani'
//                       src='https://www.gravatar.com/avatar/7689b26d715e07c5602cc5fd8ec48481?s=300&d=mm&r=g'
//                       className="border-0 box-content max-w-full align-middle rounded-full h-[32px] w-[32px]"
//                     />{' '}
//               </span>{" "}

//               <span
//                 className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis flex flex-col"
//               >
//                 <span
//                   className="box-border outline-none whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-900 font-inter text-base leading-6 break-words"
//                 >
//                   Waris Azeez
//                 </span>
//               </span>{" "}
//               <svg
//                 height="16"
//                 width="16"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ boxSizing: "border-box", color: "#55575c" }}
//               >
//                 <path
//                   d="M3.5 5L8 10l4.5-5h-9z"
//                 />
//               </svg>
//             </button>{" "}
//           </Wrapper> */}

//           <Wrapper className='flex items-center gap-8'>
//             <Box className='rounded-[50%] '>
//           <Avatar size='md' src='https://bit.ly/broken-link' />
//           </Box>

//           <Text>Waris Azeez</Text>

//           <svg
//                 height="16"
//                 width="16"
//                 fill="currentColor"
//                 viewBox="0 0 16 16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ boxSizing: "border-box", color: "#55575c" }}
//               >
//                 <path
//                   d="M3.5 5L8 10l4.5-5h-9z"
//                 />
//               </svg>
//           </Wrapper>

// {/* <Wrapper className="px-0 flex items-center">
//   <button className="box-border bg-transparent border-0 m-0 overflow-visible p-0 cursor-pointer antialiased tracking-normal text-left font-normal font-inter outline-none rounded-full transition duration-300 ease-in-out grid grid-cols-max-content-auto-max-content">
//     <span className="box-border p-4">
//       <Avatar
//         size="xs"
//         name="Kola Tioluwani"
//         src="https://www.gravatar.com/avatar/7689b26d715e07c5602cc5fd8ec48481?s=300&d=mm&r=g"
//         className="border-0 box-content max-w-full align-middle rounded-full h-32 w-32"
//       />
//     </span>

//     <span className="box-border whitespace-nowrap overflow-hidden overflow-ellipsis flex flex-col">
//       <span className="box-border whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-900 font-inter text-base leading-6 break-words">
//         Waris Azeez
//       </span>
//     </span>

//     <svg
//       height="16"
//       width="16"
//       fill="currentColor"
//       viewBox="0 0 16 16"
//       xmlns="http://www.w3.org/2000/svg"
//       className="box-border"
//       style={{ color: "#55575c" }}
//     >
//       <path d="M3.5 5L8 10l4.5-5h-9" />
//     </svg>
//   </button>
// </Wrapper> */}



//         </Container>

//       </Box>


//     </Navbar>

//   )
// }

// export default Nav