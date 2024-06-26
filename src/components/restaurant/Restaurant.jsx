// import React from 'react'

import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";

const Restaurant = ({ restaurant }) => {
    
    if(!restaurant){
        return null;
    }
    
    const { name, menu, reviews}= restaurant;

    return (
        <>
            <h2>{name}</h2>
            <Menu menu={menu}/>

            <h3>Reviews</h3>
            <Reviews reviews={reviews}/>
        </>
  )
}

export default Restaurant;
