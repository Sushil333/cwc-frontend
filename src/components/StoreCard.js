import React from "react";
import { Link } from "react-router-dom";
export default function StoreCard({ id, storeName, address }) {
  return (
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
      <div className="list-card-image">
        <div className="star position-absolute">
          <span className="badge badge-success">
            <i className="icofont-star"></i> 3.1 (300+)
          </span>
        </div>
        <Link to={`/explore/${storeName}/${id}`}>
          <img
            src="https://osahan-eat.surge.sh/img/list/1.png"
            alt="Product"
            className="img-fluid item-img"
          />
        </Link>
      </div>
      <div className="p-3 position-relative">
        <div className="list-card-body">
          <h6 className="mb-1">
            <Link to={`/explore/${storeName}/${id}`} className="text-black" >
              {storeName}
            </Link>
          </h6>
          <p className="text-gray mb-3">{address}</p>
        </div>
      </div>
    </div>
  );
}
