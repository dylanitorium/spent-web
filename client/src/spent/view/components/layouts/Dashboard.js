import React from 'react';
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
import UserMenu from 'spent/view/components/connected/UserMenu';

const Dashboard = () => (
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
              <UserMenu />
            </AlignmentContainer>
          </header>
        </AbsoluteContainer>
        <AbsoluteContainer top={0} left="50%" right={0} bottom={0} style={{ marginLeft: '-187.5px', maxWidth: '375px' }}ç>
          <AlignmentContainer>
            <Container>
              <Text size="large" color="gray-light" align="center">
                {"You don't have a budget yet"}
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

export default Dashboard;
