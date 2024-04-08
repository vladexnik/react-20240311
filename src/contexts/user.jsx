import { createContext, useState,useMemo } from 'react'

export const UserContext=createContext('noAuth');
 
export function UserContextProviderComponent({children}) {
    const [user, setUser]=useState('noAuth');

    return(
        <UserContext.Provider value={useMemo(() => ({user, setUser}), [user])}>
            {children}
        </UserContext.Provider>
    )
}