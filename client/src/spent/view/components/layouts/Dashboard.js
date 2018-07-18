import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import {
  AlignmentContainer,
  AbsoluteContainer,
  Container,
  Text,
  Title,
} from 'kit';
import {
  LinkButton as Button,
} from 'spent/view/components/utility';
import routes from 'spent/view/routes';

const Avatar = ({ store, unauthenticate }) => (
  <button
    type="button"
    style={{
      border: '1px solid black',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
    }}
    onClick={() => store.dispatch(unauthenticate())}
  />
);

Avatar.propTypes = {
  store: PropTypes.shape().isRequired,
  unauthenticate: PropTypes.func.isRequired,
};

const Dashboard = ({ store, unauthenticate }) => (
  <Route
    render={() => (
      <div>
        <AbsoluteContainer top={0} right={0} left={0} zIndex={1}>
          <header style={{ padding: '1rem' }}>
            <AlignmentContainer horizontal="space-between" direction="row">
              <Link to={routes.dashboard}>
                <Title level="three">
Spent.
                </Title>
              </Link>
              <Avatar store={store} unauthenticate={unauthenticate} />
            </AlignmentContainer>
          </header>
        </AbsoluteContainer>
        <AbsoluteContainer top={0} right={0} left={0} bottom={0}>
          <AlignmentContainer>
            <Container>
              <Text size="large" color="gray-light" align="center">
                You
                {'don\'t'}
                have a budget yet
              </Text>
              <Button>
                Create a budget
              </Button>
            </Container>
          </AlignmentContainer>
        </AbsoluteContainer>
      </div>
    )}
  />
);

Dashboard.propTypes = {
  store: PropTypes.shape().isRequired,
  unauthenticate: PropTypes.func.isRequired,
};

export default Dashboard;
