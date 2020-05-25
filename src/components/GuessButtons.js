import React from 'react';

export const GuessButtons = ({ colors, buttonFunction }) => (
    <div>
        GUESSBUTTONS:
        {colors.map((color) => (
            <button
                style={{ backgroundColor: color, minWidth: '2em', minHeight: '2em' }}
                key={color}
                onClick={() => buttonFunction(color)}
            />
        ))}
    </div>
);

export default GuessButtons;
