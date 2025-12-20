import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisine,
    avgRaiting,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3> {name}</h3>
      <h4> {cuisine.join(", ")}</h4>
      <h4> {avgRaiting} stars</h4>
      <h4> {costForTwo / 100} FOR TWO</h4>
      <h4> {deliveryTime} minutes</h4>
      {/* <h4> {resData.data.deliveryTime} minutes</h4> */}
    </div>
  );
};

export default RestaurantCard;
