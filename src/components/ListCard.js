import React from "react";

export default function ListCard() {
  return (
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
      <div className="list-card-image">
        <div className="star position-absolute">
          <span className="badge badge-success">
            <i className="icofont-star"></i> 3.1 (300+)
          </span>
        </div>
        <div className="favourite-heart position-absolute text-danger">
          <a href="/detail">
            <i className="icofont-heart"></i>
          </a>
        </div>
        <div className="member-plan position-absolute">
          <span className="badge badge-dark">Promoted</span>
        </div>
        <a href="/detail">
          <img
            src="https://osahan-eat.surge.sh/img/list/1.png"
            alt="Product"
            className="img-fluid item-img"
          />
        </a>
      </div>
      <div className="p-3 position-relative">
        <div className="list-card-body">
          <h6 className="mb-1">
            <a className="text-black" href="/detail">
              Bite Me Sandwiches
            </a>
          </h6>
          <p className="text-gray mb-3">North Indian • American • Pure veg</p>
          <p className="text-gray mb-3 time">
            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
              <i className="icofont-wall-clock"></i> 15–25 min
            </span>
            <span className="float-right text-black-50"> $100 FOR TWO</span>
          </p>
        </div>
        <div className="list-card-badge">
          <span className="badge badge-success">OFFER</span>{" "}
          <small>65% off | Use Coupon OSAHAN50</small>
        </div>
      </div>
    </div>
  );
}
