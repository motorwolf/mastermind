import { createUseStyles } from 'react-jss';

export const GameOptionStyles = createUseStyles((theme: any) => ({
    dialog: {
        backgroundColor: theme.colors.white,
        color: theme.colors.black,
        outline: '5px solid white',
        border: '5px solid black',
        maxWidth: '40%',
        padding: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
}));
