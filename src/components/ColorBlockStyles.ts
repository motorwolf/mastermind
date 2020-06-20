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
};

export const ColorBlockStyles = createUseStyles((theme: any) => ({
    colorBlock: {
        height: '100px',
        width: '100px',
    },
    ...colorBackgrounds,
}));