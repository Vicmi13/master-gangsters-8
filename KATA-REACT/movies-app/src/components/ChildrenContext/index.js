import React, { useState, createContext } from "react";

const ChildrenContext = createContext();

function ChildrenProvider({children}) {

    const [globalName, setGlobalName] = useState('no tengo un nombre');
  
    return(
        <ChildrenContext.Provider value={{
            globalName,
            setGlobalName,
        }}
        >
            {children}
        </ChildrenContext.Provider>
    );
    
}

export { ChildrenProvider, ChildrenContext }