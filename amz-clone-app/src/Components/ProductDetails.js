import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import "../Css/componentscss/Details.css";

import ReactStars from "react-rating-stars-component";
import SearchIcon from "@material-ui/icons/Search";

import { getProductDetails } from "../Redux/Actions/productAction";
import ReviewCard from "./ReviewCard";
import Loader from "./Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { error, product, loading } = useSelector(
    (state) => state.product_detail
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const options = {
    edit: false,
    activeColor: "tomato",
    size: 25,
    isHalf: true,
    value: product.productRating,
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="product">
            <div className="imagePart">
              <Carousel
                className="carouselImage"
                autoPlay={false}
                animation="slide"
              >
                {product.images &&
                  product.images.map((img) => {
                    return <img src={img.url} />;
                  })}
              </Carousel>
            </div>
            <div className="infoPart">
              <div className="right_section">
                <h3>{product.name}</h3>
                <h3>{product.desription}</h3>
                <ReactStars {...options} />
                {product.stock > 0 ? (
                  <p className="green">In Stock</p>
                ) : (
                  <p className="red">Out Of Stock</p>
                )}
                <p>Reviews {product.noOfReviews}</p>
                <p>
                  Arrives: <span>Dec 20 - 25</span>
                </p>
                <a href="">Delivers to pakistan</a>
                <div className="qty">
                  <div className="details_button">
                    <button className="details_button">See Detail</button>
                  </div>
                  <span
                    id="qty_btns"
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                  >
                    +
                  </span>
                  <span id="qty_btns">{qty}</span>
                  <span
                    id="qty_btns"
                    onClick={() => {
                      qty > 1 ? setQty(qty - 1) : setQty(1);
                    }}
                  >
                    -
                  </span>
                </div>
                <div className="details_button">
                  <button className="details_button">See Detail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews_section">
            <div className="reviews_heading">
              <h3>Reviews</h3>
            </div>

            {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews.map((review) => {
                  return <ReviewCard review={review} />;
                })}
              </div>
            ) : (
              <p>no reviews yet</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
