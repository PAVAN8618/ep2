import ItemsList from "./ItemsList";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
export const ResturantCategory = ({ data, showItem, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  //console.log(data);
  return (
    <div className="shadow-lg bg-slate-100 mt-4 p-5">
      <div
        className=" flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span className="mr-10">
          {showItem ? <SlArrowDown /> : <SlArrowUp />}
        </span>
      </div>
      {showItem && <ItemsList items={data.itemCards} />}
    </div>
  );
};
