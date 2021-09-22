import React from "react";

function ItemMovie(props) {
    return(
        <div>
            <div>{props.tickets}</div>
            <div>{props.movie}</div>
        </div>
    );
}

export { ItemMovie };