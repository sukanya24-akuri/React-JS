import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setRestInfo] = useState(null);
  const {resId}=useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
   
const data = await fetch(MENU_URL+{resId});
 const json=await data.json();
 console.log(json);
 setRestInfo(json.data);

if (!data.ok) {
  throw new Error(`HTTP error: ${data.status}`);
}

} catch (error) {
    console.error("Failed to fetch menu:", error);
  }
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  // const { name, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  const {itemcards} =
    resInfo?.cards[2]?.groupedCard?.cardGroupedMap?.REGULAR?.cards[1]?.card?.card?.categoriesss;
console.log(itemcards);
  return (
    <div className="menu">
      <h2>Menu</h2>
     <ui>
            {itemcards.map((item)=>(
              <li key={item.card.info.id}>{item.card.info.name}</li>
              ))}
      
     </ui>
    </div>
  );
};

export default RestaurantMenu;