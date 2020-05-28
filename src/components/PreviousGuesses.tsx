import React from 'react';
import { ColorRow } from './ColorRow';
import ResultDisplay from './Results';
import { GuessShape } from './Game';

export interface PreviousGuessesPropTypes {
    guesses: GuessShape[]
}

export const PreviousGuesses = ({ guesses }: PreviousGuessesPropTypes) => (
    <div className="resultholder">
        {guesses.map((guess) => (
            <div className="guessRows">
                <ColorRow colors={guess.colorsGuessed} />
                <ResultDisplay
                    black={guess.correct.black}
                    white={guess.correct.white}
                />
            </div>
        ))}
    </div>
);

export default PreviousGuesses;
