import React, { Component } from 'react';
import Game from './components/Game';
import './App.css';
import { createCode } from './components/GameLogic';


class App extends Component {
    state = {
        colorNum: 6,
        codeLength: 4,
    };


    render() {
        return (
            <Game
                codeLength={this.state.codeLength}
                secretCode={createCode(this.state.codeLength)}
            />
        );
    }
}

export default App;
