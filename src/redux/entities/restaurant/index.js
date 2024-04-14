import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock";

export const restaurantSlice=createSlice({
    name: 'restaurant',
    initialState:{
        entities: normalizedRestaurants.reduce((acc, restik)=>{
            acc[restik.id]=restik;
            return acc;
        }, {}),
        ids: normalizedRestaurants.map(({ id })=> id)
    }
})