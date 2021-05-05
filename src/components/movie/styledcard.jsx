import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';

// https://codepen.io/simoberny/pen/WMMqwL?editors=1100

export default function StyledCard() {
  return (
    <Box
      id="bright"
      position="relative"
      width="800px"
      height="350px"
      my="80px"
      mx="auto"
      overflow="hidden"
      borderRadius="10px"
      sx={{ boxSizing: 'border-box' }} 
      _hover={{
        transform: "scale('1.02')",
        boxShadow: "0px 0px 80px -25px rgba(0,0,0, 0.5);",
        transition: "all 0.4s"
      }}
    >
      <Box
        position="relative"
        w={'100%'}
        height={'100%'}
        // sx={{ backgroundBlendMode: 'multiply' }} // sx allpws CSS properties not in chakara UI
        zIndex={2}
        borderRadius="10px"
        background="linear-gradient(to right, #e5e6e6 50%, transparent 100%);"
      >
        <Box position="relative" p="25px" height="40%">
          <img
            src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
          />
          <Heading fontWeight={400}>Bright</Heading>
          <Heading fontWeight={400}>2017, David Ayer</Heading>
          <Box
            as="span"
            display="inline-block"
            mt="15px"
            color="#555"
            padding="5px"
            borderRadius="5px"
            border="1px solid rgba(0,0,0,0.05)"
          >
            117 min
          </Box>
          <Box
            as="p"
            display="inline-block"
            color="#959595"
            ml="10px"
          >
            Action, Crime, Fantasy
          </Box>
        </Box>
        <Box p="25px" height="50%">
          <Box as="p" color="#545454">
            Set in a world where fantasy creatures live side by side with
            humans. A human cop is forced to work with an Orc to find a weapon
            everyone is prepared to kill for.
          </Box>
        </Box>
        <Box height="10%" pl="15px" pb="20px">
          <Box as="ul" listStyleType="none" p="0">
            <Box
              as="li" // Need to add animations
              display="inline-block"
              color="rgba(0,0,0,0.3)"
              margin="0 10px"
            >
              <i>share</i>
            </Box>
            <Box
              as="li" // Need to add animations
              display="inline-block"
              color="rgba(0,0,0,0.3)"
              margin="0 10px"
            >
              <i></i>
            </Box>
            <Box
              as="li" // Need to add animations
              display="inline-block"
              color="rgba(0,0,0,0.3)"
              margin="0 10px"
              transition="color 0.3s"
              
            >
              <i>chat_bubble</i>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        top="0"
        zIndex="1"
        h="100%"
        right="0"
        backgroundSize="cover"
        backgroundRepeat= "no-repeat"
        borderRadius="11px"
        width="80%"
        // backgroundImage="url('https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg')"
        backgroundImage="url('https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg')"
      ></Box>
    </Box>
  );
}
