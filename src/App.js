import React, { Component } from 'react';
import Game from './components/Game';
import './App.css';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

class App extends Component {
    state = {
        colorNum: 6,
        codeLength: 4,
        activeGame: true,
    };

    createCode = (colors) => {
        let code = [];
        while (code.length < this.state.codeLength) {
            code.push(colors[Math.floor(Math.random() * (colors.length - 1))]);
        }
        console.log(code);
        return code;
    };

    render() {
        const gameColors = COLORS.splice(0, this.state.colorNum);
        return (
            <Game
                colors={gameColors}
                codeLength={this.state.codeLength}
                secretCode={this.createCode(gameColors)}
            />
        );
    }
}

export default App;
