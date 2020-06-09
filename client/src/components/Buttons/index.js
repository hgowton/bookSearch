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
width: 2rem;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`

const Save = styled.button `
float: right;
background-color: #146028;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;
width: 75px;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`

const ALink = styled.a `
text-decoration: none;

&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px black;
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

