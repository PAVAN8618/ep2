import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemsList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-300 m-2 p-2 flex justify-between"
        >
          <div className="text-left w-9/12">
            <span className="p-2 font-semibold ">{item.card.info.name} -</span>
            <span className="text-sm">
              ₹{" "}
              {(item.card.info.price && item.card.info.price / 100) ||
                item.card.info.defaultPrice / 100}{" "}
            </span>
            <p className="text-xs pt-3">{item.card.info.description}</p>
          </div>
          <div className="">
            <button
              className="absolute text-sm w-12 p-2 rounded-lg bg-black text-white"
              onClick={() => handleClick(item)}
            >
              ADD+
            </button>
            <img
              alt="img"
              className="w-20 h-20 rounded-md"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
