import { AppBar, Toolbar, Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                width: '100%',
                backgroundColor: 'transparent',
                paddingTop: { xs: 2, md: 2 }
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        width: '100%', // Use full container width
                        margin: '0 auto', // Not needed but can be kept for consistency
                        justifyContent: 'center', // Center the content
                        padding: 2, // Add some padding inside the toolbar
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Logo />
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                            {t("brand_slogan")}
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
