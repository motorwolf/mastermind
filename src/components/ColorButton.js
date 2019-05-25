import React from 'react';

const ColorButton = ({ color, addColor }) => (
    <button 
      style = {{ backgroundColor: color }}
      onClick={() => addColor(color)}
    >
        { color }
    </button>
  );

export default ColorButton;
