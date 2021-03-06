import React, { Component, ChangeEvent } from 'react';
import { ColorTypes, Game } from './components/Game';
import './App.css';
import { GameOptions } from './components/GameOptions';
import { AppStyles } from './AppStyles';
import { theme } from './Theme';

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

export const StyledApp = ({ children }: any) => {
    const classes = AppStyles({ theme });
    return (
        <div className={classes.backdrop}>
            <header className={classes.header}>
                <h1 className={classes.heading}>Mastermind</h1>
            </header>
            <main className={classes.main}>{children}</main>
            <footer className={classes.footer}>
            </footer>
        </div>
    );
};

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
        return code;
    };

    render() {
        return (
            <StyledApp>
                {this.state.activeGame ? (
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
                )}
            </StyledApp>
        );
    }
}

export default App;
