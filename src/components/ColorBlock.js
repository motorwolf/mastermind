import React from 'react';

const ColorBlock = ({ color, removable, removeColor, id }) => {
  let clickFunction = removable ? (e) => removeColor(e) : () => '';
  return (
    <div className={`colorblock ${color}`} onClick={() => clickFunction(id)}></div>
  );
}

export default ColorBlock;
