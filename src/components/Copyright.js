import React from 'react';

import { Box } from '@chakra-ui/react';

const Copyright = () => {

  return (
    <section className='px-[20px] md:px-[40px] mt-10 md:mt-8 pb-4'>
      <Box
        className="box-border text-gray-400 font-inter text-[16px] leading-5 break-words text-center"
      >
        {`2023
PLATINEX Limited Liability Company, 88 Avtomshenebeli Street, Hualing
Kutaisi Free Industrial Zone, City of Kutaisi, Georgia`}
        <br style={{ boxSizing: "border-box" }} />
        {"ALL RIGHTS RESERVED"}
      </Box>
      </section>
  )
};

export default Copyright;