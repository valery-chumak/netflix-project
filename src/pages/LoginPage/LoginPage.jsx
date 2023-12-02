import "./LoginPage.scss";

const LoginPage = () => {
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
          />
          <input type="password" name="password" placeholder="Password" />
          <button className="login-button">Sign In</button>
          <span className="text">
            New to Netflix? <b>Sign up now</b>
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
