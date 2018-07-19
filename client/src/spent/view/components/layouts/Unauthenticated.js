import React from 'react';
import PropTypes from 'prop-types';
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
import { Route } from 'react-router-dom';
import routes from 'spent/view/routes';
import LinkedText from 'spent/view/components/pure/LinkedText';
import SignUpForm from 'spent/view/components/connected/SignUpForm';
import SignInForm from 'spent/view/components/connected/SignInForm';
import GoogleSignInButton from 'spent/view/components/connected/GoogleSignInButton';
import FacebookSignInButton from 'spent/view/components/connected/FacebookSignInButton';

LinkedText.propTypes = {
  to: PropTypes.string.isRequired,
};

const FullScreenAlign = ({ children, id }) => (
  <AbsoluteContainer id={id} top={0} left={0} right={0} bottom={0}>
    <AlignmentContainer>
      <Container>
        {children}
      </Container>
    </AlignmentContainer>
  </AbsoluteContainer>
);

FullScreenAlign.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

// ROUTE EXLUDES INSTEAD OF MATCH?
const Unauthenticated = () => (
  <Route
    render={({ location, history }) => (
      <div>
        <Fade.Router history={history} location={location}>
          <Route exact path={routes.auth.index} component={null} />
          <Route render={() => (
            <AbsoluteContainer id="back" top={0} right={0} left={0} zIndex={1}>
              <header style={{ padding: '1rem' }}>
                <AlignmentContainer horizontal="space-between" direction="row">
                  <LinkedText to="..">
                    Back
                  </LinkedText>
                </AlignmentContainer>
              </header>
            </AbsoluteContainer>
          )}
          />
        </Fade.Router>
        <AbsoluteContainer top={80} left={0} right={0}>
          <Title align="center">
            Spent.
          </Title>
          <Fade.Router history={history} location={location}>
            <Route
              path={routes.auth.sign_in.index}
              component={() => (
                <Title id="welcome_back" level="two" align="center">
                  {'Welcome back!'}
                </Title>
              )}
            />
            <Route
              path={routes.auth.sign_up.index}
              component={() => (
                <Title id="lets_get_started" level="two" align="center">
                  {"Let's get started!"}
                </Title>
              )}
            />
          </Fade.Router>
        </AbsoluteContainer>
        <Swipe history={history} location={location}>
          <Route
            exact
            path={routes.auth.index}
            component={() => (
              <FullScreenAlign id="index">
                <Button to={routes.auth.sign_in.index} margin="bottom">
                  Sign In
                </Button>
                <Text color="gray-light" align="center">
                  {"Don't have an account? "}
                  <LinkedText to={routes.auth.sign_up.index} color="primary" display="inline">
                    Get started
                  </LinkedText>
                </Text>
              </FullScreenAlign>
            )}
          />
          <Route
            exact
            path={routes.auth.sign_in.index}
            component={() => (
              <FullScreenAlign id="sign_in">
                <GoogleSignInButton>
                  Sign in with Google
                </GoogleSignInButton>
                <FacebookSignInButton>
                  Sign in with Facebook
                </FacebookSignInButton>
                <Button outline to={routes.auth.sign_in.email}>
                  Sign in with Email
                </Button>
              </FullScreenAlign>
            )}
          />
          <Route
            path={routes.auth.sign_in.email}
            component={() => (
              <FullScreenAlign id="sign_in_email">
                <SignInForm />
              </FullScreenAlign>
            )}
          />
          <Route
            exact
            path={routes.auth.sign_up.index}
            component={() => (
              <FullScreenAlign id="sign_up">
                <GoogleSignInButton>
                  Sign up with Google
                </GoogleSignInButton>
                <FacebookSignInButton>
                  Sign up with Facebook
                </FacebookSignInButton>
                <Button outline to={routes.auth.sign_up.email}>
                  Sign up with Email
                </Button>
              </FullScreenAlign>
            )}
          />
          <Route
            path={routes.auth.sign_up.email}
            component={() => (
              <FullScreenAlign id="sign_up_email">
                <SignUpForm />
              </FullScreenAlign>
            )}
          />
        </Swipe>
      </div>
    )}
  />
);

export default Unauthenticated;
