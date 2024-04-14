// import React from 'react'
import { useSelector } from "react-redux";


const Review = ({reviewId}) => {
    const review=useSelector(state=> state.review.entities[reviewId])
    
    const { userId, text, rating}=review; 
    
    const user=useSelector(state=>state.user.entities[userId]);
    console.log(user.name);

    if(!review){
        return null;
    }

   
    return (
        <>
            <p>{user.name}: `{text}` - {rating}</p> 
        </>
    )
}

export default Review;