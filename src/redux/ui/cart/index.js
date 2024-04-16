import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name: "cart",
    initialState: {},

    //action-creators
    reducers: {
        incrementDish: (state,{ payload: id})=>{
            const dish=state[id] || 0;
            state[id]=dish + 1;

        },
        //type - increment
        //payload - 2 headphones
        
        decrementDish: (state,{ payload: id } )=>{
            const dish=state[id];
            state[id]=dish-1;

            if(state[id]<=0){
                delete state[id];
            }         
        }
    }
});

export const {incrementDish, decrementDish}= cartSlice.actions;