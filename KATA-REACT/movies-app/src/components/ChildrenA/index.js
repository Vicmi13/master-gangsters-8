import React, { useContext } from "react";
import { ChildrenContext } from '../ChildrenContext/';

function ChildrenA() {

    const { globalName, setGlobalName } = useContext(ChildrenContext);

    const changeData= () => {
        setGlobalName('tony stark');
    }

    return(
        <div>
            children A works! {globalName}
            <button onClick={changeData}>cambiar valor</button>
        </div>
    );
}

export { ChildrenA }