import React from 'react';
import { ColorRow } from './ColorRow';
import ResultDisplay from './Results';
import { GuessShape } from './Game';
import { PreviousGuessesStyles } from './PreviousGuessesStyles';
import { theme } from '../Theme';

export interface PreviousGuessesPropTypes {
    guesses: GuessShape[];
}

export const PreviousGuesses = ({ guesses }: PreviousGuessesPropTypes) => {
    const classes = PreviousGuessesStyles({ theme });
    return (
        <div className={classes.previousGuessContainer}>
            {guesses.map(({ guess, black, white }) => (
                <div className="guessRows">
                    <ColorRow colors={guess} />
                    <ResultDisplay black={black} white={white} />
                </div>
            ))}
        </div>
    );
};

export default PreviousGuesses;
