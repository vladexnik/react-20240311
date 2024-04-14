import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { dishSlice} from "./entities/dish";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { restaurantSlice } from "./entities/restaurant";

export const store=configureStore({
    reducer: combineSlices(dishSlice, userSlice, restaurantSlice, reviewSlice)
});

console.log(store.getState());