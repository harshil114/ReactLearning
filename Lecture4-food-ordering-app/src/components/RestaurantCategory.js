import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  // console.log(data);

  const [showItems,setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  }

  return (
    <div className="p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.data?.title} ({data?.data?.title?.length})
        </span>
        <span>▽</span>
      </div>

     {showItems &&  <ItemList items={data.data.itemCards} />}

     <div className="bg-gray-200 w-90 h-4 mt-8"></div>


      {/* {console.log(data.data.itemCards.length)} */}
    </div>
  );
};

export default RestaurantCategory;
