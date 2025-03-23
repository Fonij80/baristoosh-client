import { AppBar, Toolbar, IconButton, Box, Typography, Container } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo1.png'

export const Navbar = () => {
    const { toggleTheme, mode } = useTheme();
    const { t } = useTranslation();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                width: '100%',
                backgroundColor: 'transparent',
                paddingTop: { xs: 2, md: 4 } // More padding from the top
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        width: '80%', // 80% of the container width
                        margin: '0 auto', // Center the toolbar
                        justifyContent: 'space-between',
                        padding: 2, // Add some padding inside the toolbar
                    }}
                >
                    <Box sx={{ width: '48px' }} /> {/* Spacer */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box
                            component="img"
                            sx={{
                                height: 40,
                                width: 'auto',
                                maxHeight: { xs: 30, md: 40 },
                                maxWidth: { xs: 120, md: 160 },
                            }}
                            alt="Logo"
                            src={logo}
                        />
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                            Make your coffee easily at home
                        </Typography>
                    </Box>
                    <IconButton onClick={toggleTheme} color="inherit">
                        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
