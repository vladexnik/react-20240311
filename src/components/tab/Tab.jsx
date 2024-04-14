import { useSelector } from "react-redux";
import Button from "../button/button";

export const Tab = ({ restaurantId, isActive, onClick }) => {
  
  const restaurant=useSelector(state=> state.restaurant.entities[restaurantId])
  
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