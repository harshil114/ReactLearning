import { MEDIA_ASSETS_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2 flex flex-col">
              <span
                style={{ color: "rgba(2, 6, 12, 0.75)" }}
                className="text-lg font-bold"
              >
                {item.card.info.name}
              </span>
              <span className="font-semibold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice}
              </span>
            </div>
            <p
              style={{ color: "rgba(2, 6, 12, 0.6)" }}
              className="text-sm font-semibold"
            >
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/12 p-4">
            <div className="absolute">
              {/* <button className="bg-white text-green-500 text-sm font-bold px-4 py-1 rounded-lg mx-3 bottom-6">
                ADD
              </button> */}
            </div>
            <img
              src={MEDIA_ASSETS_URL + item.card.info.imageId}
              alt="menu_img"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
