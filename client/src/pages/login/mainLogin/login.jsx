import React from "react";
import "./login.css";
import { Link } from "react-router-dom"; //Links Library from React Router

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      keepLoggedIn: true,
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App-login">
        <article className="center-the-login">
          <section className="login-title">
            <h2>Login</h2>
          </section>
          <main>
            <form onSubmit={this.handleSubmit}>
              <section className="email">
                {" "}
                {/* Email Section */}
                <p>Email</p>
              </section>
              <input
                type="text"
                style={{ width: 200 }}
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />{" "}
              {/* Email input box */}
              <section className="pass">
                {" "}
                {/* Password Section */}
                <p>Password</p>
              </section>
              <input
                type="password"
                id="pass"
                style={{ width: 200 }}
                name="password"
                minLength="8"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />{" "}
              {/* Hidden input Password */}
              <br></br>
              <section className="logged-In">
                {" "}
                {/* Keep me Logged in */}
                <input
                  type="checkbox"
                  name="keepLoggedIn"
                  value={this.state.keepLoggedIn}
                  onChange={this.handleChange}
                />
                Keep me logged in
              </section>
              <br></br>
              <br></br>
              <input
                type="submit"
                style={{ width: 210 }}
                value="Lets Go!"
              ></input>{" "}
              {/* Submit */}
              <br></br>
              <br></br>
            </form>
          </main>
          <section className="signUp-text">
            {" "}
            {/* Create an Account Section*/}
            <span>Don’t have an account?</span>
            <span>
              <Link className="signUp-link" to="/signup" title="Join Us!">
                Sign Up!
              </Link>
            </span>
          </section>
        </article>
      </div>
    );
  }
}

export default Login;
