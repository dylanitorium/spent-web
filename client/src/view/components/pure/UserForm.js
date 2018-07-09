import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'kit';

class UserForm extends Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    onSubmit: () => {},
  }

  state = {
    data: {
      email: '',
      password: '',
    },
    maskPassword: true,
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ data: { [name]: value } });
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
        />
        <Button>{buttonText}</Button>
      </form>
    );
  }
}

export default UserForm;
