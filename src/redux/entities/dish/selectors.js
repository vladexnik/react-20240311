const defaultArray=[];

export const selectDishState=(state)=> state.dish;

export const selectDishIds=(state)=> selectDishState(state).ids || defaultArray;

export const selectDishById=(state, id)=> 
    selectDishState(state).entities[id];



