import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  console.log("listOfRestaurents", listOfRestaurents);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // URL that throws a CORS error
    const apiUrl =
      "https://namastedev.com/api/v1/listRestaurants";

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

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurents = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRestaurent(filteredRestaurents);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurent.map((restaurent) => (
          <Link key={restaurent?.info?.id} to = {"/restaurants/" + restaurent?.info?.id} ><RestaurantCard  resData={restaurent} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
