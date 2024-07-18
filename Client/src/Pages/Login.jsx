import React, { useEffect, useState } from "react";
import { LoginUser } from "../Apis/userapi";
import Info from "../Components/info";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      nav("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const response = await LoginUser(formData);
      if (response.success) {
        localStorage.setItem("token", response.token);
        setStatus(null);
        window.location.href = "/";
      } else {
        setStatus(false);
        setMessage(response.message);
      }
    } catch (err) {
      alert(err.message);
    }
    setPassword("");
  };

  return (
    <div className="md:p-10">
      <div className="shadow-md md:max-w-[400px] mx-auto bg-white">
        {status == false && <Info message={message} />}
        <h3 className="text-md text-center md:mt-0 mt-4">
          Welcome Back. Please Login!
        </h3>

        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input bg-white input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input bg-white input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label flex items-center justify-between">
              <a
                href="#"
                className="text-primary label-text-alt link link-hover"
              >
                Forgot password?
              </a>
              <a
                href="/auth/new"
                className="text-primary label-text-alt link link-hover"
              >
                Create An Account
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white border-0 bg-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
