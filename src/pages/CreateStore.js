import React, { useState } from "react";

export default function CreateStore() {
  const [storeName, setStoreName] = useState("");
  const [subscriptionPrice, setSubscriptionPrice] = useState("");
  const [mobileNo, setContactNo] = useState("");
  const [storeAddress, setStoreAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let url = "https://cwc-api.herokuapp.com/api/store/create";
    let data = {
      storeName,
      mobileNo,
      storeAddress,
      subscriptionPrice,
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                  <h3 className="login-heading mb-4">Create New Store</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="storeName"
                        className="form-control"
                        placeholder="Store Name"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        required
                      />
                      <label for="storeName">Store Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="number"
                        min="0"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Subscription Price"
                        value={subscriptionPrice}
                        onChange={(e) => setSubscriptionPrice(e.target.value)}
                        required
                      />
                      <label for="inputEmail">Subscription Price</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="tel"
                        id="mobileNo"
                        className="form-control"
                        placeholder="Conatct No"
                        value={mobileNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        required
                      />
                      <label for="mobileNo">Contact No</label>
                    </div>
                    <div className="form-label-group mb-4">
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Address"
                        value={storeAddress}
                        onChange={(e) => setStoreAddress(e.target.value)}
                        id="storeAddress"
                        required
                      ></textarea>
                    </div>
                    <button className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
                      Create Store
                    </button>
                    <div className="text-center pt-3">
                      After verification store will be activated.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
