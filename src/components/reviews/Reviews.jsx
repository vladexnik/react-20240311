
import Review from '../review/Review'

const Reviews = ({ reviewIds }) => {


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