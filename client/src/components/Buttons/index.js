import React from "react";
import "./styles.css"
import { View, Save, ALink } from "../Styled";

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
        <View>
            <ALink href={props.href} target="_blank" rel="noopener noreferrer"> View Book </ALink>
        </View>
    )
}

export function SaveBtn(props) {
    return(
        <Save {...props} tabIndex="0">
        Save Book 
        </Save>
    )
}

