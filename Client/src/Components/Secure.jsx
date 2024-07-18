import React, { useEffect } from "react";
import { GetLoggedUser } from "../Apis/userapi";
import Verify from "../Pages/Verify";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function Secure({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
          const res = await GetLoggedUser();
          if (res.success) {
            dispatch(setUser(res?.data));
          } else {
            localStorage.removeItem("token");
            window.location.href = "/auth/login";
          }
        } else {
          window.location.href = "/auth/login";
        }
      } catch (err) {
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
      }
    };

    getUser();
  }, []);

  return <div>{user && <div>{children}</div>}</div>;
}

export default Secure;
