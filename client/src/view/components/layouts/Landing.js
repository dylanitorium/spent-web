import React from 'react';
import { WelcomeTitle } from 'spent/view/components/pure/WelcomeTitle';
import { AlignmentContainer, Container, Button, Text } from 'kit';

const LandingContainer = () => (
  <main>
    <WelcomeTitle />
    <AlignmentContainer>
      <Container>
        <Button> Sign In </Button>
        <Text color="gray-light" align="center" margin="top"> Don't have an account? Sign Up</Text>
      </Container>
    </AlignmentContainer>
  </main>
);

export default LandingContainer;
