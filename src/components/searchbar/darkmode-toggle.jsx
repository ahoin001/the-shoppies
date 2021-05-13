import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Box,
  Button
} from '@chakra-ui/react';

export default function DarkmodeToggle() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue('white', 'hsl(219,25%,13%)');

  return (
    <>
      <Button maxW="180px" onClick={toggleColorMode}>
        {bg === 'white' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    </>
  );
}
