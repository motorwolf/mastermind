import { createUseStyles } from 'react-jss';

export const GameOptionStyles = createUseStyles((theme: any) => ({
    dialog: {
        backgroundColor: theme.colors.white,
        color: theme.colors.black,
        outline: '3px solid white',
        border: '3px solid black',
    },
}));
