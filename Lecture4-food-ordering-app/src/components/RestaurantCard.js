import { MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={MEDIA_ASSETS_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
