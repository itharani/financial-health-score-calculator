import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, score, userData } = location.state || {}; // Extract userData passed from Form
  const [emailSent, setEmailSent] = useState(false);
  
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Determine credit score range and recommendation
  const getRecommendation = (score) => {
    if (score >= 100) {
      return {
        range: "Excellent",
        message: "You have excellent financial habits. Keep up the great work!",
      };
    } else if (score >= 70) {
      return {
        range: "Good",
        message:
          "Your financial habits are good. Consider saving a bit more and paying off any existing debts.",
      };
    } else {
      return {
        range: "Needs Improvement",
        message:
          "Your financial habits need some improvement. Focus on budgeting and timely payments.",
      };
    }
  };

  const { range, message } = getRecommendation(score);

  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      to_name: userData.name,
      user_email: userData.email,
      message: message,
      range: range,
      score: score
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setEmailSent(true)
        },
        (error) => {
          console.log(userData)
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="results-container">
      <div className="card">
        <h2>Results</h2>
        <p>
          Your Calculated Credit Score: <strong>{score}</strong>
        </p>
        <p>
          Credit Score Range: <strong>{range}</strong>
        </p>
        <p>{message}</p>
        <div className="resultspage-buttons">
          {!emailSent && (
            <button onClick={sendEmail} className="btn">
              Send Report to Email
            </button>
          )}
          {emailSent && (
          <p className="success-message">
            Your report has been sent to {userData.email}.
          </p>
          )}
          <button onClick={() => navigate("/")} className="btn">
            Go Back
          </button>
         </div>
      </div>
    </div>
  );
};

export default Results;
