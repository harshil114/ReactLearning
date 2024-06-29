import RestaurantCard from "./RestaurantCard";
import { useEffect, useLayoutEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=23.022505&lng=72.5713621"
      );
      const json = await data.json();
      setRestaurantList(json?.data?.success?.cards);
    } catch (e) {
      setError(true);
    }
  };

  const handleFilter = () => {
    const filterList = resList.filter((res) => res.info.avgRating > 4.5);
    setRestaurantList(filterList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {error ? (
          <p style={{ color: "red", fontSize: "1.8rem" }}>
            Server error. Please try again later.
          </p>
        ) : (
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;