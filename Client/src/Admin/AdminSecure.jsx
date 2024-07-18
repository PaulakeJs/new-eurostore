import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotFoundPage from "../Components/404";

function AdminSecure({ children }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    if (user.role == "Admin") {
      setAdmin(true);
    } else {
      console.log("Nice Try");
    }
  }, []);
  return <div>{admin ? <div>{children}</div> : <NotFoundPage />}</div>;
}

export default AdminSecure;
