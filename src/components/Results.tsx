import React from 'react';

export interface ResultDisplayProps {
    black: number;
    white: number;
}

const outputResultBubbles = (num: number, color: 'black' | 'white') =>
    [...Array(num)].map((r) => <div className={`resultblock ${color}`}></div>);

export const ResultDisplay = ({ black, white }: ResultDisplayProps) => (
    <div className="colorRow colorblock">
        {outputResultBubbles(black, 'black')}
        {outputResultBubbles(white, 'white')}
    </div>
);

export default ResultDisplay;
