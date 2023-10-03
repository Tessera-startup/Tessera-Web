// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState, useReducer } from "react";
// import { modal_menu } from "../data";


export const TessaraContext = React.createContext();

export const ContextProvider = ({ children }) => {
    const [wallet, setWallet] = useState("")
    // const [dashBoardConfig, setdashBoardConfig] = useState("users-home")

    // const [modals, updateModals] = useReducer((prev, next) => {
    //     return { ...prev, ...next }
    // }, { ...modal_menu })



    return (
        <>
            <TessaraContext.Provider value={{
                wallet,
                setWallet


            }} >
                {children}
            </TessaraContext.Provider>
        </>
    )




}   