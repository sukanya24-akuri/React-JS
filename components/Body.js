import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const[filterRestaurant,setFilterRestaurant]=useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setListOfRestaurant(restaurants);
    setFilterRestaurant(restaurants);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredText = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredText);
            }}
          >
            search
          </button>
        </div>
        <button
          onClick={() => {
            const filter = listOfRestaurant.filter((res) => res.info.avgRating > 4);
            setFilterRestaurant(filter);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
