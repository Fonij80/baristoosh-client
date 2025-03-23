import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';

export const Layout = () => {
    const { toggleTheme, mode } = useTheme();
    const { t } = useTranslation();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static" color="default" elevation={1} sx={{ width: '100%' }}>
                <Toolbar sx={{ width: '100%', px: 4 }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4" component="h1" color="primary" sx={{ fontWeight: 700 }}>
                            {t('app.title')}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 2 }}>
                            {t('app.subtitle')}
                        </Typography>
                    </Box>
                    <IconButton onClick={toggleTheme} color="inherit">
                        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Outlet />
            </Box>
        </Box>
    );
}; 