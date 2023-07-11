import React, { useState } from 'react';
import { Box, Text, Switch, Button } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import Container from '../Container';
import Wrapper from '../Wrapper';

const ShareLink = () => {
  const [linkGenerated, setLinkGenerated] = useState(false);
  const handleClick = () => {
    // Logic to generate the link
    setLinkGenerated(true);
  };

  return (
    <>
      <Container
        className="dashboardShareLinks pageFarm__shareLink"
        style={{ boxSizing: 'border-box', marginBottom: '24px' }}
      >
        {/* Info field */}
        <Wrapper
          className="infoField"
          style={{
            boxSizing: 'border-box',
            border: '1px solid #e9eaea',
            borderRadius: '4px',
            padding: '12px 16px',
            backgroundColor: '#f8f8f8',
            display: 'flex',
          }}
        >
          {' '}
          <Box
            className="infoField__wrap"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {' '}

            <Button
              onClick={handleClick}
              variant='link'
              colorScheme="#2b2d33"
              disabled={linkGenerated}
            >
              Show Referral link
            </Button>
            {linkGenerated && (
              <Text
              className="box-border mb-0 mt-0 font-inter text-base leading-6 text-gray-700 break-all"
              >
                Generated Link: <a href="#">example.com</a>
              </Text>
            )
            }
          </Box>{' '}
          {/* Switcher */}
          <Box
            className="box-border flex items-center flex-shrink-0 ml-auto mr-0"
          >
            <FormControl display="flex" alignItems="center">
              <Switch id="email-alerts" />
            </FormControl>{' '}
          </Box>
        </Wrapper>{' '}

        {/* terms and conditions */}
        <Wrapper
          className="box-border underline text-gray-500 font-inter text-xs font-normal leading-6 mt-2"
        >
          <a
            href="#"
            target="_blank"
            className='box-border no-underline text-current'
          >
            Terms and conditions of sale and distribution
          </a>
        </Wrapper>

      </Container>
    </>
  )
}

export default ShareLink
