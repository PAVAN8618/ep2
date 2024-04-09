import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Main = () => {
  const [listOfResturent, setlistOfRestaurant] = useState([]);
  const [filterResturent, setFilterResturent] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  const topRated = () => {
    const Resturent = listOfResturent.filter((s) => s.info.avgRating > 4.2);
    setlistOfRestaurant(Resturent);
    console.log(Resturent);
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    let filterdata = listOfResturent.filter((search) =>
      search.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    {
      filterdata && setFilterResturent(filterdata);
    }
    setsearchtext("");
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(listOfResturent);
  return (
    <>
      <div className="filter">
        <input
          type="text"
          placeholder="Search"
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={topRated}>Top rated resturend</button>
      <div className="main">
        {filterResturent.map((resturent) => (
          <Link to={"/restaurant/" + resturent.info.id} key={resturent.info.id}>
            <Card resturent={resturent} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Main;
