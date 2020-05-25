import React from 'react';

const ColorBlock = ({ color, onClick, id }) => {
    const onClickFn = onClick ? () => onClick(id) : null 
    return (
        <div
            className={`colorblock ${color}`}
            onClick={onClickFn}
        ></div>
    );
};

export default ColorBlock;
