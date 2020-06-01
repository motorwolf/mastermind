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
    empty: number;
}

export interface MastermindGamedataShape {
    createCode: (length: number, allColors: ColorTypes[]) => ColorTypes[]
}

export interface GameProps {
    secretCode: ColorTypes[]
    codeLength: number
    colors: ColorTypes[]
}

export const COLORS: ColorTypes[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
];
