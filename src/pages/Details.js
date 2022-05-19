import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListCard from "../components/ListCard";

import * as api from "../api/index";

export default function Details() {
  const [storeData, setStoreData] = useState(null);
  const [allDishes, setAllDishes] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    api
      .getStore(id)
      .then((res) => {
        setStoreData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    api
      .getStoreDishes(id)
      .then((res) => {
        setAllDishes(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <section className="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center mb-5">
        <h1 className="text-white">{storeData && storeData.storeName}</h1>
        <h6 className="text-white-50">{storeData && storeData.storeAddress}</h6>
      </section>
      <div className="container">
        <div className="row">
          {allDishes &&
            allDishes.map((ele) => (
              <div className="mb-4 pb-2 col-md-4 col-sm-6" key={ele._id}>
                <ListCard
                  id={ele._id}
                  storeId={id}
                  dishName={ele.dishName}
                  price={ele.price}
                  dishImg={ele.imgUrl}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
