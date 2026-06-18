import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FOOD_IMG_URL, MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // URL that throws a CORS error
    const apiUrl = MENU_URL + resId;

    // Prefix the URL with corsproxy.io
    const data = await fetch(
      "https://corsproxy.io/?url=" + encodeURIComponent(apiUrl),
    );
    const json = await data?.json();
    setResInfo(json);
  };

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
  console.log("itemCards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>
        {avgRatingString}({totalRatingsString})
      </p>

      {itemCards.map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name}--Rs
          {item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100}{" "}
          <img className="menu-item-image" src={FOOD_IMG_URL + item?.card?.info?.imageId} alt="img"></img>
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
