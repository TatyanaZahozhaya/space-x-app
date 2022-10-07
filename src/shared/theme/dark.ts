import { createTheme } from '@mui/material/styles';

export const dark = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff',
            light: '#A5260A',
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000',
        },
        background: {
            default: '#000000',
            paper: '#ffffff',
        },
    },
});
