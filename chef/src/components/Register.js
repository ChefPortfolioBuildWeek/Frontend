import React, { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

import Login from "./ChefLogin.js";
import RegisterForm from "./Register";

const RegisterB = styled.div`
  background: black;
  margin: 0;
  padding: 3%;
  margin-left: 20%;
  margin-right: 20%;
  border-bottom: 2px solid purple;
`;

const LoginB = styled.div`
  background: black;
  margin-left: 20%;
  margin-right: 20%;
  padding: 3%;
`;

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault(props);
   const baseURL = "https://pacific-mountain-29202.herokuapp.com/api";
   axios
    .post(`${baseURL}/auth/register`, { username: username, password })
   .then(res => {
     console.log(res);
     localStorage.setItem("token", res.data.token);
     props.history.push("/ChefLogin");
   })
  .catch(err => {
  console.log(err);
    });
  };

  return (
    <div className="RegisterForm">
      <form onSubmit={handleSubmit}>
        <p>Register</p>
        <div className="inputregister">
          <input
            value={username}
            name="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
            placeholder="username"
          />
          <input
            value={password}
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <button type="submit" className="SubmitButtonregister">
          Connect!
        </button>
      </form>

    </div>
  );
}
export default Register;