// import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Tab } from "../tab/Tab"
import styles from './style.module.scss'
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors"

const RestaurantTabs = ({currentRestaurantId, onTabClick, }) => {
    
    const restaurantIds=useSelector(selectRestaurantIds);

    return (
        <div className={styles.root}>
            {restaurantIds?.map((restaurantId)=>(
                <Tab
                    key={restaurantId}
                    restaurantId={restaurantId}
                    onClick={()=> { onTabClick(restaurantId);
                    }}
                    isActive={restaurantId===currentRestaurantId}
                />
            ))}
        </div>
    )
}

export default RestaurantTabs