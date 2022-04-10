import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";

import { login } from "../redux/actions/authAction";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [submitted, setSubmitted] = useState(false);
  // const loading = false;
  const loginState = useSelector((state) => {
    console.log(state)
    return state.loginState
  });
  const { loading, error } = loginState;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (email && password) {
      // get return url from location state or default to home page
      dispatch(login({ email, password }, navigate));
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
                  {/* alert message */}
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  {error && <Alert variant="danger">{error}</Alert>}

                  <form onSubmit={handleSubmit}>
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
                    {/* <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember password
                      </label>
                    </div> */}
                    <button className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
                      {loading && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}{" "}
                      Sign in
                    </button>

                    <div className="text-center pt-3">
                      Don’t have an account?
                      <Link className="font-weight-bold" to="/signup">
                        Sign Up
                      </Link>
                    </div>
                  </form>
                  {/* <hr className="my-4" />
                  <p className="text-center">LOGIN WITH</p>
                  <div className="row">
                    <div className="col pr-2">
                      <button
                        className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase"
                        type="submit"
                      >
                        <i className="fab fa-google mr-2"></i> Google
                      </button>
                    </div>
                    <div className="col pl-2">
                      <button
                        className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase"
                        type="submit"
                      >
                        <i className="fab fa-facebook-f mr-2"></i> Facebook
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
