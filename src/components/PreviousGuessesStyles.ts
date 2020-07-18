import { createUseStyles } from 'react-jss';

export const PreviousGuessesStyles = createUseStyles((theme: any) => ({
    previousGuessContainer: {
        overflowY: 'scroll',
        maxHeight: '500px',
        flexGrow: 1,
    },
    guessRows: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: '100vw',
    },
}));
