import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../../redux/ui/request/selectors";

export function useRequest(thunk, ...params){
    
    const [request,setRequest]=useState();

    const dispatch=useDispatch();

    const status=useSelector((state)=>
        selectRequestStatus(state, request?.requestId))

        
    useEffect(()=>{
        const request=dispatch(thunk(...params));
        console.log(request);
        setRequest(request);
        
        return ()=> {
            request.abort();
            setRequest(null);
        };
    },[thunk, dispatch, ...params])

    return status;
}