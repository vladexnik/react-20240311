import {  useSelector } from 'react-redux';
import Review from '../review/Review'
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurantId';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors';
import { useRequest } from '../hooks/use-request';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants';

const Reviews = ({  restaurantId }) => {
 
    const requestStatus=useRequest(getReviewsByRestaurantId, restaurantId);

    const reviewIds=useSelector(state=> selectRestaurantReviewIds(state, restaurantId)) || [];
    console.log(reviewIds);

    if([REQUEST_STATUSES.pending, REQUEST_STATUSES.idle].includes(requestStatus)){
        return <p>Pending reviews...</p>
    }

    return (
        <ul>
            
            {reviewIds.map(reviewId=>(
                <li key={reviewId}>
                    <Review reviewId={reviewId}/>
                </li>
            ))}
        </ul>
  )
}

export default Reviews