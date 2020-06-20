import React from 'react';
import { ColorTypes } from './Game';
import { ColorBlockStyles } from './ColorBlockStyles';
import { theme } from '../Theme';

export interface ColorBlockProps {
    color: ColorTypes
    onClick?: (index: number) => void
    id: number
}

export const ColorBlock = ({ color, onClick, id }: ColorBlockProps) => {
    const classes = ColorBlockStyles({theme})
    const onClickFn = onClick ? () => onClick(id) : undefined;
    return <div className={`${classes.colorBlock} ${classes[color]}`} onClick={onClickFn}></div>;
};
