import React, { useState } from "react";
import "./Login.css";
import logoImg from "../../assets/images/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Vector from "../../assets/images/Vector.png";

function Login() {
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("process");
  //   process, success
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [timer, setTimer] = useState(5);

  const startTimer = () => {
    let countdown = 5;
    const timerInterval = setInterval(() => {
      countdown--;
      setTimer(countdown);
      if (countdown === 0) {
        clearInterval(timerInterval);
        navigate("/");
      }
    }, 1000);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setIsError(false);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      setPageState("success");
      startTimer();
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="login-page">
      <div className="top-section">
        <img src={logoImg} alt="logo-img" className="logo-img" />
        {pageState === "process" && (
          <button onClick={() => navigate("/")} className="close-btn">
            <IoCloseSharp />
          </button>
        )}
      </div>
      {pageState === "process" ? (
        <div className="registration-section">
          <h3 className="register-heading-1">Registration Form</h3>
          <h1 className="register-heading-2">
            Start your success <br />
            Journey here!
          </h1>
          <form onSubmit={submitForm} className="registration-form" noValidate>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {isError && (
              <div className="email-error">
                <span className="error-icon">
                  <MdError />
                </span>
                <span className="message">Enter a valid email address</span>
              </div>
            )}

            <button
              disabled={!name.length > 0 || !email.length > 0}
              className="submit-btn"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="success-section">
          <img src={Vector} alt="Vector" className="success-logo" />
          <h3 className="success-heading-1">Success Submitted</h3>
          <h1 className="success-heading-2">Congratulations</h1>
          <p className="success-para">
            Your request has been successfully submitted to us. We,<br></br> will validate
            your information and reach out to your <br></br>shortly with updates
          </p>
          <p className="redirect-message">
            Redirecting you to Homepage in <b className="sec">{timer} Seconds</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
