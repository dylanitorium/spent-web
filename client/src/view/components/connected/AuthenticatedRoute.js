import { connect } from 'react-redux';
import { selectors } from 'spent/state/modules/auth';
import PureAuthenticatedRoute from 'spent/view/components/hoc/AuthenticatedRoute';

const stateProps = ()  => {
  return state => ({
    authenticated: selectors.isAuthenticated(state),
  });
};

const ConnectedAuthenticatedRoute = connect(stateProps)(PureAuthenticatedRoute);

export default ConnectedAuthenticatedRoute;

