import React from 'react';

const ColorButton = (props) => {

  const { color, addColor } = props;
  return (
    <button 
      style = {{ backgroundColor: color }}
      onClick={() => addColor(color)}
    >
        { color }
    </button>
  );
}

export default ColorButton;
