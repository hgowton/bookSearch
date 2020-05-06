import React from "react";
import "./style.css"

//The ...props prints all of the passed props onto this element
export function DeleteBtn() {
    return(
        <span className="delete-btn" {...props} role="button" tabIndex="0">
        Delete Book 
        </span>
    )
}

export function ViewBtn() {
    return(
        <span className="view-btn" {...props} role="button" tabIndex="0">
        View Book 
        </span>
    )
}

export function SaveBtn() {
    return(
        <span className="save-btn" {...props} role="button" tabIndex="0">
        View Book 
        </span>
    )
}

