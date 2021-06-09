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
            return parseFloat(prevVal) + parseFloat(nxtVal);
        case OPERATORS.MINUS: 
            return parseFloat(prevVal) - parseFloat(nxtVal);
        case OPERATORS.MULTIPLY: 
            return parseFloat(prevVal) * parseFloat(nxtVal);
        case OPERATORS.DIVIDED: 
            return parseFloat(prevVal) / parseFloat(nxtVal);
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

export const backspace = (value) => {
    const str = value.toString();
    if(str.length===1){
        return '0';
    }else{
        return str.substring(0, str.length - 1);
    }
}

export const separteWithCommas = (value) => {
    const str = value.toString();
    if (str.indexOf(',') > -1){
        str.replace(',', '');
    }
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}