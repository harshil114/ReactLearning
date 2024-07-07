import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //   console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item.card?.info.name} - {" Rs."}
            {item.card?.info.price / 100 || item.card?.info.defaultPrice / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
