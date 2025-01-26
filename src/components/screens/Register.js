import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { cbsignup } = useAuth();
  const { login } = useAuth();
  const { addUserData } = useAuth();
  const navigate = useNavigate();

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conf, setConf] = useState();

  function handleSubmit() {
    if (
      fname !== "" &&
      lname !== "" &&
      email !== "" &&
      password !== "" &&
      conf !== ""
    ) {
      if (password === conf) {
        cbsignup(email, password, fname, lname);
      } else {
        console.log("Passwords do not match!");
      }
    } else {
      console.log("Please fill all fields!");
    }
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setConf("");
  }

  return (
    <div className="flex justify-center items-center box-border bg-white h-screen">
      <div className="rounded-2xl bg-gray-100 w-1/3 p-10">
        <p className="font-semibold text-4xl mb-8">Sign up to minihome</p>
        <p className="text-lg mb-8 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-800">
            Login
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="firstname"
            id="firstnametxt"
            placeholder="First name"
            className="box-border p-5 bg-white w-full rounded-xl text-xl mb-4 focus:outline-none"
            value={fname}
            onChange={(event) => {
              setFname(event.target.value);
            }}
          />
          <input
            type="text"
            name="lastname"
            id="lastnametxt"
            placeholder="Last name"
            className="box-border p-5 bg-white w-full rounded-xl text-xl mb-4 focus:outline-none"
            value={lname}
            onChange={(event) => {
              setLname(event.target.value);
            }}
          />
        </div>
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
          name="password"
          id="passwordtxt"
          placeholder="Password"
          className="box-border p-5 bg-white w-full rounded-xl text-xl mb-4 focus:outline-none"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="password"
          name="repeatpassword"
          id="repeatpasswordtxt"
          placeholder="Confirm password"
          className="box-border p-5 bg-white w-full rounded-xl text-xl mb-4 focus:outline-none"
          value={conf}
          onChange={(event) => {
            setConf(event.target.value);
          }}
        />
        <button
          className="bg-black text-white text-xl font-medium box-border p-5 w-full rounded-xl"
          onClick={handleSubmit}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Register;
