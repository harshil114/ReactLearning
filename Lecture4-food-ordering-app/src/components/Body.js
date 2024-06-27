import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [topRatedRestaurant,settopRatedRestaurant] = useState(resList);
  const handleFilter = () => {
    const filterList = resList.filter((res) => res.info.avgRating > 4.5 );
    settopRatedRestaurant(filterList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRatedRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
