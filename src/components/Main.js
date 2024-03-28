import { useState, useEffect } from "react";

import Card from "./Card";

const Main = () => {
  const [listOfResturent, setlistOfRestaurant] = useState([]);

  const topRated = () => {
    const Resturent = listOfResturent.filter((s) => s.info.avgRating > 4.3);
    setlistOfRestaurant(Resturent);
    console.log(Resturent);
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   "data",
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setlistOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(listOfResturent);
  return (
    <>
      <button onClick={topRated}>Top rated resturend</button>
      <div className="main">
        {listOfResturent.map((resturent) => (
          <Card key={resturent.id} resturent={resturent} />
        ))}
      </div>
    </>
  );
};
export default Main;
