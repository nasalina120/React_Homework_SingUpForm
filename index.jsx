import React, { Component } from "react";

const INITIAL_VALUES = { fullName: "", email: "", password: "" };
const LOGINFORM_REG = {
  fullName: /^[a-zA-Z']+\s+[a-zA-Z']+/,
  email: /^.+@.+\$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}\$/,
  passwordConf: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}\$/,
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
    };
  }

  render() {
    return (
      <article>
        <h1>Create Your Account </h1>
        <form>
          <label>
            <input type="text" name="FullName" placeholder="FullName" />
          </label>
          <label>
            <input type="email" name="email" placeholder="email" />
          </label>
          <label>
            <input type="password" name="password" placeholder="password" />
          </label>
          <label>
            <input type="checkbox" name="checkbox" />
            <span className={styles.checkboxText}>
              I Agree All Statements In Terms Of Service
            </span>
          </label>
        </form>
      </article>
    );
  }
}
