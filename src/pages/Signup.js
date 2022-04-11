import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";

import * as userActions from "../redux/actions/authAction";

export default function Signup() {
  const [inputs, setInputs] = useState({
    email: "sushilbhardwaj705@gmail.com",
    password: "123123",
    confirmPassword: "123123",
    firstName: "Sushil",
    lastName: "Bhardwaj",
  });

  const { firstName, lastName, email, password, confirmPassword } = inputs;
  const registerState = useSelector((state) => {
    console.log(state);
    return state.registerState;
  });
  const { loading, error } = registerState;
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (email && password && password === confirmPassword) {
      dispatch(
        userActions.login({ email, password, firstName, lastName }, navigate)
      );
    }
  }

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                  <h3 className="login-heading mb-4">New Buddy!</h3>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <form onSubmit={handleSubmit} autoComplete="false">
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        className={
                          "form-control" +
                          (submitted && !email ? " is-invalid" : "")
                        }
                        placeholder="Email address"
                        value={email}
                        onChange={handleChange}
                      />
                      {submitted && !email && (
                        <div className="invalid-feedback">
                          email is required
                        </div>
                      )}
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={
                          "form-control" +
                          (submitted && !firstName ? " is-invalid" : "")
                        }
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleChange}
                      />
                      {submitted && !firstName && (
                        <div className="invalid-feedback">
                          First Name is required
                        </div>
                      )}
                      <label htmlFor="firstName">First Name</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={
                          "form-control" +
                          (submitted && !lastName ? " is-invalid" : "")
                        }
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleChange}
                      />
                      {submitted && !lastName && (
                        <div className="invalid-feedback">
                          Last Name is required
                        </div>
                      )}
                      <label htmlFor="inputEmail">Last Name</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        className={
                          "form-control" +
                          (submitted && !password ? " is-invalid" : "")
                        }
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                      />
                      {submitted && !password && (
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      )}
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className={
                          "form-control" +
                          (submitted && !confirmPassword ? " is-invalid" : "")
                        }
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleChange}
                      />
                      {submitted && !confirmPassword && (
                        <div className="invalid-feedback">
                          Confirm Password is required
                        </div>
                      )}
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                    <button className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
                      {loading && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}{" "}
                      Sign Up
                    </button>

                    <div className="text-center pt-3">
                      Aleady have an account?
                      <Link className="font-weight-bold" to="/login">
                        Sign In
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
