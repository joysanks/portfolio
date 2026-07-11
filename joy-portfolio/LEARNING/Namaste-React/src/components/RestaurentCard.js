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
    <div className="m-4 p-4 w-[251px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{`${avgRating} by ${totalRatingsString} users`}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

// Higher Order Component (HOC) - A function that takes a component as an argument and returns a new component with additional functionality. HOCs are used to add common functionality to multiple components without repeating code.

export const isVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-300 text-black rounded-3xl m-2 p-2">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
