import { createUseStyles } from 'react-jss';

export const PreviousGuessesStyles = createUseStyles((theme: any) => ({
    previousGuessContainer: {
        overflowY: 'scroll',
        maxHeight: '500px',
        flexGrow: 1,
    },
}));
