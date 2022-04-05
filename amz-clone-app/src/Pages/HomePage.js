import Heroimg from "../Components/Heroimg";
import MetaData from "../utils/MetaData";
import Products from "../Components/Products";
import { Link } from "react-router-dom";
import "../Css/componentscss/home.css";
export const HomePage = () => {
  return (
    <div>
      <MetaData title="Ecommerce: Shop Now" />
      <Heroimg />
      <Products />
      <div className="see_more_products">
        <Link to="/searchresult" className="button_link">
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
