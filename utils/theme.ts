import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        // fontFamily: ['Heebo', 'sans-serif'].join(','),
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: {
                    maxWidth: '1200px',
                    '@media (min-width: 900px)': { maxWidth: '1200px' },
                },
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media (min-width: 768px)': { maxWidth: '860px' },
                },
            },
            defaultProps: {
                maxWidth: 'lg',
            },
            variants: [],
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                root: {
                    color: 'black',
                    '&:hover , &.active': {
                        color: '#ff6464',
                    },
                },
            },
        },
    },
});

export default theme;
