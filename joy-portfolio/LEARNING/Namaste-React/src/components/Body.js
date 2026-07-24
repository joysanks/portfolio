import { useContext, useEffect, useState } from "react";
import RestaurantCard, { isVeg } from "./RestaurentCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  // console.log("filteredRestaurent", filteredRestaurent);

  const RestaurentIsVeg = isVeg(RestaurantCard);

  const isOnline = useOnlineStatus();

  const [searchText, setSearchText] = useState("");

  const {loggedInUser, setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // URL that throws a CORS error
    const apiUrl = "https://namastedev.com/api/v1/listRestaurants";

    // Prefix the URL with corsproxy.io
    const data = await fetch(
      "https://corsproxy.io/?url=" + encodeURIComponent(apiUrl),
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurent(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (isOnline === false)
    return <h1>You are offline!! Please check your internet connection.</h1>;

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {}
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurents = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRestaurent(filteredRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurents.filter(
                (res) => res.info.avgRating > 4,
              );
              setListOfRestaurents(filteredList);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
            <label>User:</label>
            <input value={loggedInUser} className="border border-black p-2 m-2" onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurent.map((restaurent) => (
          <Link
            key={restaurent?.info?.id}
            to={"/restaurants/" + restaurent?.info?.id}
          >
            {restaurent.info.veg ? (
              <RestaurentIsVeg resData={restaurent} />
            ) : (
              <RestaurantCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
