import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";


export const getRestaurants=createAsyncThunk(
    "restaurant/getRestaurants",
    async ( _, {rejectedWithValue}) => {
        const response=await fetch("http://localhost:3003/api/restaurants");
        const result=await response.json();

        if(result.length===0){
            return rejectedWithValue('no data');
        }

        return result;
    },
     {
        condition: ({forceRefetch=false} ={}, {getState })=> 
        forceRefetch || !selectRestaurantIds(getState())?.length,
    }
)