import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#D0F0C0',
        },
        secondary: {
            main: '#D0F0C0',
        },
        background: {
            default: '#FFF',
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
