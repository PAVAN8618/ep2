//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=381853&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER
import { useState } from "react";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import DummyCard from "./DummyCard";
import { ResturantCategory } from "./ResturantCategory";

const ResturentMenu = () => {
  const { resId } = useParams();
  const resinfo = useResturantMenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  if (resinfo === null) {
    return <DummyCard />;
  }

  const { name, avgRating, cuisines } = resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  return (
    <div className="m-4 p-2 mx-52 text-center text-pink-950 w-[800]  bg-green-50">
      <h1 className="text-2xl border-y font-bold">{name}</h1>
      <h3>{cuisines.join(",")}</h3>

      <h4>Rating-{avgRating}</h4>

      <h2>Menu</h2>
      <ul>
        {categories.map((category, index) => (
          <ResturantCategory
            key={category.card.card.id}
            data={category.card.card}
            showItem={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ResturentMenu;
