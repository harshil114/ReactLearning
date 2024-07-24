const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div>
          <div>{item.card.info.name}</div>
          <div>{item.card.info.description}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
