import { createUseStyles } from 'react-jss';

export const GameOptionStyles = createUseStyles((theme: any) => ({
    dialog: {
        color: theme.colors.black,
        maxWidth: '40%',
        minWidth: '500px',
        padding: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
}));
