import React,{createContext, useState} from "react";
export const movieContext =  createContext({})
export function MovieContextProvider({children}){
    const [data,setData] = useState(null)
    return(
    <movieContext.Provider value={{data,setData}}>
        {children}
    </movieContext.Provider>
    )
}