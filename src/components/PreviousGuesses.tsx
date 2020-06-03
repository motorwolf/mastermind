import React from 'react';
import { ColorRow } from './ColorRow';
import ResultDisplay from './Results';
import { GuessShape } from './Game';

export interface PreviousGuessesPropTypes {
    guesses: GuessShape[]
}

export const PreviousGuesses = ({ guesses }: PreviousGuessesPropTypes) => (
    <div className="resultholder">
        {guesses.map(({guess, black, white}) => (
            <div className="guessRows">
                <ColorRow colors={guess} />
                <ResultDisplay
                    black={black}
                    white={white}
                />
            </div>
        ))}
    </div>
);

export default PreviousGuesses;
