import React, { Component } from 'react';
import Guessbox from './Guessbox';

class Game extends Component {
  
  state = {
    guesses: [],
    code: ['red','yellow','orange','red'],
  }

  
  createCode = (colors) => {
    let code = [];
    while(code.length < this.props.codeLength){
      code.push(colors[Math.floor(Math.random() * ( colors.length - 1 ))]);
    }
    return code;
  }

  componentDidMount(){
    if(!this.props.activeGame){
      this.setState({ code : this.createCode(this.props.colors)});
    }
  }

  checkGuess = (guess) => {
    let code = [...this.state.code];
    let guessCopy = [...guess];
    let black = 0;
    let white = 0;
    for(let i = 0; i < code.length;  i++){
      if(code[i] === guessCopy[i]){
        code[i] = null;
        guessCopy[i] = null;
        black++;
      }
    }
    if(black === this.props.codeLength){
      console.log("YOUVE WON!!! OH MAN! BET YOU EXPECTED MORE THAN A CONSOLE LOGGED MESSAGE!");
    }
    else {
      code = code.filter(x => x);
      guessCopy = guessCopy.filter(x => x);
      console.log(code);
      for(let i = 0; i < guessCopy.length; i++){
        let colorCodeIndex = code.indexOf(guessCopy[i]);
        if(colorCodeIndex !== -1){
          code.splice(colorCodeIndex,1);
          white++;
        }
      }
    }
    return {
      black,
      white,
      empty: this.props.codeLength - (black + white),
    }
  }
  
  receiveGuess = (guess) => {
    const guesses = [
      ...this.state.guesses,
      guess
    ];
    this.setState({guesses})
  }
  
  render() {
    const { colors, codeLength } = this.props;
    return (
      <>
        Hello
      <Guessbox 
        colors={ colors }
        guessLimit={ codeLength }
        checkGuess= { this.checkGuess }
        sendGuess= { this.receiveGuess }
      />
      </>
    );
  }

}

export default Game;
