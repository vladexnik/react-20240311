// import React from 'react'
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

// здесь искать
const Review = ({reviewId}) => {
    
    // console.log(reviewId);
    const review=useSelector(state=> selectReviewById(state, reviewId))
    console.log(review);
    
    const user=useSelector(state=> selectUserById(state, review?.userId))

    if(!review){
        return <p>Loading...</p>;
    }

   
    return (
        <>
            <p>{user.name}:  `{review?.text}` - {review?.rating}</p>
        </>
    )
}

export default Review;