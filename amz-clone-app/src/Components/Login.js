import "../Css/componentscss/login.css";

import amzlogo from "../images/amzlogo.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  // making to handle account state => i.e entered gmail, password
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInUser = {
    email: gmail,
    password,
  };

  const loginUser = () => {
    dispatch(userLogin(signInUser));
    navigate("/");
  };

  return (
    <div className="login_page">
      <div className="login_section">
        <div className="amz_logo">
          <img src={amzlogo} alt="amz" />
        </div>
        <div className="info">
          <div className="info_section">
            <div>
              <h4>Sign-In</h4>
            </div>
            <div>
              <b>Email or mobile number</b>
            </div>
            <div>
              <input
                type="gmail"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
              ></input>
            </div>
            <div>
              <b>Enter password</b>
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="login_button">
              <button onClick={loginUser}>Continue</button>
            </div>
            <div>
              <p>
                By continuing, you agree to Amazon's
                <a href="/">Conditions of Use</a> and
                <a href="/">Privacy Notice</a>.
              </p>
            </div>
          </div>
          <div className="signup_button">
            <Link to="/register">
              <button className="register_btn">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
