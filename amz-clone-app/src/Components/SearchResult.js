import { Link, useParams } from "react-router-dom";
import "../Css/componentscss/productspage.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../Redux/Actions/productAction";
import Loader from "./Loader";
import React from "react";
import Pagination from "react-js-pagination";

import { Slider } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const categories = ["Electronics", "Kitchen & Home", "Pets", "Gaming"];
function SearchResult() {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const [priceForFilter, setPrice] = useState([0, 5000]);
  const priceChangeHandeler = (e, newVal) => {
    setPrice(newVal);
  };

  const ratingChangeHandeler = (e, newVal) => {
    setRating(newVal);
  };

  const [category, setCateory] = useState("");

  const [rating, setRating] = useState(0);
  const [currentPageNo, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const { products, productsCount, loading, resultsPerPage, currentPage } =
    useSelector((state) => state.all_products);

  useEffect(() => {
    dispatch(
      getProduct(keyword, currentPageNo, priceForFilter, category, rating)
    );
  }, [dispatch, keyword, currentPageNo, priceForFilter, category, rating]);

  return (
    <div>
      {loading && <Loader />}
      <h5 className="products_heading">Products</h5>
      {keyword ? (
        <p className="search_results">
          Search results for <span>{keyword}</span>{" "}
        </p>
      ) : (
        <p></p>
      )}

      <div className="upper_part">
        <div className="filteration_section">
          <Typography>Price</Typography>
          <Slider
            value={priceForFilter}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={5000}
            onChange={priceChangeHandeler}
          />
          <Typography>Category</Typography>
          <div className="categories">
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category} onClick={() => setCateory(category)}>
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
          <Typography>Rating</Typography>
          <Slider
            value={rating}
            valueLabelDisplay="auto"
            aria-labelledby="continuous-slider"
            min={0}
            max={5}
            onChange={ratingChangeHandeler}
          />
        </div>
        <div className="products_area">
          {!products ? (
            <h2>No Product To Show</h2>
          ) : (
            products.map((item) => {
              return (
                <div className="category_item" key={item._id}>
                  <div className="item_img item">
                    <img
                      src="https://4.imimg.com/data4/YI/SO/MY-15796416/mens-plain-blue-shirts-500x500.jpg"
                      alt={item.name}
                    ></img>
                  </div>
                  <div className="item_title item">
                    {item.name} is here to present itself get it now
                  </div>
                  <div className="item_Price item">${item.price}</div>
                  <Link to={`/products/${item._id}`}>
                    <div className="details_button">
                      <button className="details_button">See Detail</button>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
      {productsCount > resultsPerPage && (
        <div className="pagination_container">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultsPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText={"next"}
            prevPageText={"previous"}
            firstPageText={"Ist"}
            lastPageText={"last"}
            itemClass="single_item"
            linkClass="single_item_link"
            activeClass="single_item_active"
            activeLinkClass="item_active_link"
          />
        </div>
      )}
    </div>
  );
}

export default SearchResult;
