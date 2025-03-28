import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Box, Typography, Container } from '@mui/material';
import { SocialLinksGroup } from '../../molecules';
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
                    paddingTop: { xs: 2, md: 1 },
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            width: '100%',
                            margin: '0 auto',
                            padding: 2,
                            flexDirection: { xs: 'column', md: 'row' }, // Stack items on mobile
                            alignItems: 'center', // Center items vertically
                        }}
                    >
                        {/* Centered Logo */}
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', md: 'center' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Logo />
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                                    {t("brand_slogan")}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Social Links (Only on Desktop) */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' }, // Only show on desktop
                                gap: 1,
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                mt: 4,
                            }}
                        >
                            <SocialLinksGroup />
                        </Box>
                    </Toolbar>
                </Container>

                {/* Social Links Above Horizontal Line (Mobile) */}
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' }, // Only show on mobile
                        justifyContent: 'center',
                    }}
                >
                    <SocialLinksGroup />
                </Box>

                {/* Horizontal Line */}
                <Box
                    sx={{
                        width: '70%',
                        height: '1px',
                        backgroundColor: 'text.disabled',
                        mx: 'auto',
                    }}
                />
            </AppBar>
        </>
    );
};
