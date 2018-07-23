import { connect } from 'react-redux';
import Userform from 'spent/view/components/pure/UserForm';
import { actions, selectors } from 'spent/state/modules/auth';

const props = state => ({
  validatePasswordStrength: false,
  buttonText: 'Sign in',
  error: selectors.errorMessage(state),
});

const dispatch = {
  onSubmit: actions.authenticate.withEmailAndPassword,
};

const SignUpForm = connect(props, dispatch)(Userform);

export default SignUpForm;
