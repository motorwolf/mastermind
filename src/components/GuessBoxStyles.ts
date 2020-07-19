import { createUseStyles } from 'react-jss';

export const GuessBoxStyles = createUseStyles((theme: any) => ({
    guessBoxContainer: {
        flexShrink: 0,
        flexBasis: '10vh',
    },
    currentGuess: {
        height: '10vh',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
    },
    buttonHolder: {
        height: '10vh',
    },
}));
