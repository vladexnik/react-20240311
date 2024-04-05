// import { useEffect } from "react"
import { Tab } from "../tab/Tab"
import styles from './style.module.scss'

const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) => {
    
    return (
        <div className={styles.root}>
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