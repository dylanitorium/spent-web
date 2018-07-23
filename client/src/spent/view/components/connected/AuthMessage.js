import { connect } from 'react-redux';
import PureAuthMessage from 'spent/view/components/pure/AuthMessage';
import { selectors } from 'spent/state/modules/auth';

const props = state => ({
  message: selectors.errorMessage(state),
  visible: !!selectors.errorMessage(state),
});

const AuthMessage = connect(props)(PureAuthMessage);

export default AuthMessage;
