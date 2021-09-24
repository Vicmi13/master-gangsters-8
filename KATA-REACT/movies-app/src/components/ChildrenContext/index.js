import React, { useState, createContext } from "react";

const ChildrenContext = createContext();

function ChildrenProvider(props) {

    const [globalName, setGlobalName] = useState('no tengo un nombre');
  
    return(
        <ChildrenContext.Provider value={{
            globalName,
            setGlobalName,
        }}
        >
            {props.children}
        </ChildrenContext.Provider>
    );
    
}

export { ChildrenProvider, ChildrenContext }