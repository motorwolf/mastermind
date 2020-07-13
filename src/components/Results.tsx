import React from 'react';
import { theme } from '../Theme';
import { ColorBlockStyles } from './ColorBlockStyles';

export interface ResultDisplayProps {
    black: number
    white: number
}

const outputResultBubbles = (num: number, color: string) => {
    const classes = ColorBlockStyles({theme})
    return ([...Array(num)].map(r => <div className={`${classes.resultBlock} ${color}`}></div>))}


export const ResultDisplay = ({ black, white }: ResultDisplayProps) => {
    const classes = ColorBlockStyles({theme})
    return (
    <div className={`${classes.resultBlockContainer}`}>
        {outputResultBubbles(black, classes.black)}
        {outputResultBubbles(white, classes.white)}
    </div>
)};

export default ResultDisplay;
