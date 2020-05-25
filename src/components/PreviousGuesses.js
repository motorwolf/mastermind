import React from 'react';
import { ColorRow } from './ColorRow';
import ResultDisplay from './Results';

export const PreviousGuesses = ({ guesses }) => (
    <div className="resultholder">
        {guesses.map((guess) => (
            <>
                <ColorRow colors={guess.colorsGuessed} colorClickFn={null}/>
                <ResultDisplay
                    black={guess.correct.black}
                    white={guess.correct.white}
                />
            </>
        ))}
    </div>
);

export default PreviousGuesses;
