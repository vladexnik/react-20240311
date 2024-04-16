import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurantId";

const entityAdapter=createEntityAdapter();

export const reviewSlice=createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => 
        builder.addCase(
            getReviewsByRestaurantId.fulfilled,
            (state, {payload: reviews})=>
                entityAdapter.upsertMany(state, reviews)
    ),
});