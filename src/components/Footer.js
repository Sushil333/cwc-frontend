import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="footer pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 col-sm-12">
              <h6 className="mb-3">Subscribe to our Newsletter</h6>
              <form className="newsletter-form mb-1">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Please enter your email"
                    className="form-control"
                  />
                  <div className="input-group-append d-flex">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-1 col-sm-6 mobile-none"></div>
            <div className="col-md-2 col-6 col-sm-4">
              <h6 className="mb-3">About OE</h6>
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Culture</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6 col-sm-4">
              <h6 className="mb-3">For Foodies</h6>
              <ul>
                <li>
                  <Link to="/">Community</Link>
                </li>
                <li>
                  <Link to="/">Developers</Link>
                </li>
                <li>
                  <Link to="/">Blogger Help</Link>
                </li>
                <li>
                  <Link to="/">Verified Users</Link>
                </li>
                <li>
                  <Link to="/">Code of Conduct</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 m-none col-4 col-sm-4">
              <h6 className="mb-3">For Restaurants</h6>
              <ul>
                <li>
                  <Link to="/">Advertise</Link>
                </li>
                <li>
                  <Link to="/">Add a Restaurant</Link>
                </li>
                <li>
                  <Link to="/">Claim your Listing</Link>
                </li>
                <li>
                  <Link to="/">For Businesses</Link>
                </li>
                <li>
                  <Link to="/">Owner Guidelines</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="pt-4 pb-4 text-center">
        <div className="container">
          <p className="mt-0 mb-0">
            © Copyright 2022 Cooked With Care. All Rights Reserved
          </p>
          <small className="mt-0 mb-0">
            Made with <i className="fas fa-heart heart-icon text-danger"></i> by{" "}
            <Link
              className="text-danger"
              target="_blank"
              to="https://www.instagram.com/sbrocks46/"
            >
              Sbrocks46
            </Link>
          </small>
        </div>
      </footer>
    </>
  );
}
