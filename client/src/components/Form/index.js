import React from "react";
import styled from "styled-components";

const Search = styled.button `
float: right;
background-color: green;
padding: 5px;
margin: 2px;
border-radius: 5px;
color: white;
text-decoration: none;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`

export function Input(props) {
    return(
        <div className="form-group">
            <input className="form-control" name={props.name} onChange={props.handleInputChange} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <Search {...props}>
            Search
        </Search>

    )
}

