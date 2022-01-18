import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
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
                  <form>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                      />
                      <label for="inputPassword">Password</label>
                    </div>
                    <div className="form-label-group mb-4">
                      <input
                        type="password"
                        id="inputPassword2"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                      <label for="inputPassword2">Confirm Password</label>
                    </div>
                    <a
                      href="index.html"
                      className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                    >
                      Sign Up
                    </a>
                    <div className="text-center pt-3">
                      Already have an Account?{" "}
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
