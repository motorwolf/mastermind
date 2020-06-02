import { ColorTypes, CheckedType, COLORS } from './GameTypes';

export const createCode = (codeLength: number) => {
    const code: ColorTypes[] = [];
    while (code.length < length) {
        code.push(COLORS[Math.floor(Math.random() * (COLORS.length - 1))]);
    }
    return code;
};

export const checkGuess = (guess: ColorTypes[], secretCode: ColorTypes[]) => {
    let code: CheckedType[] = [...secretCode];
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
        this.won = true;
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
    };
};
