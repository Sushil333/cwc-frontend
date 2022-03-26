import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ListCard({ dishName, price, dishImg }) {
  const [show, setShow] = useState(false);
  const [address, setaddress] = useState("");
  const [username, setusername] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Example POST method implementation:
  async function postData(url, data) {
    console.log(data);
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const placeOrder = () => {
    // const formData = new FormData();
    // formData.append("dishName", dishName);
    // formData.append("price", price);
    // formData.append("address", address);
    // formData.append("username", username);
    const data = { dishName, price, username, address };
    postData("https://403d-104-198-97-56.ngrok.io/api/store/place-orders", data)
      .then((data) => alert("Order is placed"))
      .catch((err) => console.log(err));

    handleClose();
  };

  return (
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
      <div className="list-card-image">
        {/* <a href="/detail"> */}
        <img src={dishImg} alt="Product" className="img-fluid item-img" />
        {/* </a> */}
      </div>
      <div className="p-3 position-relative">
        <div className="list-card-body">
          <h6 className="mb-1">
            <a className="text-black" href="/detail">
              {dishName}
            </a>
          </h6>
          {/* <p className="text-gray mb-3">Pure veg</p> */}
          <p className="text-gray mb-3 time">
            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
              <i className="icofont-wall-clock"></i> 15–25 min
            </span>
            <span className="float-right text-black-50"> ₹{price} </span>
          </p>
        </div>
        {/* <div className="list-card-badge">
          <span className="badge badge-success">OFFER</span>{" "}
          <small>65% off | Use Coupon OSAHAN50</small>
        </div> */}
        <button className="btn btn-primary" onClick={handleShow}>
          BUY NOW
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-label-group">
            <input
              type="text"
              id="user-name"
              name="user-name"
              className="form-control"
              placeholder="Full Name"
              value={username}
              required
              onChange={(e) => setusername(e.target.value)}
            />
            <label htmlFor="user-name">Full Name</label>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              id="order-address"
              name="order-address"
              className="form-control"
              placeholder="Address"
              value={address}
              required
              onChange={(e) => setaddress(e.target.value)}
            />
            <label htmlFor="order-address">Address</label>
          </div>

          <div className="">
            <h4 align="center">{dishName}</h4>
            <h4 align="center">Price: ₹{price}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={placeOrder}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
