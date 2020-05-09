import React from "react";
import "./styles.css"

//The ...props prints all of the passed props onto this element
export function DeleteBtn(props) {
    return(
        <span className="delete-btn" {...props} role="button" tabIndex="0">
        Delete Book 
        </span>
    )
}

export function ViewBtn(props) {
    return(
        <button className="view-btn" >
            <a href={props.href} target="_blank"> View Book </a>
        </button>
    )
}

export function SaveBtn(props) {
    return(
        <button className="save-btn" {...props} tabIndex="0">
        Save Book 
        </button>
    )
}

