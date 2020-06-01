import {
    ColorTypes,
    CheckedType,
    MastermindGamedataShape,
    GuessShape,
    COLORS,
} from './GameTypes';

export class MastermindGame implements MastermindGamedataShape {
    secretCode: ColorTypes[];
    codeLength: number;
    guesses: GuessShape[];
    won: boolean;

    constructor(codeLength: number) {
        this.secretCode = this.createCode(codeLength, COLORS);
        this.codeLength = codeLength;
        this.guesses = [];
        this.won = false;
    }

    createCode = (codeLength: number, allColors: ColorTypes[]) => {
        const code: ColorTypes[] = [];
        while (code.length < length) {
            code.push(
                allColors[Math.floor(Math.random() * (allColors.length - 1))]
            );
        }
        return code;
    };

    checkGuess = (guess: ColorTypes[]) => {
        let code: CheckedType[] = [...this.secretCode];
        let guessCopy: CheckedType[] = [...guess];
        let black = 0;
        let white = 0;
        for (let i = 0; i < code.length; i++) {
            if (code[i] === guessCopy[i]) {
                code[i] = null;
                guessCopy[i] = null;
                black++;
            }
        }
        if (black === this.codeLength) {
            this.won = true
            console.log(
                'YOUVE WON!!! OH MAN! BET YOU EXPECTED MORE THAN A CONSOLE LOGGED MESSAGE!'
            );
        } else {
            code = code.filter((x) => x);
            guessCopy = guessCopy.filter((x) => x);
            for (let i = 0; i < guessCopy.length; i++) {
                let colorCodeIndex = code.indexOf(guessCopy[i]);
                if (colorCodeIndex !== -1) {
                    code.splice(colorCodeIndex, 1);
                    white++;
                }
            }
        }
        return {
            colors: guess,
            black,
            white,
            empty: this.codeLength - (black + white),
        };
    };

    addGuess = (guess: GuessShape) => {
        this.guesses = [...this.guesses, guess];
    };
}
