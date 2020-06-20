import { createUseStyles } from 'react-jss';

export const AppStyles = createUseStyles((theme: any) => ({
    backdrop: {
        backgroundColor: theme.colors.black,
        color: theme.colors.white,
        fontFamily: theme.font,
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    heading: {
        fontSize: '10vh',
        margin: 0,
        overflow: 'hidden',
        padding: `0 0 2rem`,
    },
    header: {
        maxHeight: '15vh',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
    },
}));
