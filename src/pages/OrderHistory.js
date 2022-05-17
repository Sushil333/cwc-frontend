import React, { useEffect, useState, useRef } from "react";
import ReactToPrint from "react-to-print";

import * as api from "../api/index";
import ComponentToPrint from "../components/ComponentToPrint";

export default function OrderHistory() {
  const [orderList, setOrderList] = useState(null);

  let componentRef = useRef();

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
              <th scope="col">Print Invoice</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((ele, index) => (
              <tr key={ele._id}>
                <th scope="row">{index + 1}</th>
                <td>{ele.dishName}</td>
                <td>₹ {ele.amount}</td>
                <td>{ele.address}</td>
                <td>{new Date(ele.createdAt).toDateString()}</td>
                <td>
                  <ReactToPrint
                    trigger={() => (
                      <button className="btn btn-primary btn-sm">
                        Print Invoice
                      </button>
                    )}
                    content={() => componentRef}
                  />
                </td>

                <td style={{ display: "none" }} key={ele._id}>
                  <ComponentToPrint
                    ref={(el) => (componentRef = el)}
                    data={ele}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
