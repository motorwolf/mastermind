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
        <>
            <PreviousGuesses guesses={this.state.guesses} />
                <Guessbox
                    colors={colors}
                    guessLimit={codeLength}
                    checkGuess={this.checkGuess}
                    sendGuess={this.receiveGuess}
                />
        </>
        );
    }
}

export default Game;
