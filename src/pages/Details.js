import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListCard from "../components/ListCard";

export default function Details() {
  const [storeData, setStoreData] = useState(null);
  const [allDishes, setAllDishes] = useState([]);

  let { id } = useParams();
  let url = `https://8f47-34-83-143-84.ngrok.io/api/store/dishes/get-store-dishes/${id}`;
  useEffect(() => {
    fetch(`https://8f47-34-83-143-84.ngrok.io/api/store/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStoreData(data.data);
      })
      .catch((err) => console.log(err));

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllDishes(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, [id, url]);

  return (
    <div className="container">
      <section className="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center mb-5">
        <h1 className="text-white">{storeData && storeData.storeName}</h1>
        <h6 className="text-white-50">{storeData && storeData.storeAddress}</h6>
      </section>

      <div className="row">
        {allDishes &&
          allDishes.map((ele) => (
            <div className="mb-4 pb-2 col-md-4 col-sm-6" key={ele._id}>
              <ListCard
                id={ele._id}
                dishName={ele.dishName}
                price={ele.price}
                dishImg={ele.imgUrl}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
