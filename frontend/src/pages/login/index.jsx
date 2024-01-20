import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [enteredWorkerId, setEnteredWorkerId] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const hardcodedWorkerId = "kevin"; // Replace with your hardcoded worker ID
  const hardcodedPassword = "123"; // Replace with your hardcoded password

  const handleSignIn = () => {
    if (
      enteredWorkerId === hardcodedWorkerId &&
      enteredPassword === hardcodedPassword
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid worker ID or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="login-heading">Login</h1>
        <input
          name="email"
          className="input-field"
          placeholder="Worker ID"
          type="text"
          value={enteredWorkerId}
          onChange={(e) => setEnteredWorkerId(e.target.value)}
        />
        <input
          name="password"
          className="input-field"
          placeholder="Password"
          type="password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
