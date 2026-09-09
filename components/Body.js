import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
const[listOfRestaurant,setListOfRestaurant]=useState([]);

useEffect(()=>{
fetchList();
},[]);

 const fetchList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.461421&lng=78.3346205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setListOfRestaurant(restaurants);
  };

  if(listOfRestaurant.length ===0)
  {
   return  <Shimmer/>
  }
    return(
        <div className="body">
              <div className="filter">
                <button onClick={()=>{
                    const filter=listOfRestaurant.filter((res)=>res.rating>3);
                    setListOfRestaurant(filter);
                }
                

                }>
                    Top Rated Restaurants
                </button>
                </div>
            <div className="restaurant-container">
           
           {listOfRestaurant.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
           )


           )}
            </div>
        </div>
    )
}
export default Body;