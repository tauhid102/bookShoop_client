import React from "react";
import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 mt-5">
        <div className="col"></div>
        <div className="col loginFrom pb-3">
          <h3 className="mt-5 text-center">
            New To Book Shop? <span className="text-danger">Register</span>
          </h3>
          <form
            className="row g-3 w-100 inputFrom mt-2"
            onSubmit={handleRegister}
          >
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control border-bottom"
                id="inputAddress"
              />
            </div>
            <div className="col-12">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-12">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="inputPassword4"
                placeholder="Enter Atleast 6 length Password"
              />
            </div>
            {/* {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )} */}
            <p className="text-center">
              {/* Alrealdy Have An Account <Link to="/login">Sign In</Link> */}
            </p>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-dark">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Registration;
