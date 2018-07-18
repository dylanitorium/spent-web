import React, { Component } from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import { Input, Button } from 'kit';

class UserForm extends Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func, //eslint-disable-line
    validatePasswordStrength: PropTypes.bool //eslint-disable-line
  };

  static defaultProps = {
    onSubmit: () => {},
    validatePasswordStrength: true,
  };

  state = {
    data: {
      email: '',
      password: '',
    },
    maskPassword: true,
  };

  onChange = (event) => {
    const { data } = this.state;
    const { name, value } = event.target;
    this.setState({ data: { ...data, [name]: value } });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { props, state } = this;
    props.onSubmit(state.data);
  };

  getMaskIcon = () => {
    const { maskPassword } = this.state;
    return maskPassword ? (
      <button type="button" onClick={this.toggleMask}>
        Show
      </button>
    ) : (
      <button type="button" onClick={this.toggleMask}>
        Hide
      </button>
    );
  };

  getPasswordColor = () => {
    const { props, state } = this;
    const { data } = state;

    if (!props.validatePasswordStrength || data.password.length < 1) {
      return undefined;
    }

    const { score } = zxcvbn(data.password);
    switch (score) {
      case 0:
        return 'danger';
      case 1:
        return 'warning';
      case 2:
      default:
        return 'success';
    }
  };

  getPasswordValid = () => {
    const { props, state } = this;

    if (!props.validatePasswordStrength) {
      return true;
    }

    const { data } = state;
    const { score } = zxcvbn(data.password);
    return score >= 2;
  };

  toggleMask = () => {
    const { maskPassword } = this.state;
    this.setState({ maskPassword: !maskPassword });
  };

  render() {
    const { buttonText } = this.props;
    const { maskPassword, data } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          name="email"
          placeholder="Email"
          onChange={this.onChange}
          value={data.email}
        />
        <Input
          name="password"
          placeholder="Password"
          type={maskPassword ? 'password' : 'text'}
          onChange={this.onChange}
          value={data.password}
          rightIcon={this.getMaskIcon()}
          color={this.getPasswordColor()}
        />
        <Button disabled={!this.getPasswordValid()}>
          {buttonText}
        </Button>
      </form>
    );
  }
}

export default UserForm;
