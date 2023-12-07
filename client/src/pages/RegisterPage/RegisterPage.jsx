import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.scss";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", { email, password, username });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="login-button" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
            />
            <button className="register-button" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              name="username"
              ref={usernameRef}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="register-button" onClick={handleRegister}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
