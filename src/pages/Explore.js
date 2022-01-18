import React from "react";

import ListCard from "../components/ListCard";

export default function Explore() {
  let tempData = [{}, {}, {}, {}, {}];
  return (
    <>
      <section className="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
        <h1 className="text-white">Offers Near You</h1>
        <h6 className="text-white-50">
          Best deals at your favourite restaurants
        </h6>
      </section>

      <section className="section pt-5 pb-5 products-listing">
        <div className="container">
          <div className="d-none-m row">
            <div className="col-md-12 mb-3">
              <div className="float-right dropdown">
                <button
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                  className="dropdown-toggle btn btn-outline-info"
                >
                  Sort by: <span className="text-theme">Distance</span>{" "}
                  &nbsp;&nbsp;
                </button>
                <div
                  aria-labelledby=""
                  className="dropdown-menu-right shadow-sm border-0 dropdown-menu"
                  x-placement="bottom-start"
                  style={{
                    position: "absolute",
                    willChange: "transform",
                    top: "0px",
                    left: "0px",
                    transform: "translate3d(0px, 38px, 0px)",
                  }}
                >
                  <a href="#/distance" className="dropdown-item">
                    Distance
                  </a>
                  <a href="#/no-of-coupons" className="dropdown-item">
                    No Of Offers
                  </a>
                  <a href="#/rating" className="dropdown-item">
                    Rating
                  </a>
                </div>
              </div>
              {/* <h4 className="font-weight-bold mt-0 mb-3">
                OFFERS <small className="h6 mb-0 ml-2">299 restaurants</small>
              </h4> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="filters shadow-sm rounded bg-white mb-4">
                <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
                  <h5 className="m-0">Filter By</h5>
                </div>
                <div className="filters-body">
                  <div className="accordion">
                    <div className="filters-card border-bottom p-4">
                      <div className="filters-card-header" id="headingOne">
                        <h6 className="mb-0">
                          <button
                            type="button"
                            className="text-left d-flex align-items-center p-0 btn btn-link btn-block"
                          >
                            Location{" "}
                            <i className="ml-auto icofont-arrow-down"></i>
                          </button>
                        </h6>
                      </div>
                      <div className="collapse show">
                        <div className="filters-card-body card-shop-filters">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb1"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb1"
                              className="custom-control-label"
                            >
                              Ludhiana Junction{" "}
                              <small className="text-black-50">230</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb2"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb2"
                              className="custom-control-label"
                            >
                              Model Town{" "}
                              <small className="text-black-50">95</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb3"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb3"
                              className="custom-control-label"
                            >
                              Civil Lines{" "}
                              <small className="text-black-50">35</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb4"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb4"
                              className="custom-control-label"
                            >
                              Dugri <small className="text-black-50">46</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb5"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb5"
                              className="custom-control-label"
                            >
                              PAU <small className="text-black-50">20</small>
                            </label>
                          </div>
                          <div className="mt-2">
                            <a className="link" href="/listing">
                              See all
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filters-card border-bottom p-4">
                      <div className="filters-card-header" id="headingTwo">
                        <h6 className="mb-0">
                          <button
                            type="button"
                            className="text-left d-flex align-items-center p-0 btn btn-link btn-block"
                          >
                            All cuisines{" "}
                            <i className="ml-auto icofont-arrow-down"></i>
                          </button>
                        </h6>
                      </div>
                      <div className="collapse">
                        <div className="filters-card-body card-shop-filters">
                          <form className="filters-search mb-3">
                            <div className="form-group">
                              <i className="icofont-search"></i>
                              <input
                                placeholder="Start typing to search..."
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </form>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb6"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb6"
                              className="custom-control-label"
                            >
                              American{" "}
                              <small className="text-black-50">156</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb7"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb7"
                              className="custom-control-label"
                            >
                              Pizza <small className="text-black-50">120</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb8"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb8"
                              className="custom-control-label"
                            >
                              Healthy{" "}
                              <small className="text-black-50">130</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb9"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb9"
                              className="custom-control-label"
                            >
                              Vegetarian{" "}
                              <small className="text-black-50">120</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb10"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb10"
                              className="custom-control-label"
                            >
                              Chinese{" "}
                              <small className="text-black-50">111</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb11"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb11"
                              className="custom-control-label"
                            >
                              Hamburgers{" "}
                              <small className="text-black-50">95</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb12"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb12"
                              className="custom-control-label"
                            >
                              Dessert{" "}
                              <small className="text-black-50">50</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb13"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb13"
                              className="custom-control-label"
                            >
                              Chicken{" "}
                              <small className="text-black-50">32</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb14"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb14"
                              className="custom-control-label"
                            >
                              Indian{" "}
                              <small className="text-black-50">156</small>
                            </label>
                          </div>
                          <div className="mt-2">
                            <a className="link" href="/listing">
                              See all
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filters-card border-bottom p-4">
                      <div className="filters-card-header" id="headingOne">
                        <h6 className="mb-0">
                          <button
                            type="button"
                            className="text-left d-flex align-items-center p-0 btn btn-link btn-block"
                          >
                            Feature{" "}
                            <i className="ml-auto icofont-arrow-down"></i>
                          </button>
                        </h6>
                      </div>
                      <div className="collapse">
                        <div className="filters-card-body card-shop-filters">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb15"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb15"
                              className="custom-control-label"
                            >
                              Free Delivery{" "}
                              <small className="text-black-50">156</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb16"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb16"
                              className="custom-control-label"
                            >
                              Coupons{" "}
                              <small className="text-black-50">120</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb17"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb17"
                              className="custom-control-label"
                            >
                              Open Now [1:31am]{" "}
                              <small className="text-black-50">85</small>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filters-card border-bottom p-4">
                      <div className="filters-card-header" id="headingOne">
                        <h6 className="mb-0">
                          <button
                            type="button"
                            className="text-left d-flex align-items-center p-0 btn btn-link btn-block"
                          >
                            Delivery time{" "}
                            <i className="ml-auto icofont-arrow-down"></i>
                          </button>
                        </h6>
                      </div>
                      <div className="collapse">
                        <div className="filters-card-body card-shop-filters">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb18"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb18"
                              className="custom-control-label"
                            >
                              Any Time
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb19"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb19"
                              className="custom-control-label"
                            >
                              25 min
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb20"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb20"
                              className="custom-control-label"
                            >
                              30 min
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb21"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb21"
                              className="custom-control-label"
                            >
                              40 min
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb22"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb22"
                              className="custom-control-label"
                            >
                              45 min
                            </label>
                          </div>
                          <div className="mt-2">
                            <a className="link" href="/listing">
                              See all
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filters-card border-bottom p-4">
                      <div className="filters-card-header" id="headingOne">
                        <h6 className="mb-0">
                          <button
                            type="button"
                            className="text-left d-flex align-items-center p-0 btn btn-link btn-block"
                          >
                            Category{" "}
                            <i className="ml-auto icofont-arrow-down"></i>
                          </button>
                        </h6>
                      </div>
                      <div className="collapse">
                        <div className="filters-card-body card-shop-filters">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb23"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb23"
                              className="custom-control-label"
                            >
                              Delivery{" "}
                              <small className="text-black-50">156</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb24"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb24"
                              className="custom-control-label"
                            >
                              Dine-out{" "}
                              <small className="text-black-50">120</small>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              id="custom-cb25"
                              className="custom-control-input"
                            />
                            <label
                              title=""
                              type="checkbox"
                              htmlFor="custom-cb25"
                              className="custom-control-label"
                            >
                              Cafés<small className="text-black-50">85</small>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filters pt-2">
                <div className="filters-body rounded shadow-sm bg-white">
                  <div className="filters-card p-4">
                    <div>
                      <div className="filters-card-body card-shop-filters pt-0">
                        <div className="custom-control custom-radio">
                          <input
                            name="partner"
                            type="radio"
                            id="custom-cb26"
                            className="custom-control-input"
                          />
                          <label
                            title=""
                            type="checkbox"
                            htmlFor="custom-cb26"
                            className="custom-control-label"
                          >
                            Gold Partner
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            name="partner"
                            type="radio"
                            id="custom-cb27"
                            className="custom-control-input"
                          />
                          <label
                            title=""
                            type="checkbox"
                            htmlFor="custom-cb27"
                            className="custom-control-label"
                          >
                            Order Food Online
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            name="partner"
                            type="radio"
                            id="custom-cb28"
                            className="custom-control-input"
                          />
                          <label
                            title=""
                            type="checkbox"
                            htmlFor="custom-cb28"
                            className="custom-control-label"
                          >
                            Osahan Eat
                          </label>
                        </div>
                        <hr />
                        <small className="text-success">
                          Use code OSAHAN50 to get 50% OFF (up to $30) on first
                          5 orders. T&amp;Cs apply.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                {tempData.map((index, ele) => (
                  <div className="mb-4 pb-2 col-md-4 col-sm-6">
                    <ListCard key={index} />
                  </div>
                ))}
                <div className="text-center load-more col-md-12">
                  <button type="button" className="btn btn-primary">
                    <div className="mr-1 spinner-grow spinner-grow-sm"></div>
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
