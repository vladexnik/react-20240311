import { useEffect } from "react"
import { Tab } from "../tab/Tab"

const setCurrentRestaurantIndexStorage = (index) => {
        localStorage.setItem("currentRestaurantIndex", index.toString())
}

const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) => {
    
    useEffect(()=>{
        setCurrentRestaurantIndexStorage(currentIndex);
    },[currentIndex])

    return (
    <div>
        {restaurants.map((restaurant, index)=>(
            <Tab
                key={restaurant.id}
                title={restaurant.name}
                onClick={()=> { onTabClick(index); 
                }}
                isActive={index===currentIndex}
            />
        ))}
    </div>
  )
}

export default RestaurantTabs