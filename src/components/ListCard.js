import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import * as api from "../api/index";

export default function ListCard({ dishName, price, dishImg, storeId }) {
  const [show, setShow] = useState(false);
  const [address, setaddress] = useState("");

  const navigate = useNavigate();

  const user = useSelector((state) => state.authState.userInfo);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const placeOrder = () => {

    if (!address) alert("Address is required!");
    else {
      handlePayment();
      handleClose();
    }
  };

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_sdG0l6pxgteYAv",
      amount: data.amount,
      currency: data.currency,
      name: dishName,
      description: "Test Transaction",
      image: dishImg,
      order_id: data.id,
      handler: async (response) => {

        // creating object for mongodb
        const dd = {
          dishName,
          amount: price,
          username: user.name,
          address,
          storeId,
          userId: user.id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature
        };

        try {
          const { data } = await api.razorpayVerification(response);
          if(data) await api.placeOrder(dd);
          alert(data.message);
          navigate('/order-history')
        } catch (error) {
          console.log(error);
        }

      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
		try {
			const { data } = await api.razorpayOrderPayment({ amount: price });
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className="list-card bg-white rounded overflow-hidden position-relative shadow-sm">
      <div className="list-card-image">
        <img src={dishImg} alt="Product" className="card-img-top" />
      </div>
      <div className="p-3 position-relative">
        <div className="list-card-body">
          <h6 className="mb-2">{dishName}</h6>
          {/* <p className="text-gray mb-3">Pure veg</p> */}
          <p className="text-gray mb-3">
            <span className="py-1 px-2 bg-light rounded-sm text-dark">
              {" "}
              ₹ {price}
            </span>
          </p>
        </div>
        {/* <div className="list-card-badge">
          <span className="badge badge-success">OFFER</span>{" "}
          <small>65% off | Use Coupon OSAHAN50</small>
        </div> */}
        {user && (
          <button className="btn btn-sm btn-primary" onClick={handleShow}>
            BUY NOW
          </button>
        )}
        {!user && (
          <Link className="btn btn-sm btn-primary" to="/login">
            BUY NOW
          </Link>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-label-group">
            <input
              type="text"
              id="order-address"
              name="order-address"
              className="form-control"
              placeholder="Address"
              value={address}
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
