import React from "react";

import { Link } from "react-router-dom";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="pt-5 pb-5 homepage-search-block position-relative">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="homepage-search-title">
                <h1 className="mb-2 font-weight-normal">
                  <span className="font-weight-bold">Find Awesome Deals</span>{" "}
                  in Australia
                </h1>
                <h5 className="mb-5 text-secondary font-weight-normal">
                  Lists of top restaurants, cafes, pubs, and bars in Melbourne,
                  based on trends
                </h5>
              </div>
              {/* <div className="homepage-search-form"> */}
              {/* <form className="form-noborder">
                  <div className="form-row">
                    <div className="col-lg-3 col-md-3 col-sm-12 form-group">
                      <div className="location-dropdown">
                        <i className="icofont-location-arrow"></i>
                        <select
                          className="custom-select form-control-lg select2-hidden-accessible"
                          data-select2-id="1"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="3"> Quick Searches </option>
                          <option> Breakfast </option>
                          <option> Lunch </option>
                          <option> Dinner </option>
                          <option> Cafés </option>
                          <option> Delivery </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="2"
                          style={{ width: "175px" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-controls="panel-1"
                              tabIndex="0"
                              aria-labelledby="select2-73o7-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-73o7-container"
                                role="textbox"
                                aria-readonly="true"
                                title=" Quick Searches "
                              >
                                {" "}
                                Quick Searches{" "}
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 form-group">
                      <input
                        type="text"
                        placeholder="Enter your delivery location"
                        className="form-control form-control-lg"
                      />
                      <Link className="locate-me" to="#">
                        <i className="icofont-ui-pointer"></i> Locate Me
                      </Link>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                      <Link
                        to="listing.html"
                        className="btn btn-primary btn-block btn-lg btn-gradient"
                      >
                        Search
                      </Link>
                    </div>
                  </div>
                </form> */}
              {/* </div> */}
              {/* <h6 className="mt-4 text-shadow font-weight-normal">
                E.g. Beverages, Pizzas, Chinese, Bakery, Indian...
              </h6> */}
            </div>
          </div>
        </div>
      </section>
      {/* Four cards */}
      <section className="section pt-5 pb-5 bg-white homepage-add-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="products-box">
                <Link to="listing.html">
                  <img
                    alt=""
                    src="https://osahan-eat.surge.sh/img/pro1.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="products-box">
                <Link to="listing.html">
                  <img
                    alt=""
                    src="https://osahan-eat.surge.sh/img/2.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="products-box">
                <Link to="listing.html">
                  <img
                    alt=""
                    src="https://osahan-eat.surge.sh/img/pro3.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="products-box">
                <Link to="listing.html">
                  <img
                    alt=""
                    src="https://osahan-eat.surge.sh/img/pro4.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a member */}
      <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
        <div className="container">
          <div className="section-header text-center white-text">
            <h2>Become a Member</h2>
            <p>Lorem Ipsum is simply dummy text of</p>
            <span className="line"></span>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <Link to="register.html" className="btn btn-success btn-lg">
                Create an Account <i className="fa fa-chevron-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-5 pb-5 text-center bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h5 className="m-0">
                Operate food store or restaurants?{" "}
                <Link to="login.html">Work With Us</Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
