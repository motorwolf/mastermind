import { createUseStyles } from 'react-jss';

export const DropdownStyles = createUseStyles((theme: any) => ({
    label: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: theme.fontSizes.medium,
    },
}));
