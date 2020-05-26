import React from 'react';
import { ColorTypes } from './Game';

export interface ColorBlockProps {
    color: ColorTypes
    onClick?: (index: number) => void
    id: number
}

export const ColorBlock = ({ color, onClick, id }: ColorBlockProps) => {
    const onClickFn = onClick ? () => onClick(id) : undefined;
    return <div className={`colorblock ${color}`} onClick={onClickFn}></div>;
};
