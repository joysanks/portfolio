import { useState } from "react";
import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurents.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
