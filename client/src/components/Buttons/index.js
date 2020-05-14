import React from "react";
import "./styles.css"
import styled from "styled-components";

const View = styled.button `
float: right;
background-color: blue;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;

&:hover {
    background-color: pink;
}
`
const Link = styled.a `
text-decoration: none;

&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
}
`


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
            <Link href={props.href} target="_blank" rel="noopener noreferrer"> View Book </Link>
        </View>
    )
}

export function SaveBtn(props) {
    return(
        <button className="save-btn" {...props} tabIndex="0">
        Save Book 
        </button>
    )
}

