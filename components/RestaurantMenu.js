
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4883816&lng=78.4109143&restaurantId=65882&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setRestInfo(json);
    console.log(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  return (
    <div className="menu">
      <h2>Menu</h2>
      <h1>{name}</h1>
      <h3>{avgRating}</h3>
      <h3>{itemCards?.[0]?.card?.info?.name}</h3>
    </div>
  );
};

export default RestaurantMenu;
