import React from 'react';
import { Route } from 'react-router-dom';
import {
  AlignmentContainer,
  AbsoluteContainer,
  Container,
  Text,
  Title,
  Fade,
  Swipe,
} from 'kit';
import {
  LinkButton as Button,
} from 'spent/view/components/utility';
import { Link } from 'react-router-dom';
import { routes } from 'spent/view/routes';


const LinkedText = props => <Link to={props.to}><Text {...props} color="primary" display="inline" /></Link>;

const FullScreenAlign = ({ children }) => (
  <AbsoluteContainer top={0} left={0} right={0} bottom={0}>
    <AlignmentContainer>
      <Container>
        {children}
      </Container>
    </AlignmentContainer>
  </AbsoluteContainer>
);

const Unauthenticated = () => (
  <Route render={({ location }) => (
    <main>
      <AbsoluteContainer top={80} left={0} right={0}>
        <Title align="center">Spent.</Title>
          <Fade location={location}>
            <Route exact path={routes.auth.sign_in} component={() => (
              <Title level="two" align="center">Welcome back!</Title>
            )} />
            <Route exact path={routes.auth.sign_up} component={() => (
              <Title level="two" align="center">Let's get started!</Title>
            )} />
          </Fade>
      </AbsoluteContainer>
      <Fade location={location}>
        <Route exact path={routes.auth.index} component={() => (
          <FullScreenAlign>
            <Button to={routes.auth.sign_in} margin="bottom">Sign In</Button>
            <Text color="gray-light" align="center">
              Don't have an account? <LinkedText to={routes.auth.sign_up}>Get started</LinkedText>
            </Text>
          </FullScreenAlign>
        )} />
        <Route path={routes.auth.sign_in} component={() => (
          <FullScreenAlign>
            <Button margin="bottom">Sign in with Google</Button>
            <Button margin="bottom">Sign in with Facebook</Button>
            <Button>Sign in with Email</Button>
          </FullScreenAlign>
        )} />
        <Route path={routes.auth.sign_up} component={() => (
          <FullScreenAlign>
            <Button margin="bottom">Sign up with Google</Button>
            <Button margin="bottom">Sign up with Facebook</Button>
            <Button>Sign up with Email</Button>
          </FullScreenAlign>
        )} />
      </Fade>
    </main>
  )}/>
);

export default Unauthenticated;
