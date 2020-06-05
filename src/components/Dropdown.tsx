import React, { ChangeEvent } from 'react';
import { DropdownStyles } from './DropdownStyles';
import { theme } from '../index';

export interface OptionShape {
    display?: string;
    value: any;
}

export interface DropdownPropTypes {
    options: OptionShape[];
    labelText: string;
    name: string;
    onChangeFn: (ev: ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown = ({
    options,
    onChangeFn,
    labelText,
    name,
}: DropdownPropTypes) => {
    const classes = DropdownStyles({ theme });
    return (
        <label className={classes.label}>
            {labelText}
            <select name={name} onChange={(ev) => onChangeFn(ev)}>
                {options.map((option) => (
                    <option value={option.value}>
                        {' '}
                        {option.display || option.value}
                    </option>
                ))}
            </select>
        </label>
    );
};
