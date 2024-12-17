import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("https://assignment.stage.crafto.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, otp }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/quotes");
    } else {
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-4 w-full rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="OTP"
          className="border p-2 mb-4 w-full rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={handleLogin}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
