import React from "react";

export function Input(props) {
    return(
        <div className="form-group">
            <input className="form-control" name={props.name} onChange={props.handleInputChange} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            Search
        </button>

    )
}

