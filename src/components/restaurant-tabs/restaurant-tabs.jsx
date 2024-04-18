// import { useEffect } from "react"
import {  useSelector } from "react-redux"
import { Tab } from "../tab/Tab"
import styles from './style.module.scss'
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors"
import { getRestaurants } from "../../redux/entities/restaurant/thunk/get-restaurants"
import { useRequest } from "../hooks/use-request"
import { REQUEST_STATUSES } from "../../redux/ui/request/constants"
import { useLazyRequest } from "../hooks/use-lazy-request"
import Button from "../button/button"

const refetchRestaurantsParams={ forceRefetch: true}; 

const RestaurantTabs = ({currentRestaurantId, onTabClick, }) => {
    
    const restaurantIds=useSelector(selectRestaurantIds);
    const [refetchStatus, refetchRestaurants]=useLazyRequest(getRestaurants, refetchRestaurantsParams);


    const requestStatus=useRequest(getRestaurants);

    if(refetchStatus===REQUEST_STATUSES.pending || requestStatus===REQUEST_STATUSES.idle){
        return <p>Reload...</p>
    }

    if([REQUEST_STATUSES.pending, REQUEST_STATUSES.idle].includes(requestStatus)){
        return <p>Pending...</p>
    }
    

    return (
        <div className={styles.root}>
            <Button onClick={refetchRestaurants}>Refresh</Button>
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