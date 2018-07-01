import React from 'react';
import { Route } from 'react-router-dom';
import {
  AlignmentContainer,
  AbsoluteContainer,
  Container,
  Text,
  Title,
  Fade,
} from 'kit';
import {
  LinkButton as Button,
  Match,
} from 'spent/view/components/utility';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { routes } from 'spent/view/routes';


const Link = props => <Text {...props} color="primary" display="inline" />

const Unauthenticated = () => (
  <Route render={({ location }) => (
    <main>
      <AbsoluteContainer top={80} left={0} right={0}>
        <Title align="center">Spent.</Title>
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={{enter: 300, exit: 0}} classNames="fade">
            <Switch location={location}>
              <Route exact path={routes.auth.sign_in} component={() => <Title level="two" align="center">Welcome back!</Title>} />
              <Route exact path={routes.auth.sign_up} component={() => <Title level="two" align="center">Let's get started!</Title>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </AbsoluteContainer>
      <AlignmentContainer>
        <Container>
          <Button to={routes.auth.sign_in}>Sign In</Button>
          <Text color="gray-light" align="center" margin="top">
            Don't have an account? <Link>Get started</Link>
          </Text>
        </Container>
      </AlignmentContainer>
    </main>
  )}/>
);

export default Unauthenticated;
