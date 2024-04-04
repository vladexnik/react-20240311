import  { useCallback, useState } from 'react'


export const useCount=(defaultValue=0, step=1)=>{
    const [count, setCount]=useState(defaultValue);

    const decrement=useCallback(()=>
        setCount((curCount)=> curCount-step)
    ,[step])

    const increment=useCallback(()=>{
        setCount((curCount)=> curCount+step)
    },[step])

    return {count, increment, decrement}
}

export default useCount;