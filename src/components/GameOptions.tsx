import React, { ChangeEvent } from 'react';

export interface GameOptionsPropTypes {
    onInputChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
    onFormSubmit: () => void;
    colorNum: number;
    codeLength: number;
}

export const GameOptions = ({
    onInputChange,
    onFormSubmit,
    colorNum,
    codeLength,
}: GameOptionsPropTypes) => {
    return (
        <form
            onSubmit={(ev) => {
                ev.preventDefault();
                onFormSubmit();
            }}
        >
            <label>
                Select your number of colors:
                <select
                    value={colorNum}
                    name="colorNum"
                    onChange={(ev) => onInputChange(ev)}
                >
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
            </label>
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
    );
};
