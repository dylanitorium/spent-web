import { connect } from 'react-redux';
import { Button } from 'kit';
import { actions } from 'spent/state/modules/auth';

const props = () => ({
  margin: "bottom",
  outline: true,
  color: "google",
});

const dispatch = {
  onClick: actions.authenticate.withGoogle,
};

const GoogleSignInButton = connect(props, dispatch)(Button);

export default GoogleSignInButton;
