import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";


export const getReviewsByRestaurantId=createAsyncThunk(
    'reviews/getReviewsByRestaurantId',
    async (restaurantId)=>{
        const response=await fetch(`http://localhost:3003/api/reviews?restaurantId=${restaurantId}`);

        return response.json();
    },

    // { // не перезапрашивать те же отзывы
    //     condition: (restaurantId, {getState})=>{
    //         const state=getState();
    //         const restaurantReviewIds=selectRestaurantReviewIds(state, restaurantId);
    //         const reviewIds=selectReviewIds(state);

    //         return restaurantReviewIds.some(id=> !reviewIds.includes(id));
    //     }   
    // }
);
