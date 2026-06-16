import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);
console.log("listOfRestaurents",listOfRestaurents);
const [filteredRestaurent, setFilteredRestaurent]  = useState(resList);

  const [searchText, setSearchText] = useState("");
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch("https://namastedev.com/api/v1/listRestaurants"
  //   );

  //   const json = await data.json;
  //   console.log(json);
  //   // setListOfRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  // };

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
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
          <RestaurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
