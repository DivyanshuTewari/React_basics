import {  createContext, useContext } from "react";

export const userContext = createContext({
    user : null,
    setUser : ()=> {}
});

export const UserProvider = userContext.Provider;

export default function useUser(){
    return useContext(userContext);
}