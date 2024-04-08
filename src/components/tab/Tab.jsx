import Button from "../button/button";

export const Tab = ({ title, isActive, onClick }) => {
  return (
    <Button 
        viewVariant="restaurant"
        size="l" 
        onClick={onClick} 
        disabled={isActive} 
    >
    
      {title}
      {isActive && ' restuarant'}
    </Button>
  );
};