import logo from "../logo.png";
import profile from "../images/avtar.jpg";
import "../Css/componentscss/header.css";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  // to set keyword for search functionality
  const [keyword, setKeyword] = useState("");

  //
  function clearFields() {
    setKeyword("");
  }
  const searchHandler = (e) => {
    e.preventDefault();
    // trim to finish all whitespaces
    if (keyword.trim()) navigate(`/search/${keyword}`);
    else navigate(`/searchresult`);
    clearFields();
  };

  const { user } = useSelector((state) => state.user);
  return (
    <>
      {!user && console.log("logged in")}
      <div className="hd">
        <div className="header">
          <Link to="/">
            <div className="web_logo">
              <img src={logo} alt="logo img"></img>
            </div>
          </Link>
          <div className="new-made">
            <div className="search_bar">
              <input
                type="text"
                className="search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="searchIcon">
              <SearchIcon onClick={searchHandler} />
            </div>
          </div>
          <div className="option_section">
            <div className="profile options">
              {user ? (
                <Link to="/profile">
                  <div className="avtar_profile">
                    <Avatar src={profile} />
                  </div>
                </Link>
              ) : (
                <Link to="/register">
                  <AccountCircleIcon className="profileicon" />
                </Link>
              )}
            </div>
            <div className="options">
              <p>Returns</p>
              <span>&Orders</span>
            </div>
          </div>

          <Link to="/cart">
            <div className="basket">
              <ShoppingBasketIcon />
              {/* <div>{total_quantity}</div> */}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
