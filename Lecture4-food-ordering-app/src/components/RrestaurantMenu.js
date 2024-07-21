import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data.cards[2]?.card?.card?.info;

  const data =
    resInfo?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu max-w-[800px] mx-auto mt-12">
      <h1 className="res-name text-2xl font-bold mb-3">{name}</h1>
      <p className="text-lg mb-2" style={{color:'rgba(2, 6, 12, 0.6)' }}>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h1 className="text-xl font-semibold">Recommended</h1>
      <ul className="text-lg" style={{color:'rgba(2, 6, 12, 0.75)' }}>
        {data?.itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item.card?.info.name} - {" Rs."}
            {item.card?.info.price / 100 || item.card?.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
