import { OPERATORS } from "./operators";

export const isEqual = (equal) => {
    return equal === "=";
}

export const isNumeric = (numeric) => {
    var isnumber = false;
    for(var i=0; i<=9; i++){
        if(numeric!==""){
            if(Number(numeric) === i){
                isnumber = true;
                break;
            }
        }
    }
    return isnumber;
}

export const isX = (xValue) => {
    return xValue === "1/x" || xValue === "x2";
}

export const isOperator = (operator) => {
    return operator === "÷" || operator === "×" || operator === "−" || operator === "+" || operator === "=";
}

export const isDocAndPlusMinus = (docAndPlusMinusVal) => {
    return docAndPlusMinusVal === "+/-" || docAndPlusMinusVal === ".";
}

export const isCE = (ceValue) => {
    return isCE === ceValue;
}

export const calculation = (operators,prevVal,nxtVal) => {
    switch(operators){
        case OPERATORS.PLUS: 
            return parseInt(prevVal) + parseInt(nxtVal);
        case OPERATORS.MINUS: 
            return parseInt(prevVal) - parseInt(nxtVal);
        case OPERATORS.MULTIPLY: 
            return parseInt(prevVal) * parseInt(nxtVal);
        case OPERATORS.DIVIDED: 
            return parseInt(prevVal) / parseInt(nxtVal);
        default:
            console.log("Something Wrong");
    }
}

export const convertOperatorWordToSign = (operatorWord) => {
    switch(operatorWord){
        case OPERATORS.PLUS:
            return "+";
        case OPERATORS.MINUS:
            return "−";
        case OPERATORS.MULTIPLY:
            return "×";
        case OPERATORS.DIVIDED:
            return "÷";
        default:
            return "";

    }
}