const defaultArray=[];

export const selectReviewState=state=> state.review;

export const selectReviewIds=(state)=> selectReviewState(state).ids || defaultArray;

export const selectReviewById=(state, id)=> 
    selectReviewState(state).entities[id];



