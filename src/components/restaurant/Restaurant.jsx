// import React from 'react'

import { useSelector } from "react-redux";
import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";

const Restaurant = ({ restaurantId }) => {
    
    const restaurant=useSelector(state=> state.restaurant.entities[restaurantId])
    
    if(!restaurant){
        return null;
    }    
    const { name, menu, reviews}= restaurant;

    return (
        <>
            <h2>{name}</h2>
            <Menu dishIds={menu}/>

            <h3>Reviews</h3>
            <Reviews reviewIds={reviews}/>
        </>
  )
}

export default Restaurant;
