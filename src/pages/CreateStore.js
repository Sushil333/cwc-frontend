import React, { useState } from "react";

export default function CreateStore() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setContactNo] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [aadhar, setAadhar] = useState(null);
  const [pancard, setPancard] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    let url = "https://8f47-34-83-143-84.ngrok.io/api/store/create";

    let formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
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
        window.location.replace("/explore");
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
        <h3 className="login-heading mb-2">Create New Store</h3>

        <div className="d-flex justify-content-between">
          <div className="form-label-group mr-1" style={{ width: "100%" }}>
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-label-group ml-1" style={{ width: "100%" }}>
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
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
            maxLength={10}
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
