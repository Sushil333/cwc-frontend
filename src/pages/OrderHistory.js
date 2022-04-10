import React, { useEffect, useState } from "react";

import * as api from "../api/index";

export default function OrderHistory() {
  const [orderList, setOrderList] = useState(null);

  useEffect(() => {
    api
      .ordersHistory()
      .then((res) => {
        setOrderList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      {!orderList && (
        <div className="d-flex justify-content-center my-5 text-danger">
          <div className="my-5 spinner-grow spinner-grow-xl"></div>
        </div>
      )}
      {orderList && (
        <table className="table my-5 shadow-sm bg-white ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Price</th>
              <th scope="col">Address</th>
              <th scope="col">Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((ele, index) => (
              <tr key={ele._id}>
                <th scope="row">{index + 1}</th>
                <td>{ele.dishName}</td>
                <td>{ele.price}</td>
                <td>{ele.address}</td>
                <td>{new Date(ele.createdAt).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
