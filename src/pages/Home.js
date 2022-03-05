import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Home() {
  // let tempData = [{}, {}, {}, {}, {}];
  const user = useSelector((state) => state.authentication.user);

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
                  in India
                </h1>
                <h5 className="mb-5 text-secondary font-weight-normal">
                  Lists of top restaurants, dabba valas and mess in Pune, based
                  on ratings
                </h5>
              </div>
              <Link to="/explore" className="btn btn-primary">
                Explore Now
              </Link>
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
                        to="/explore"
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
                <Link to="/explore">
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
                <Link to="/explore">
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
                <Link to="/explore">
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
                <Link to="/explore">
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

      {/* carousel section */}
      {/* <section className="section pt-5 pb-5 products-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Popular Brands</h2>
            <p>
              Top restaurants, cafes, pubs, and bars in Ludhiana, based on
              trends
            </p>
            <span className="line"></span>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                {tempData.map((index, element) => (
                  <div className="item" key={index}>
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-success">
                            <i className="icofont-star"></i> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <Link to="detail.html">
                            <i className="icofont-heart"></i>
                          </Link>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <Link to="detail.html">
                          <img
                            src="https://osahan-eat.surge.sh/img/list/6.png"
                            className="img-fluid item-img"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <Link to="detail.html" className="text-black">
                              World Famous
                            </Link>
                          </h6>
                          <p className="text-gray mb-3">
                            North Indian • American • Pure veg
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock"></i> 20–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-success">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section> */}

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
              <Link to="/signup" className="btn btn-success btn-lg">
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
                <Link to="/create-store">Work With Us</Link>
                {/* {!user &&  <Link to="/login">Work With Us</Link>} */}
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
