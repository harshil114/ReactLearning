import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  // console.log(data);
  return (
    <div className="m-4 p-4">
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">
          {data?.data?.title} ({data?.data?.title?.length})
        </span>
        <span>▽</span>
      </div>
      <ItemList items={data.data.itemCards} />
      {/* {console.log(data.data.itemCards.length)} */}
    </div>
  );
};

export default RestaurantCategory;
