import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const INITIAL_USER_DATA = {
    name: "",
    age: "",
    gender: "",
    email: "",
}
const Welcome = () => {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/form", { state: { userData } }); // Pass userData to Form page
  };

  return (
    <div className="welcome-page">
      <div className="welcome-card">
        <h1>Welcome to the Financial Score Calculator</h1>
        <p>Let’s get started by knowing you better!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={userData.age}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
