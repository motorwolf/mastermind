import React from 'react';
import { ColorTypes } from './Game';

export interface ColorButtonTypes {
    color: ColorTypes;
    addColor: (color: ColorTypes) => {};
}

const ColorButton = ({ color, addColor }: ColorButtonTypes) => (
    <button style={{ backgroundColor: color }} onClick={() => addColor(color)}>
        {color}
    </button>
);

export default ColorButton;
