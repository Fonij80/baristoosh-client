import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0d1137',
        },
        secondary: {
            main: '#6F4E37',
        },
        background: {
            default: '#FBFBFB',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    // minHeight: '100vh',
                },
            },
        },
    },
});
