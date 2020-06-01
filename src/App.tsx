import React, { Component } from 'react';
import Game from './components/Game';
import './App.css';
import { MastermindGame } from './components/GameLogic';


class App extends Component {
    state = {
        colorNum: 6,
        codeLength: 4,
        activeGame: true,
    };


    render() {
        const newGame = new MastermindGame(4)
        return (
            <Game
                codeLength={newGame.codeLength}
                secretCode={newGame.secretCode}
            />
        );
    }
}

export default App;
