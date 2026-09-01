const RestaurantCard=(props)=>{
  const{resData}=props;

    return(
        <div className="res-card">
        <img className="res-logo"
alt="res-logo"
        src={resData.image}
         />
        
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines.join(", "
        )}</h4>
        <h5>{resData.deliveryTime} delivery time</h5>
        <h5>{resData.rating} stars</h5>
        <h5>₹{resData.price} price</h5>
        </div>
    );
};
export default RestaurantCard;