import { connect } from 'react-redux';
import Userform from 'spent/view/components/pure/UserForm';
import { actions } from 'spent/state/modules/auth';

const props = () => ({
  buttonText: 'Sign up',
});

const dispatch = {
  onSubmit: actions.createUser.withEmailAndPassword
};

const SignUpForm = connect(props, dispatch)(Userform);

export default SignUpForm;
