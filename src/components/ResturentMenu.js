//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=381853&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResturentMenu = () => {
  const [resinfo, setInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );
    const json = await data.json();

    setInfo(json.data);
    console.log(json);
  };

  console.log(resinfo);
  if (resinfo === null) {
    return <h1>null!!!</h1>;
  }

  const { name, costForTwo, avgRating, locality, cuisines } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.categories[0];

  console.log(itemCards);

  return (
    <div className="restaurant_menu">
      <h1>{name}</h1>
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
