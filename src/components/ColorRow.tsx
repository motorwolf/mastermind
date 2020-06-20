import React from 'react';
import { ColorBlock } from './ColorBlock';
import { ColorTypes } from './Game';
import { theme } from '../Theme';
import { ColorRowStyles } from './ColorRowStyles';

export interface ColorRowPropTypes {
    colors: ColorTypes[];
    colorClickFn?: (index: number) => void;
}

export const ColorRow = ({ colors, colorClickFn }: ColorRowPropTypes) => {
    const classes = ColorRowStyles({ theme })
    return (
        <div className={classes.colorRow}>
            {colors.map((color, index) => (
                <ColorBlock
                    color={color}
                    id={index}
                    onClick={colorClickFn}
                    key={color + index}
                />
            ))}
        </div>
    );
};
