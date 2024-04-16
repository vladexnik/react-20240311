import { useSelector } from "react-redux";
import Button from "../button/button";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Tab = ({ restaurantId, isActive, onClick }) => {
  
  const restaurant=useSelector(state=> selectRestaurantById(state, restaurantId))
  
  if(!restaurant){
    return null;
  }

  return (
    <Button 
        viewVariant="restaurant"
        size="l" 
        onClick={onClick} 
        disabled={isActive} 
    >
    
      {restaurant.name}
      {isActive && ' restuarant'}
    </Button>
  );
};