import React from 'react';
import { ColorBlock } from './ColorBlock';
import { ColorTypes } from './Game';

export interface ColorRowPropTypes {
    colors: ColorTypes[];
    colorClickFn?: (index: number) => void;
}

export const ColorRow = ({ colors, colorClickFn }: ColorRowPropTypes) => {
    return <div className="colorRow">
    {colors.map((color, index) => (
        
            <ColorBlock
                color={color}
                id={index}
                onClick={colorClickFn}
                key={color}
            />
        
    ))}
    </div>
};
