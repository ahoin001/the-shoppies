import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Box,
  Button,
  Switch,
  MoonIcon,
} from '@chakra-ui/react';

export default function Mode() {
  const { toggleColorMode } = useColorMode();

  const color = useColorModeValue('gray.800', 'white');
  const bg = useColorModeValue('white', 'hsl(219,25%,13%)');

  return (
    <>
      <Button size="lg" onClick={toggleColorMode}>
        {bg === 'white' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    </>
  );
}
