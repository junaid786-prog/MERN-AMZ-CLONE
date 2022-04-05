import { Link, useParams } from "react-router-dom";
import "../Css/componentscss/productspage.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../Redux/Actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { products } = useSelector((state) => state.all_products);
  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [keyword]);
  return (
    <>
      <h5 className="products_heading">Featured Products</h5>
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
    </>
  );
};
export default Products;
