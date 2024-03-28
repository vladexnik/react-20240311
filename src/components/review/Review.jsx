// import React from 'react'

const Review = ({review}) => {

    if(!review){
        return null;
    }

    const { user, text, rating}=review;

    return (
        <>
            <p>{user}: `{text}` - {rating}</p> 
        </>
    )
}

export default Review