import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import ParentCont from "../components/ParentCont";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";


import { ChevronUpIcon } from '@chakra-ui/icons'
import { Collapse, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { Card, } from '@chakra-ui/react'
import { Box, } from '@chakra-ui/react'

import { MdOutlineCancel } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';




const Landingpage = () => {
  const { isOpen, onToggle } = useDisclosure()

  const navigate = useNavigate()

  const { toggleColorMode } = useColorMode()
  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  const [showMenu, setShowMenu] = useState(false);
  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };
  const [showChapters, setShowChapters] = useState(false);
  const handleDropdownClick = () => {
    setShowChapters(!showChapters);
  };

  return (
    <div
      className=""
    >
      <header className="bg-gray-800">

      </header>

      <main className="bg-gray-800 py-16">

        <section className="mb-8">
          {/* Wrapper */}
          <div className="container mx-auto px-4">
          </div>
        </section>

      </main>

      <footer
        className="bg-black border-t-2 border-gray-200"
      >
        {/* Wrapper */}
        <div
          className="container mx-auto px-4"
        >

          <div
            className=""
          >
            
          </div>

        </div>
      </footer>

    </div>
  )
}

export default Landingpage

