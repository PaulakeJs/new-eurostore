import React, { useEffect, useState } from "react";
import { NewUser } from "../Apis/userapi";
import Info from "../Components/info";
import Success from "../Components/Success";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      nav("/");
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [status, setStatus] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await NewUser(formData);
      if (res.success) {
        setStatus(true);
        setMessage(res.message);
        localStorage.setItem("token", res.token);
        window.location.href = `/`;
      } else {
        setStatus(false);
        setMessage(res.message);
        console.log("Internal Server Error! Try Again Later");
      }
    } catch (err) {
      setStatus(false);
      setMessage("Internal Server Error! Try Again Later");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div className="md:p-10">
      {status === false ? (
        <Info message={message} />
      ) : status === true ? (
        <Success message={message} />
      ) : null}
      <div className="shadow-md md:max-w-[400px] mx-auto bg-white">
        <h3 className="text-md text-center md:mt-0 mt-4">
          Welcome. Create An Account To Continue!
        </h3>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input bg-white input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input bg-white input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <p className="p-1 text-sm text-gray-500">
              {" "}
              Include Country Code Please without +{" "}
            </p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input bg-white input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="input bg-white input-bordered"
              required
            />
            <label className="label  flex items-center justify-between">
              <a
                href="/auth/new"
                className="text-primary label-text-alt link link-hover"
              >
                Login To Your Account
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white border-0 bg-primary"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
