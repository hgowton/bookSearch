import React from "react";
import "./styles.css"
import { View, Save, ALink, Delete } from "../Styled";

//The ...props prints all of the passed props onto this element
export function DeleteBtn(props) {
    return(
        <Delete className="delete-btn" {...props} role="button" tabIndex="0">
        <i className="fas fa-trash"></i>  Delete Book 
        </Delete>
    )
}

export function ViewBtn(props) {
    return(
        <View>
            <ALink href={props.href} target="_blank" rel="noopener noreferrer"> <i className="fas fa-eye"></i>  View Book </ALink>
        </View>
    )
}

export function SaveBtn(props) {
    return(
        <Save {...props} tabIndex="0">
        <i className="fas fa-save"></i>  Save Book 
        </Save>
    )
}

