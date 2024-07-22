import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

  const handleFilter = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Hmm, looks you are offline</h1>;

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body m-8">
      <div className="filter flex mb-8">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid border-black h-8 w-56 font-medium"
            placeholder="Search Restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="button px-4 py-2 mx-4 bg-[#41d4d8] rounded-lg hover:bg-[#4adfe4] font-medium active:bg-[#41d4d8]"
            onClick={() => {
              const filteredRestaurant = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn bg-[#dbcf00] px-5 rounded-lg font-medium hover:bg-[#dad137] active:bg-[#dbcf00]" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
