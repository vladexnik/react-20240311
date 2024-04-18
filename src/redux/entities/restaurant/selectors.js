const defaultArray=[];

export const selectRestaurantState=state=> state.restaurant;

export const selectRestaurantIds=(state)=> selectRestaurantState(state).ids || defaultArray;

export const selectRestaurantById=(state, id)=> 
    selectRestaurantState(state).entities[id];

export const selectRestaurantReviewIds=(state, id)=>
    selectRestaurantById(state,id)?.reviews;


