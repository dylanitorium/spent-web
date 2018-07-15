import React, { Component } from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import { Input, Button } from 'kit';

class UserForm extends Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    validatePasswordStrength: PropTypes.bool,
  }

  static defaultProps = {
    onSubmit: () => {},
    validatePasswordStrength: true,
  }

  state = {
    data: {
      email: '',
      password: '',
    },
    maskPassword: true,
  }

  handleChange = (event) => {
    const { data } = this.state;
    const { name, value } = event.target;
    this.setState({ data: { ...data, [name]: value } });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.data);
  }

  toggleMask = () => {
    const { maskPassword } = this.state;
    this.setState({ maskPassword: !maskPassword });
  }

  getMaskIcon = () => {
    const { maskPassword } = this.state;
    return maskPassword
      ? <a onClick={this.toggleMask}>Show</a>
      : <a onClick={this.toggleMask}>Hide</a>
  }

  getPasswordColor = () => {
    const { password } = this.state.data;

    if (password.length < 1) {
      return;
    }

    const { score } = zxcvbn(password);
    switch (score) {
      case 0:
        return 'danger';
      case 1:
        return 'warning';
      case 2:
      default:
        return 'success';
    }
  }

  getPasswordValid = () => {
    const { password } = this.state.data;
    const { score } = zxcvbn(password);
    return score >= 2;
  }

  render() {
    const { buttonText } = this.props;
    const { maskPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.data.email}
        />
        <Input
          name="password"
          placeholder="Password"
          type={maskPassword ? 'password' : 'text'}
          onChange={this.handleChange}
          value={this.state.data.password}
          rightIcon={this.getMaskIcon()}
          color={this.getPasswordColor()}
        />
        <Button disabled={!this.getPasswordValid()}>{buttonText}</Button>
      </form>
    );
  }
}

export default UserForm;
