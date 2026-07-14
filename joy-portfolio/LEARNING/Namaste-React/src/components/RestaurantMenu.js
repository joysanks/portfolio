import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FOOD_IMG_URL, MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantsCategory";
import { title } from "framer-motion/client";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   // URL that throws a CORS error
  //   const apiUrl = MENU_URL + resId;

  //   // Prefix the URL with corsproxy.io
  //   const data = await fetch(
  //     "https://corsproxy.io/?url=" + encodeURIComponent(apiUrl),
  //   );
  //   const json = await data?.json();
  //   setResInfo(json);
  // };

  console.log("resInfo", resInfo);
  if (resInfo === null) return <Shimmer />;

  const {
    id,
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log("itemCards", resInfo?.data?.cards);

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  console.log("categories", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <p className="my-2">{costForTwo}</p>
      <p className="my-2">
        ⭐{avgRatingString}({totalRatingsString})
      </p>

      {/* {itemCards.map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name}--Rs
          {item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100}{" "}
          <img
            className="menu-item-image"
            src={FOOD_IMG_URL + item?.card?.info?.imageId}
            alt="img"
          ></img>
        </li>
      ))} */}
      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
