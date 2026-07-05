import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    totalRatingsString,
    slaString,
  } = resData.info;

  return (
    <div className="m-4 p-4 w-[251px]" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{`${avgRating} by ${totalRatingsString} users`}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;