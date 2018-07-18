import { connect } from 'react-redux';
import { selectors } from 'spent/state/modules/auth';
import { Route as PureRoute } from 'spent/view/components/utility';

const stateProps = () => state => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

const Route = connect(stateProps)(PureRoute);

export default Route;
