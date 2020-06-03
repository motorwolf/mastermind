export type ColorTypes =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'purple';

export type CheckedType = ColorTypes | null;

export interface GuessCorrectShape {
    colors: ColorTypes[];
    black: number;
    white: number;
}

export interface MastermindGamedataShape {
    createCode: (length: number, allColors: ColorTypes[]) => ColorTypes[];
}

export interface GamePropTypes {
    secretCode: ColorTypes[];
    codeLength: number;
}

export const COLORS: ColorTypes[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
];
