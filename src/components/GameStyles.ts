import { createUseStyles } from 'react-jss';

export const GameStyles = createUseStyles((theme: any) => ({
    gameContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '70vh',
        backgroundColor: theme.colors.white,
        color: theme.colors.black,
        alignItems: 'center',
    },
}));
