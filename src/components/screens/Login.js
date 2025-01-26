import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    if (email !== "" && password !== "") {
      login(email, password);
    } else {
      console.log("Please fill all fields!");
    }
  }

  return (
    <div className="flex justify-center items-center box-border bg-white h-screen">
      <div className="rounded-2xl bg-gray-100 w-1/3 p-10">
        <p className="font-semibold text-4xl mb-3">Login to minihome</p>
        <p className="text-lg mb-8 font-medium">
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-blue-800">
            Register
          </Link>
        </p>
        <input
          type="text"
          name="email"
          id="emailtxt"
          placeholder="Email"
          className="box-border p-5 bg-white w-full rounded-xl text-xl mb-4 focus:outline-none"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="name"
          id="passwordtxt"
          placeholder="Password"
          className="box-border p-5 bg-white w-full rounded-xl text-xl mb-4 focus:outline-none"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className="bg-black text-white text-xl font-medium box-border p-5 w-full rounded-xl"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
