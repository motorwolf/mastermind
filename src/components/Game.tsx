import React, { Component } from 'react';
import Guessbox from './Guessbox';
import { Provider } from './Context';
import PreviousGuesses from './PreviousGuesses';


class Game extends Component {
    state = {
        guesses: [],
    };


    render() {
        const { codeLength } = this.props;
        return (
            <Provider value={{receiveGuess: this.receiveGuess, checkGuess: this.checkGuess, colors, guessLimit: codeLength,}}>
                <PreviousGuesses guesses={this.state.guesses} />
                <Guessbox
                    colors={colors}
                    guessLimit={codeLength}
                    checkGuess={this.checkGuess}
                    sendGuess={this.receiveGuess}
                />
            </Provider>
        );
    }
}

export default Game;
