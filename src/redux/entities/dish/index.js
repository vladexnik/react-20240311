import { createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { createEntityAdapter } from "@reduxjs/toolkit";

const entityAdapter=createEntityAdapter();

export const dishSlice=createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder)=> 
        builder.addCase(
            getDishes.fulfilled,
            (state, {payload: dishes}) =>
                entityAdapter.setAll(state, dishes)
        )
});