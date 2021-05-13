import React from 'react';
import { useRecoilValue } from 'recoil';
import { nominationListState } from '../../atoms/atoms';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

const Banner = () => {
  let nominationList = useRecoilValue(nominationListState);

  // const bannerBg = useColorModeValue('blue.600', 'linear(to-r, cyan.700, purple.500)');

  return (
    <Box>
      {nominationList.length === 5 ? (
        <Box
          w="100%"
          p={5}
          position="fixed"
          top="0"
          bgGradient="linear(to-r, cyan.700, purple.500) "
          color="white"
          zIndex={2}
        >
          <Flex justifyContent="center" alignItems="center">
            <Box
              as="p"
              textAlign="center"
              fontSize="medium"
              fontWeight="extrabold"
            >
              Congratulations! You've selected your 5 nominees!
            </Box>
          </Flex>
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

export default Banner;
