import { Routes, Route } from "react-router-dom";

import "../src/Css/App.css";

import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { getProduct } from "./Redux/Actions/productAction";
import SearchResult from "./Components/SearchResult";
import Profile from "./Components/Profile";
import CreateProduct from "./Components/CreateProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/products/:id" element={<DetailsPage />}></Route>
        <Route exact path="/search/:keyword" element={<SearchResult />}></Route>
        <Route exact path="/register" element={<SignUpPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/searchresult" element={<SearchResult />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route
          exact
          path="/admin/newproduct"
          element={<CreateProduct />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
