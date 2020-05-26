import React from 'react';
import { ColorTypes } from './Game';


export interface GuessButtonsPropTypes {
    colors: ColorTypes[]
    buttonFunction: (color: ColorTypes) => void
}

export const GuessButtons = ({ colors, buttonFunction } : GuessButtonsPropTypes) => (
    <div>
        GUESSBUTTONS:
        {colors.map((color) => (
            <button
                style={{
                    backgroundColor: color,
                    minWidth: '2em',
                    minHeight: '2em',
                }}
                key={color}
                onClick={() => buttonFunction(color)}
            />
        ))}
    </div>
);

export default GuessButtons;
