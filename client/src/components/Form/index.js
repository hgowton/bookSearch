import React from "react";
// import styled from "styled-components";
import { Search } from "../Styled"; 


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

