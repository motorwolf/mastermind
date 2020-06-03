import React, { Component, useState } from 'react';
import Guessbox from './Guessbox';
import PreviousGuesses from './PreviousGuesses';

export const Game = ({ codeLength, secretCode }) => {
    const [guesses, addGuess] = useState([]);
    return (
        <>
            <PreviousGuesses guesses={guesses} />
            <Guessbox
                guessLimit={codeLength}
                sendGuess={addGuess}
                code={secretCode}
            />
        </>
    );
};

export default Game;
