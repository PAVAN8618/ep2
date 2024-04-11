import { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
  const [resinfo, setInfo] = useState(null);

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

  return resinfo;
};

export default useResturantMenu;
