import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as api from "../api/index";

export default function MyProfile() {
  const userInfo = useSelector((state) => state.authState.userInfo);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formInputs, setformInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setformInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formInputs.oldPassword ||
      !formInputs.newPassword ||
      !formInputs.confirmNewPassword
    ) {
      setError("All fields are required");
      return;
    } else if (formInputs.newPassword !== formInputs.confirmNewPassword) {
      setError("Password didn't matched");
      return;
    } else {
      setError("");
      setSuccess("");
      api
        .reserPassword(formInputs)
        .then((res) => {
          console.log(res.data.data);
          setSuccess("Password updated successfully.");
          
        })
        .catch((err) => {
          setError(err.response.data.data);
        });
    }
  };

  return (
    <>
      {userInfo && (
        <div className="container my-5 text-center">
          <div className="mb-5">
            <h3>{userInfo.name}</h3>
            <h4>{userInfo.email}</h4>
          </div>
          <h5>Change Password</h5>

          <form
            className="d-flex flex-column mx-auto p-3 shadow-sm bg-white"
            style={{ maxWidth: "350px" }}
            onSubmit={handleSubmit}
          >
            {success && <div className="alert alert-danger">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Old Password"
                value={formInputs.oldPassword}
                onChange={handleChange}
                name="oldPassword"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="New Password"
                value={formInputs.newPassword}
                onChange={handleChange}
                name="newPassword"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Confirm New Password"
                value={formInputs.confirmNewPassword}
                onChange={handleChange}
                name="confirmNewPassword"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Change Password
            </button>
          </form>
        </div>
      )}
    </>
  );
}
