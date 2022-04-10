import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MyProfile() {
  const userInfo = useSelector((state) => state.authState.userInfo);

  useEffect(() => {
    console.log(userInfo);
  });

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
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Old Password"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="New Password"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Confirm New Password"
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
