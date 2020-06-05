import { createUseStyles } from 'react-jss';

export const DropdownStyles = createUseStyles((theme: any) => ({
    label: {
        fontFamily: theme.font,
        backgroundColor: theme.red,
    },
}));
