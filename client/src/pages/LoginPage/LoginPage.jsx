import { useContext, useState } from "react";
import { login } from "../../context/authContext/api";
import { AuthContext } from "../../context/authContext/authContext";
import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await login({ email, password }, dispatch);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            placeholder="Email or Phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Sign In
          </button>
          <span className="text">
            New to Netflix?{" "}
            <Link to="/register" className="link">
              <b>Sign up now</b>
            </Link>
          </span>
          <span className="copyright">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
