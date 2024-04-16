// import React from 'react'

import {  useSelector } from "react-redux";
import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

const Restaurant = ({ restaurantId }) => {
    
    // const restaurant=useSelector(state=> state.restaurant.entities[restaurantId])
    const restaurant=useSelector(state=> selectRestaurantById(state, restaurantId));

    if(!restaurant){
        return null;
    }

    const { img, name, menu, reviews}= restaurant;

    console.log(restaurant);

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} style={{ width: '300px', height: '300px', margin: '20px auto'}}/>
            <Menu dishIds={menu}/>

            <h3>Reviews</h3>
            <Reviews reviewIds={reviews} restaurantId={restaurantId}/>
        </div>
    )
}

export default Restaurant;
