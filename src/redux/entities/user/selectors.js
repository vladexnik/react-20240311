const defaultArray=[];

export const selectUserState=state=> state.user;

export const selectUserIds=(state)=> selectUserState(state).ids || defaultArray;

export const selectUserById=(state, id)=> 
    selectUserState(state).entities[id];



