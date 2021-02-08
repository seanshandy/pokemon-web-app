import React from 'react';
import "./Button.css";

const Button = props => {

    return (
        <button className={`btn ${props.size}`}>{props.text}</button>
    )
}

export default Button