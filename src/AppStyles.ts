import { createUseStyles } from 'react-jss';

export const AppStyles = createUseStyles((theme: any) => ({
    backdrop: {
        backgroundColor: theme.colors.black,
        color: theme.colors.white,
        fontFamily: theme.font,
        height: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateAreas: `
            "header header header"
            "main main main"
            "footer footer footer"
        `,
        gridTemplateRows: `1fr 5fr 1fr`,
    },
    heading: {
        fontSize: `min(15vw, 7rem)`,
        margin: 0,
    },
    header: {
        gridArea: 'header',
        textAlign: 'center',
    },
    main: {
        display: 'flex',
        gridArea: 'main',
        flexDirection: 'column',
        backgroundColor: theme.colors.white,
        alignItems: 'center',
    },
    footer: {
        gridArea: 'footer',
    },
}));
