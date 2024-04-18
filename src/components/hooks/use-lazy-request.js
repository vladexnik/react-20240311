 import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../../redux/ui/request/selectors";

export function useLazyRequest(thunk, ...params){
    
    const [request,setRequest]=useState();

    const dispatch=useDispatch();

    const status=useSelector((state)=>
        selectRequestStatus(state, request?.requestId))


    const makeRequest=useCallback(()=>{
        setRequest(dispatch(thunk(...params)));
    },[thunk, dispatch, ...params]);

    return [status, makeRequest];
}