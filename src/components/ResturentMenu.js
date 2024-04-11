//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=381853&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER

import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import DummyCard from "./DummyCard";

const ResturentMenu = () => {
  const { resId } = useParams();
  const resinfo = useResturantMenu(resId);

  console.log(resinfo);
  if (resinfo === null) {
    return <DummyCard />;
  }

  const { name, costForTwo, avgRating, locality, cuisines } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log(itemCards);

  return (
    <div className="m-4 p-2 mx-96 text-center text-pink-950 w-[500]  bg-green-100">
      <h1 className="text-2xl border-y">{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>{costForTwo / 100}- for Two</h4>
      <h4>Rating-{avgRating}</h4>
      <h4>{locality}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <>
            <li key={item.card.info.id}>
              {item.card.info.name} -{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
              Rs.
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ResturentMenu;
