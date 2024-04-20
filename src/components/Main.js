import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card, { withPromotedCard } from "./Card";
import useOnlineStatus from "../utils/useOnlineStatus";
import DummyCard from "./DummyCard";

const Main = () => {
  const [listOfResturent, setlistOfRestaurant] = useState([]);
  const [filterResturent, setFilterResturent] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  const status = useOnlineStatus();

  const PromotedCard = withPromotedCard(Card);

  const topRated = () => {
    const Resturent = listOfResturent.filter((s) => s.info.avgRating > 3);
    setlistOfRestaurant(Resturent);
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);

    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
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

  //console.log(listOfResturent);
  if (!listOfResturent.length) {
    return <DummyCard />;
  }
  if (status === false) {
    return <h1> you are offline, check your internate connection!!!</h1>;
  }

  //console.log(filterResturent);
  return (
    <>
      <div className="p-2 m-4 space-x-4 ">
        <input
          type="text"
          placeholder="Search"
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
          className="p-1  border-2"
        />
        <button
          onClick={handleSearch}
          className="w-20 h-10 bg-emerald-500 rounded-md hover:bg-emerald-700"
        >
          Search
        </button>
        <button
          onClick={topRated}
          className="w-24 h-10 bg-emerald-500 rounded-md hover:bg-emerald-700"
        >
          Top Rated
        </button>
      </div>

      <div className="flex flex-wrap">
        {filterResturent.map((resturent) => (
          <Link to={"/restaurant/" + resturent.info.id} key={resturent.info.id}>
            {resturent.info.isOpen ? (
              <PromotedCard resturent={resturent} />
            ) : (
              <Card resturent={resturent} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};
export default Main;
