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
            {/* <Text
              className="infoField__value"
              style={{
                boxSizing: 'border-box',
                marginBottom: '0px',
                marginTop: '0px',
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#2b2d33',
                wordBreak: 'break-all',
              }}
            >
              Show Referral link
            </Text> */}

            <Button
              onClick={handleClick}
              variant='link'
              colorScheme="#2b2d33"
              // mt={4}
              disabled={linkGenerated}
            >
              Show Referral link
            </Button>
            {linkGenerated && (
              <Text
              className="infoField__value"
              style={{
                boxSizing: 'border-box',
                marginBottom: '0px',
                marginTop: '0px',
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#2b2d33',
                wordBreak: 'break-all',
              }}
              >
                Generated Link: <a href="#">example.com</a>
              </Text>
            )
            }
          </Box>{' '}
          {/* Switcher */}
          <Box
            className="infoField__actions"
            style={{
              boxSizing: 'border-box',
              WebkitBoxAlign: 'center',
              alignItems: 'center',
              display: 'flex',
              flexShrink: 0,
              marginLeft: 'auto',
              marginRight: '0px',
            }}
          >
            <FormControl display="flex" alignItems="center">
              {/* <FormLabel htmlFor='email-alerts' mb='0'>
                Enable email alerts?
              </FormLabel> */}
              <Switch id="email-alerts" />
            </FormControl>{' '}
          </Box>
        </Wrapper>{' '}

        {/* terms and conditions */}
        <Wrapper
          className="dashboardShareLinks__legals"
          style={{
            boxSizing: 'border-box',
            textDecoration: 'underline',
            color: '#aaabad',
            fontFamily: 'Inter',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
            marginTop: '8px',
          }}
        >
          <a
            href="#"
            target="_blank"
            style={{
              boxSizing: 'border-box',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Terms and conditions of sale and distribution
          </a>
        </Wrapper>

      </Container>
    </>
  )
}

export default ShareLink
