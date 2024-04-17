import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from '../selectors';


export const getUsers=createAsyncThunk(
    "user/getUsers",
    async ( _, {rejectedWithValue}) => {
        const response=await fetch("http://localhost:3003/api/users");
        const result=await response.json();

        if(result.length===0){
            return rejectedWithValue('no data');
        }

        return result;
    },
    
    {
        condition: (_, {getState })=> !selectUserIds(getState())?.length,
    }
)