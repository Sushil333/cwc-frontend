import React, { useEffect } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/bootstrap.min.css";
import "./assets/icofont.min.css";
import "./assets/select2.min.css";
import "./assets/osahan.css";

import Router from "./routes";
import { useDispatch } from "react-redux";
import { isAuthenticated } from "./redux/actions/authAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isAuthenticated());
  }, [dispatch]);
  return <Router />;
}

export default App;
