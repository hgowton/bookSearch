import React from "react";
// import styled from "styled-components";
import { Search } from "../Styled"; 


export function Input(props) {
    return(
        <div className="form-group">
            <input type="text" className="form-control" name={props.name} onChange={props.handleInputChange} required/>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <Search {...props}>
            <i className="fas fa-search"></i> Search
        </Search>

    )
}

