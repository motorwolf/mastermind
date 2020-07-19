import { createUseStyles } from 'react-jss';

export const GameStyles = createUseStyles((theme: any) => ({
    gameContainer: {
        backgroundColor: theme.colors.white,
        color: theme.colors.black,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        height: '100%',
        maxHeight: '70vh',
        maxWidth: '100vw',
    },
}));
