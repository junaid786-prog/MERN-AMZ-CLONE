import homeimg from "../images/amazon_background.jpg";
import "../Css/componentscss/home.css";
const Heroimg = () => {
  return (
    <div className="home">
      <div className="homepic">
        <img src={homeimg} alt="amazon background" />
      </div>
    </div>
  );
};
export default Heroimg;
