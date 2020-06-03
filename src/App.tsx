import React, { Component, ChangeEvent } from 'react';
import Game, { ColorTypes } from './components/Game';
import './App.css';
import { GameOptions } from './components/GameOptions';

export const COLORS: ColorTypes[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
];

export interface AppProps {
    colors: ColorTypes[];
}

class App extends Component<AppProps> {
    state = {
        colorNum: 6,
        codeLength: 4,
        won: false,
        activeGame: false,
        secretCode: [],
        gameColors: [],
    };

    handleSelectionChange = (ev: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            [ev.target.name]: parseInt(ev.target.value),
        });
    };

    startGame = () => {
        const gameColors = COLORS.splice(0, this.state.colorNum);
        this.setState({
            gameColors,
            secretCode: this.createCode(gameColors),
            activeGame: true,
        });
    };

    createCode = (colors: ColorTypes[]): ColorTypes[] => {
        const code: ColorTypes[] = [];
        while (code.length < this.state.codeLength) {
            code.push(colors[Math.floor(Math.random() * (colors.length - 1))]);
        }
        console.log(code);
        return code;
    };

    render() {
        return this.state.activeGame ? (
            <Game
                colors={this.state.gameColors}
                codeLength={this.state.codeLength}
                secretCode={this.state.secretCode}
            />
        ) : (
            <GameOptions
                onInputChange={this.handleSelectionChange}
                onFormSubmit={this.startGame}
                codeLength={this.state.codeLength}
                colorNum={this.state.colorNum}
            />
        );
    }
}

export default App;
