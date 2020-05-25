import React from 'react';

const outputResultBubbles = (num, color) =>
    [...Array(num)].map((r) => <div className={`resultblock ${color}`}></div>);

export const ResultDisplay = ({ black, white }) => (
    <div className="resultholder colorblock">
        {outputResultBubbles(black, 'black')}
        {outputResultBubbles(white, 'white')}
    </div>
);

export default ResultDisplay;
