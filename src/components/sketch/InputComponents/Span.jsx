import React from "react";

function Span ({className,id,  text}){

    return(
        <span className={className} id={id}>
          {text}
        </span>
    )
}

export {Span}