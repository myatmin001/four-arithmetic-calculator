import React from 'react'
import "./Button.css"
import {isEqual,
        isNumeric,
        isX,
        isOperator,
        isDocAndPlusMinus
    } from "../common";

const Button = (props) => {

    return (
        <div 
            className={`button-container ${isEqual(props.value) && "equal"} ${isNumeric(props.value) ? "numberStyle" : "otherStyle"} ${isX(props.value) && "xStyle"} ${isOperator(props.value) && "operatorStyle"} ${isDocAndPlusMinus(props.value) && "docAndPlusMinusStyle"}`}
            onClick={() => {props.handleClick(props.children)}}
        >
            {props.children}
        </div>
    )
}

export default Button
