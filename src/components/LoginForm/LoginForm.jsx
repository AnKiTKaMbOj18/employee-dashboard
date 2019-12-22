import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
// import { Redirect } from "react-router";
import { makeSelectEmail, makeSelectPassword } from "./selectors";
import { onChange, onPasswordChange, onSubmitHandler } from "./actions";
import userData from "./employeeData";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: true
    };
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [event.target.name]: event.target.value
    });
    if (name === "email") {
      this.props.onHandleChange(value);
    }
    if (name === "password") {
      this.props.onPasswordChange(value);
    }
  };

  handleSubmit = event => {
    const { email, password, history, onSubmitHandler } = this.props;
    event.preventDefault();
    if (email === "hruday@gmail.com" && password === "hruday123") {
      this.setState({ isLoggedIn: true });
      onSubmitHandler(userData);
      history.push("/employee");
    } else {
      this.setState({ isLoggedIn: false });
    }
  };

  handleBlurChange = () => {
    const { email, password } = this.props;
    if (
      email === "hruday@gmail.com" ||
      password === "hruday123" ||
      password.length
    ) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.handleBlurChange}
          // required
          className={this.state.isLoggedIn ? "" : "error"}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
          // required
          className={this.state.isLoggedIn ? "" : "error"}
          onBlur={this.handleBlurChange}
        />
        {!this.state.isLoggedIn && (
          <p className="input-feedback">Incorrect email or password</p>
        )}
        <button type="submit">Login</button>
      </form>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword()
});

export const mapDispatchToProps = dispatch => {
  return {
    onHandleChange: value => dispatch(onChange(value)),
    onPasswordChange: value => dispatch(onPasswordChange(value)),
    onSubmitHandler: value => dispatch(onSubmitHandler(value))
  };
};

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
