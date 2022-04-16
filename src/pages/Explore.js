import React, { useEffect, useState } from "react";

import StoreCard from "../components/StoreCard";
import * as api from '../api/index'

export default function Explore() {
  const [tempData, setTempData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getStores()
      .then((res) => {
        setTempData(res.data.data);
        setLoading(false);
      });
  }, []);

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
              {/* <div className="float-right dropdown">
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
              </div> */}
              {/* <h4 className="font-weight-bold mt-0 mb-3">
                OFFERS <small className="h6 mb-0 ml-2">299 restaurants</small>
              </h4> */}
            </div>
          </div>
          {/* <div className="row"> */}
            {/* <div className="col-md-3"> */}
              

              {/* filter 2 */}
              {/* <div className="filters pt-2">
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
              </div> */}
            {/* </div> */}

            {/* <div className="col-md-9"> */}
              <div className="row">
                {tempData &&
                  tempData.map((ele) => (
                    <div className="mb-4 pb-2 col-md-4 col-sm-6" key={ele._id}>
                      <StoreCard
                        id={ele._id}
                        storeName={ele.storeName}
                        address={ele.storeAddress}
                      />
                    </div>
                  ))}

                {loading && (
                  <div className="text-center load-more col-md-12">
                    <button type="button" className="btn btn-primary">
                      <div className="mr-1 spinner-grow spinner-grow-sm"></div>
                      Loading...
                    </button>
                  </div>
                )}
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
}
