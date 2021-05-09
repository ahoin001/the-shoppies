import React, { useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

export default function Thing() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Box style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="lg">
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Box
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Heading>Animated message</Heading>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <Button onClick={() => setShowMessage(false)}>Close</Button>
        </Box>
      </CSSTransition>
    </Box>
  );
}
