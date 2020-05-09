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

export function ViewBtn() {
    return(
        <span className="view-btn" role="button" tabIndex="0">
        View Book 
        </span>
    )
}

export function SaveBtn() {
    return(
        <span className="save-btn" role="button" tabIndex="0">
        Save Book 
        </span>
    )
}

