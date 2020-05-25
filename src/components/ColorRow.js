import React from 'react';
import ColorBlock from './ColorBlock';

export const ColorRow = ({ colors, colorClickFn }) => {
    return colors.map((color, index) => (
        <ColorBlock
            color={color}
            id={index}
            onClick={colorClickFn}
        />
    ));
};
