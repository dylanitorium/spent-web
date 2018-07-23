import { connect } from 'react-redux';
import { Button } from 'kit';
import { actions } from 'spent/state/modules/auth';

const props = () => ({
  margin: 'bottom',
  outline: true,
  color: 'facebook',
});

const dispatch = {
  onClick: actions.authenticate.withFacebook,
};

const FacebookSignInButton = connect(props, dispatch)(Button);

export default FacebookSignInButton;
