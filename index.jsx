import React, { Component } from "react";
import classNames from "classnames";
import styles from "./SignUpForm.module.css";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  password: "",
  passwordConf: "",
};
const LOGINFORM_REG = {
  fullName: /^[a-zA-Z']+\s+[a-zA-Z']+\s*$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  passwordConf: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

export default class SingUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: INITIAL_VALUES.fullName,
      email: INITIAL_VALUES.email,
      password: INITIAL_VALUES.password,
      passwordConf: INITIAL_VALUES.passwordConf,
      isAgreed: false,

      isFullNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isPasswordConfValid: false,
    };
  }

  handleFullNameChange = (e) => {
    const value = e.target.value;
    this.setState({
      fullName: value,
      isFullNameValid: LOGINFORM_REG.fullName.test(value),
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({ isAgreed: e.target.checked });
  };

  render() {
    const { fullName, isFullNameValid } = this.state;

    const fullNameClassName = classNames(styles.input, {
      [styles.inputValid]: fullName && isFullNameValid,
      [styles.inputInvalid]: fullName && !isFullNameValid,
    });

    return (
      <article className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create Your Account</h1>

          <form>
            <label className={styles.inputGroup}>
              <input
                type="text"
                value={fullName}
                autoFocus
                onChange={this.handleFullNameChange}
                name="fullName"
                placeholder="Full Name"
                className={fullNameClassName}
              />
            </label>

            <label className={styles.inputGroup}>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                placeholder="Email Address"
                className={styles.input}
              />
            </label>

            <label className={styles.inputGroup}>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                placeholder="Password"
                className={styles.input}
              />
            </label>

            <label className={styles.inputGroup}>
              <input
                type="password"
                value={this.state.passwordConf}
                onChange={this.handleChange}
                name="passwordConf"
                placeholder="Confirm Password"
                className={styles.input}
              />
            </label>

            <label className={styles.checkboxContainer}>
              <input
                type="checkbox"
                onChange={this.handleCheckboxChange}
                checked={this.state.isAgreed}
                name="isAgreed"
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxText}>
                I Agree All Statements In Terms Of Service
              </span>
            </label>

            <button type="submit" className={styles.submitBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </article>
    );
  }
}
