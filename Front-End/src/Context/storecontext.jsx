import { createContext, useEffect, useState } from "react";

export const storecontext = createContext(null);

const StoreContextProvider = (props) => {
    const [token, settoken] = useState(localStorage.getItem("token") || "");
    const [currentstate,setcurrentstate] = useState("");

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            settoken(storedToken); 
        }
    }, []);

    

    const contextValue = {
        token,
        settoken,
        currentstate,
        setcurrentstate
    };

    return (
        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    );
};

export default StoreContextProvider;
