import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
const[listOfRestaurant,setListOfRestaurant]=useState(resList);
    return(
        <div className="body">
              <div className="filter">
                <button onClick={()=>{
                    const filter=listOfRestaurant.filter((res)=>res.rating>4.3);
                    setListOfRestaurant(filter);
                }
                

                }>
                    Top Rated Restaurants
                </button>
                </div>
            <div className="restaurant-container">
           
           {listOfRestaurant.map((restaurant)=>(
            <RestaurantCard key={restaurant.id} resData={restaurant}/>
           )


           )}
            </div>
        </div>
    )
}
export default Body;