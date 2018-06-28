import React from 'react';
import { WelcomeTitle } from './WelcomeTitle';
import { Button } from './Button';
import { AlignmentContainer } from './AlignmentContainer';
import { Container } from './Container';

const LandingContainer = () => (
  <main>
    <WelcomeTitle />
    <AlignmentContainer>
      <Container>
        <Button> Sign In </Button>
      </Container>
    </AlignmentContainer>
  </main>
);

export default LandingContainer;
