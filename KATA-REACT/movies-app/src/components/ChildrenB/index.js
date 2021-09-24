import React, { useContext } from "react";
import { ChildrenContext } from '../ChildrenContext/';

function ChildrenB() {

    const { globalName, setGlobalName } = useContext(ChildrenContext);

    const changeData= () => {
        setGlobalName('steve rogers');
    }

    return(
        <div>
            children B works! {globalName}
            <button onClick={changeData}>cambiar valor</button>
        </div>
    );
}

export { ChildrenB }