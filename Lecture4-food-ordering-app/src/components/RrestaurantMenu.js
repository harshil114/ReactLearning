import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
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

  // console.log(
  //   resInfo?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      //   ||
      // c.card?.card?.["@type"] ===
      //   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log(categories);
  return (
    <div className="menu max-w-[800px] mx-auto mt-12">
      <h1 className="res-name text-2xl font-bold mb-3">{name}</h1>
      <p className="text-lg mb-2" style={{ color: "rgba(2, 6, 12, 0.6)" }}>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
