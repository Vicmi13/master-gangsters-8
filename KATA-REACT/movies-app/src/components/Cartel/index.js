import React from "react";

function Cartel({children}) {
    return(
        <div>
            <h2>Cartelera</h2>
            {children}
        </div>
    );
}

export { Cartel };