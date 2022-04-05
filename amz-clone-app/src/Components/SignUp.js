import "../Css/componentscss/login.css";

import amzlogo from "../images/amzlogo.png";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../Redux/Actions/userAction";

const SignUp = () => {
  const dispatch = useDispatch();

  //same working as use history -> that is not available in  6.0 version
  const navigate = useNavigate();
  // to manage states of gmail and password
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const signUpUser = {
    name,
    email: gmail,
    password,
  };

  const registerUser = () => {
    dispatch(userRegister(signUpUser));
    navigate("/");
  };
  return (
    <div>
      <div className="login_page">
        <div className="login_section">
          <div className="amz_logo">
            <img src={amzlogo} alt="logo"></img>
          </div>
          <div className="info">
            <div className="info_section">
              <div>
                <h4>Sign-Up</h4>
              </div>
              <div>
                <b>Enter Full Name</b>
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                ></input>
              </div>
              <div>
                <b>Enter Email</b>
              </div>
              <div>
                <input
                  type="email"
                  onChange={(e) => setGmail(e.target.value)}
                  required
                  value={gmail}
                  autoComplete="cc-number"
                ></input>
              </div>
              <div>
                <b>Enter Password</b>
              </div>
              <div>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  value={password}
                  autoComplete="cc-number"
                ></input>
              </div>
              <div>
                <b>Confirm Password</b>
              </div>
              <div>
                <input
                  type="password"
                  required
                  autoComplete="cc-number"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                ></input>
              </div>
              <div className="login_button">
                <button type="submit" onClick={registerUser}>
                  Continue
                </button>
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
              <Link to="/login">
                <button className="register_btn">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
