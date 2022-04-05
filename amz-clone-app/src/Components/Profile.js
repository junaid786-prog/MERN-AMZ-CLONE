import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import profile_img from "../images/avtar.jpg";
import "../Css/componentscss/profile.css";
import { userProfile } from "../Redux/Actions/userAction";
import Loader from "./Loader";

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile());
  }, []);
  const { loading, user } = useSelector((state) => state.user_profile);
  return (
    <>
      {loading ? (
        <Loader />
      ) : user ? (
        <>
          <div className="profile_section">
            <div className="left_side">
              <img src={profile_img} />
            </div>
            <div className="right_side">
              <h3>Name</h3>
              <h4>{user.name}</h4>
              <h3>Email</h3>
              <h4>{user.email}</h4>
              <h3>Address</h3>
              <h4>Lahore, Punjab, Pakistan</h4>
              <h3>Role</h3>
              <h4>{user.role}</h4>
            </div>
          </div>
          <div className="orders_section">
            <table>
              <tr>
                <th>Product id</th>
                <th>Product name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>1476348843</td>
                <td>Dell WEC</td>
                <td>14</td>
                <td>1233</td>
              </tr>
              <tr>
                <td>1476348843</td>
                <td>Dell WEC</td>
                <td>14</td>
                <td>1233</td>
              </tr>
              <tr>
                <td>1476348843</td>
                <td>Dell WEC</td>
                <td>14</td>
                <td>1233</td>
              </tr>
            </table>
          </div>
          <div className="details_button">
            <button className="details_button">Log Out</button>
          </div>
        </>
      ) : (
        <h3>No User</h3>
      )}
    </>
  );
}

export default Profile;
