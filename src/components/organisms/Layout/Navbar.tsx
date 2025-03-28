import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Box, Typography, Container } from '@mui/material';
import { Logo } from '../../atoms';

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    paddingTop: { xs: 2, md: 1 }
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            width: '100%',
                            margin: '0 auto',
                            justifyContent: 'center',
                            padding: 2,
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
            <Box sx={{
                width: '70%',
                height: '1px',
                backgroundColor: 'text.disabled', // Change color as needed
                mx: 'auto'
            }} />
        </>
    );
};
