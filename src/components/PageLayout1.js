import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { Collapse, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'




const PageLayout1 = () => {
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
        
         {/* Wrapper */}
         <div className="container mx-auto px-4">

          </div>
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

export default PageLayout1

