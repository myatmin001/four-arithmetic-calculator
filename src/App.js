import React, { Component } from "react";
import './App.css';
import { calculation, convertOperatorWordToSign } from "./common";
import BigInput from './components/BigInput';
import Button from './components/Button';
import SmallInput from './components/SmallInput';
import { OPERATORS } from './operators';

class App extends Component {

  state = {
    inputVal: '0',
    preVal: '',
    nxtVal: '',
    operator: '',
    displayVal: '',
    stillAlive: false,
  }

  disable = () =>{}

  addToBigInput = (value) => {
    if(this.state.stillAlive) {
      this.state.inputVal = '0';
      this.state.stillAlive = false;
    }
    this.setState({ inputVal: this.state.inputVal==='0'? value : this.state.inputVal + value });
  };

  allClearInput = () => {
    this.setState({
      inputVal: '0',
      preVal: '',
      nxtVal: '',
      operator: '',
      displayVal: '',
      stillAlive: false,
    });
  }

  plus = () => {
    if(this.state.operator === OPERATORS.MINUS){
      this.setState({inputVal: (this.state.inputVal * -1) + ""})
    }
    this.setState({preVal: this.state.inputVal,operator: OPERATORS.PLUS,stillAlive: true});
    this.setState({displayVal: this.state.inputVal + '+'});
  }

  minus = () => {
    if(this.state.operator === OPERATORS.MINUS){
      this.setState({inputVal: (this.state.inputVal * -1) + ""})
    }
    this.setState({preVal: this.state.inputVal,operator: OPERATORS.MINUS,stillAlive: true});
    this.setState({displayVal: this.state.inputVal + '-'});
  }

  multiply = () => {
    if(this.state.operator === OPERATORS.MINUS){
      this.setState({inputVal: (this.state.inputVal * -1) + ""})
    }
    this.setState({preVal: this.state.inputVal,operator: OPERATORS.MULTIPLY,stillAlive: true});
    this.setState({displayVal: this.state.inputVal + '*'});
  }

  divided = () => {
    if(this.state.operator === OPERATORS.MINUS){
      this.setState({inputVal: (this.state.inputVal * -1) + ""})
    }
    this.setState({preVal: this.state.inputVal,operator: OPERATORS.DIVIDED,stillAlive: true});
    this.setState({displayVal: this.state.inputVal + '/'});
  }

  plusMinusConvert = () => {
      const minusPlusConvert = parseInt(this.state.inputVal) * -1;
      this.setState({inputVal: minusPlusConvert + ""});
  }

  equal = () => {
    if(this.state.preVal === ""){
      this.state.preVal=this.state.inputVal;
    }else{
      this.state.nxtVal = this.state.inputVal;
    }
    this.setState({displayVal: this.state.preVal + convertOperatorWordToSign(this.state.operator) + this.state.nxtVal + '='});
    this.setState({inputVal: calculation(this.state.operator,this.state.preVal,this.state.nxtVal), stillAlive: true, preVal: ''});
  }

  render(){
    return (
      <div className="App">
        <div className="calc-container">
          <SmallInput inputVal={this.state.displayVal}/>
          <BigInput inputVal={this.state.inputVal}/>
          <div className="row">
            <Button value="" handleClick={this.disable}>%</Button>
            <Button value="CE" handleClick={this.disable}>CE</Button>
            <Button value="" handleClick={this.allClearInput}>C</Button>
            <Button value="" handleClick={this.disable}><i className="far fa-times-circle"></i></Button>
          </div>
          <div className="row">
            <Button value="1/x" handleClick={this.disable}>1/x</Button>
            <Button value="x2" handleClick={this.disable}>x<sup>2</sup></Button>
            <Button value="" handleClick={this.disable}>√ </Button>
            <Button value="÷" handleClick={this.divided}>÷</Button>
          </div>
          <div className="row">
            <Button value="7" handleClick={this.addToBigInput}>7</Button>
            <Button value="8" handleClick={this.addToBigInput}>8</Button>
            <Button value="9" handleClick={this.addToBigInput}>9</Button>
            <Button value="×" handleClick={this.multiply}>×</Button>
          </div>
          <div className="row">
            <Button value="4" handleClick={this.addToBigInput}>4</Button>
            <Button value="5" handleClick={this.addToBigInput}>5</Button>
            <Button value="6" handleClick={this.addToBigInput}>6</Button>
            <Button value="−" handleClick={this.minus}>−</Button>
          </div>
          <div className="row">
            <Button value="1" handleClick={this.addToBigInput}>1</Button>
            <Button value="2" handleClick={this.addToBigInput}>2</Button>
            <Button value="3" handleClick={this.addToBigInput}>3</Button>
            <Button value="+" handleClick={this.plus}>+</Button>
          </div>
          <div className="row">
            <Button value="+/-" handleClick={this.plusMinusConvert}><sup>+</sup><p>/</p><sub>-</sub></Button>
            <Button value="0" handleClick={this.addToBigInput}>0</Button>
            <Button value="." handleClick={this.disable}>.</Button>
            <Button value="=" handleClick={this.equal}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
