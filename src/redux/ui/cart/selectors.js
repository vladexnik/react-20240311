
export const selectCartState=(state) => state.cart;

export const selectCartDishIds=(state) =>
    Object.keys(selectCartState(state));
// неправильно

export const selectDishAmount=(state, dishId)=>
    selectCartState(state)[dishId] || 0;
    //здесь можно т к примитив
