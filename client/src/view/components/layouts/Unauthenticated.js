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
  Input,
} from 'kit';
import {
  LinkButton as Button,
} from 'spent/view/components/utility';
import { Link } from 'react-router-dom';
import { routes } from 'spent/view/routes';
import UserForm from 'spent/view/components/pure/UserForm';

const LinkedText = props => <Link to={props.to}><Text {...props} color="primary" display="inline" /></Link>;

const FullScreenAlign = ({ children, id }) => (
  <AbsoluteContainer id={id} top={0} left={0} right={0} bottom={0}>
    <AlignmentContainer>
      <Container>
        {children}
      </Container>
    </AlignmentContainer>
  </AbsoluteContainer>
);

const Unauthenticated = () => (
  <Route render={({ location, history, ...props }) => (
    <main>
      <AbsoluteContainer top={80} left={0} right={0}>
        <Title align="center">Spent.</Title>
        <Fade history={history} location={location}>
          <Route path={routes.auth.sign_in.index} component={() => (
            <Title id="welcome_back" level="two" align="center">Welcome back!</Title>
          )} />
          <Route path={routes.auth.sign_up.index} component={() => (
            <Title id="lets_get_started" level="two" align="center">Let's get started!</Title>
          )} />
        </Fade>
      </AbsoluteContainer>
      <Swipe history={history} location={location}>
        <Route exact path={routes.auth.index} component={() => (
          <FullScreenAlign id="index">
            <Button to={routes.auth.sign_in.index} margin="bottom">Sign In</Button>
            <Text color="gray-light" align="center">
              Don't have an account? <LinkedText to={routes.auth.sign_up.index}>Get started</LinkedText>
            </Text>
          </FullScreenAlign>
        )} />
        <Route exact path={routes.auth.sign_in.index} component={() => (
          <FullScreenAlign id="sign_in">
            <Button margin="bottom" outline color="google">Sign in with Google</Button>
            <Button margin="bottom" outline color="facebook">Sign in with Facebook</Button>
            <Button outline to={routes.auth.sign_in.email}>Sign in with Email</Button>
          </FullScreenAlign>
        )} />
        <Route path={routes.auth.sign_in.email} component={() => (
          <FullScreenAlign id="sign_in_email">
            <UserForm onSubmit={() => {}} buttonText="Sign in" />
          </FullScreenAlign>
        )} />
        <Route exact path={routes.auth.sign_up.index} component={() => (
          <FullScreenAlign id="sign_up">
            <Button margin="bottom" outline color="google">Sign up with Google</Button>
            <Button margin="bottom" outline color="facebook">Sign up with Facebook</Button>
            <Button outline to={routes.auth.sign_up.email}>Sign up with Email</Button>
          </FullScreenAlign>
        )} />
        <Route path={routes.auth.sign_up.email} component={() => (
          <FullScreenAlign id="sign_up_email">
            <UserForm onSubmit={() => { }} buttonText="Sign up" />
          </FullScreenAlign>
        )} />
      </Swipe>
    </main>
  )}/>
);

export default Unauthenticated;
