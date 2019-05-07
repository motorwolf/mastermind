import React, { Component } from 'react';
import Game from './components/Game';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    colorNum: 6,
    codeLength: 4,
    activeGame: true,
  }


  COLORS = ['red','orange','yellow','green','blue','purple'];
  
  render() {
    return (
      <Game 
        colors={ this.COLORS.splice(0,this.state.colorNum) }
        codeLength = { this.state.codeLength }
        activeGame = { this.state.activeGame }
      />
    );
  }
}

export default App;
