
import { RESTAURANT_IMAGE } from "../utils/constants";
const RestaurantCard=(props)=>{
  const{resData}=props;
  const{info}=resData;

    return(
        <div className="res-card">
        <img className="res-logo"
alt="res-logo"
src={ RESTAURANT_IMAGE + info.cloudinaryImageId }         />
  
        <h3>{info.name}</h3>
        <h4>{info.cuisines.join(", "
        )}</h4>
        <h5>{info.sla.slaString} delivery time</h5>
        <h5>{info.avgRating} stars</h5>
        <h5>{info.costForTwo}</h5>
        </div>
    );
};
export default RestaurantCard;