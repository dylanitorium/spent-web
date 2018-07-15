import { connect } from 'react-redux';
import Userform from 'spent/view/components/pure/UserForm';
import { actions } from 'spent/state/modules/auth';

const props = () => ({
  buttonText: 'Sign in',
});

const dispatch = {
  onSubmit: actions.authenticate.withEmailAndPassword
};

const SignUpForm = connect(props, dispatch)(Userform);

export default SignUpForm;
