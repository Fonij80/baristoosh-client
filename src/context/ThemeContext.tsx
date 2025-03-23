import { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    toggleTheme: () => void;
    mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>('light');

    const theme = createTheme({
        palette: {
            mode,
            primary: {
                main: '#4A2C2A',
            },
            secondary: {
                main: '#2E7D32',
            },
            background: {
                default: mode === 'light' ? '#f5f5f5' : '#121212',
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
                        background: mode === 'light'
                            ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                            : 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)',
                        minHeight: '100vh',
                    },
                },
            },
        },
    });

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}; 