import { createUseStyles } from 'react-jss';
import { theme } from '../Theme';

export const colorBackgrounds = {
    red: {
        backgroundColor: theme.colors.red,
    },
    orange: {
        backgroundColor: theme.colors.orange,
    },
    yellow: {
        backgroundColor: theme.colors.yellow,
    },
    green: {
        backgroundColor: theme.colors.green,
    },
    blue: {
        backgroundColor: theme.colors.blue,
    },
    purple: {
        backgroundColor: theme.colors.purple,
    },
    black: {
        backgroundColor: theme.colors.black,
    },
    white: {
        backgroundColor: theme.colors.grey,
    },
};

export const ColorBlockStyles = createUseStyles((theme: any) => ({
    colorBlock: {
        flex: 1,
    },
    resultBlockContainer: {
        height: '100px',
        flexDirection: 'column',
        flexWrap: 'wrap',
        display: 'flex',
    },
    resultBlock: {
        borderRadius: '50%',
        width: '25px',
        height: '25px',
    }, 
    ...colorBackgrounds,
}));
