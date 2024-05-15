import { React, createContext, useState } from "react";

export const myContext = createContext()
const AppProvider = ({ children }) => {
    const [userIn,setUserIn] = useState('false')
    const change =(val)=>{
        console.log(val,"val")
         return setUserIn(val)
    }
    return (
        <myContext.Provider value={{userIn,setUserIn,change}}>
            {children}
        </myContext.Provider>
    )
}

export default AppProvider;