import { connect } from 'react-redux';
import Userform from 'spent/view/components/pure/UserForm';
import { actions, selectors } from 'spent/state/modules/auth';

const props = state => ({
  buttonText: 'Sign up',
  error: selectors.errorMessage(state),
});

const dispatch = {
  onSubmit: actions.createUser.withEmailAndPassword,
};

const SignUpForm = connect(props, dispatch)(Userform);

export default SignUpForm;
