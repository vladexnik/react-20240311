import { useDispatch, useSelector } from 'react-redux';
import Review from '../review/Review'
import { useEffect } from 'react';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurantId';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors';


const Reviews = ({  restaurantId }) => {
 
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getReviewsByRestaurantId(restaurantId));
    },[ restaurantId])

    const reviewIds=useSelector(state=> selectRestaurantReviewIds(state, restaurantId)) || [];
    console.log(reviewIds);
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