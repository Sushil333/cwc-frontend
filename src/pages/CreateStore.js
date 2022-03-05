import React, { useState } from "react";

export default function CreateStore() {
  const [storeName, setStoreName] = useState("asd");
  const [email, setEmail] = useState("asd@ad.com");
  const [mobileNo, setContactNo] = useState("sad");
  const [storeAddress, setStoreAddress] = useState("asd");
  const [aadhar, setAadhar] = useState(null);
  const [pancard, setPancard] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    let url = "https://d96b-34-82-86-80.ngrok.io/api/store/create";

    let formData = new FormData();

    formData.append("email", email);
    formData.append("storeName", storeName);
    formData.append("mobileNo", mobileNo);
    formData.append("storeAddress", storeAddress);
    formData.append("aadhar", aadhar);
    formData.append("pancard", pancard);
    // };

    console.log(formData);
    fetch(url, {
      method: "POST", // or 'PUT'
      body: formData,
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
    //   <div className="container-fluid">
    //     <div className="row no-gutter">
    //       <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    //       <div className="col-md-8 col-lg-6">
    //         <div className="login d-flex align-items-center py-5">

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );

    <div className="container mt-5">
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
        id="myForm"
        encType="multipart/form-data"
      >
        <h3 className="login-heading mb-4">Create New Store</h3>

        <div className="form-label-group">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>

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
          <label htmlFor="storeName">Store Name</label>
        </div>

        {/* <div className="form-label-group">
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
          <label htmlFor="inputEmail">Subscription Price</label>
        </div> */}

        <div className="form-label-group">
          <input
            type="number"
            id="mobileNo"
            className="form-control"
            placeholder="Conatct No"
            value={mobileNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
          <label htmlFor="mobileNo">Contact No</label>
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

        <div className="mb-2">
          <p>Upload Documents</p>
          <div className="d-flex gap-2">
            <div className="form-group d-flex flex-column">
              <label htmlFor="aadhar">Upload Aadhar card</label>
              <input
                type="file"
                id="aadhar"
                name="aadhar"
                onChange={(e) => setAadhar(e.target.files[0])}
                required
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="pancard">Upload Pan card</label>
              <input
                type="file"
                id="pancard"
                name="pancard"
                onChange={(e) => setPancard(e.target.files[0])}
                required
              />
            </div>
          </div>
        </div>

        <button className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
          Create Store
        </button>

        <div className="text-center pt-3">
          After verification store will be activated.
        </div>
      </form>
    </div>
  );
}
