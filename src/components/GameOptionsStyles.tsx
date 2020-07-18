import { createUseStyles } from 'react-jss';

export const GameOptionStyles = createUseStyles((theme: any) => ({
    dialog: {
        color: theme.colors.black,
        padding: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
}));
