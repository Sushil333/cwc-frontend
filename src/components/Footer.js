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
                    <button type="button" className="btn btn-primary" style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}>
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <p>
                <a className="text-info" href="/register.html">
                  Register now
                </a>
                to get updates on <a href="/offers.html">Offers and Coupons</a>
              </p>
              <div className="app">
                <p className="mb-2">DOWNLOAD APP</p>
                <a href="/">
                  <img className="img-fluid" src="img/google.png" alt="" />
                </a>
                <a href="/">
                  <img className="img-fluid" src="img/apple.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-1 col-sm-6 mobile-none"></div>
            <div className="col-md-2 col-6 col-sm-4">
              <h6 className="mb-3">About OE</h6>
              <ul>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Culture</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6 col-sm-4">
              <h6 className="mb-3">For Foodies</h6>
              <ul>
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <a href="/">Developers</a>
                </li>
                <li>
                  <a href="/">Blogger Help</a>
                </li>
                <li>
                  <a href="/">Verified Users</a>
                </li>
                <li>
                  <a href="/">Code of Conduct</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 m-none col-4 col-sm-4">
              <h6 className="mb-3">For Restaurants</h6>
              <ul>
                <li>
                  <a href="/">Advertise</a>
                </li>
                <li>
                  <a href="/">Add a Restaurant</a>
                </li>
                <li>
                  <a href="/">Claim your Listing</a>
                </li>
                <li>
                  <a href="/">For Businesses</a>
                </li>
                <li>
                  <a href="/">Owner Guidelines</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="pt-4 pb-4 text-center">
        <div className="container">
          <p className="mt-0 mb-0">
            © Copyright 2020 Osahan Eat. All Rights Reserved
          </p>
          <small className="mt-0 mb-0">
            {" "}
            Made with <i className="fas fa-heart heart-icon text-danger"></i> by
            <Link
              className="text-danger"
              target="_blank"
              to="https://www.instagram.com/iamgurdeeposahan/"
            >
              Gurdeep Osahan
            </Link>
            <Link
              className="text-primary"
              target="_blank"
              to="https://askbootstrap.com/"
            >
              Ask Bootstrap
            </Link>
          </small>
        </div>
      </footer>
    </>
  );
}
