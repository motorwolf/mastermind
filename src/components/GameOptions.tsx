import React, { ChangeEvent } from 'react';
import { Dropdown } from './Dropdown';
import { GameOptionStyles } from './GameOptionsStyles';
import { theme } from '../Theme'

export interface GameOptionsPropTypes {
    onInputChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
    onFormSubmit: () => void;
    colorNum: number;
    codeLength: number;
}

export const SelectValues = [4, 5, 6].map((value) => ({
    value,
}));

export const GameOptions = ({
    onInputChange,
    onFormSubmit,
    colorNum,
    codeLength,
}: GameOptionsPropTypes) => {
    const classes = GameOptionStyles({ theme });
    return (
        <div className={classes.dialog}>
            <form
                onSubmit={(ev) => {
                    ev.preventDefault();
                    onFormSubmit();
                }}
            >
                <Dropdown
                    options={SelectValues}
                    name="colorNum"
                    labelText="Select the number of colors available:"
                    onChangeFn={onInputChange}
                />
                <label>
                    Select your code length :
                    <select
                        value={codeLength}
                        name="codeLength"
                        onChange={(ev) => onInputChange(ev)}
                    >
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </label>
                <button type="submit">START NEW GAME!</button>
            </form>
        </div>
    );
};
