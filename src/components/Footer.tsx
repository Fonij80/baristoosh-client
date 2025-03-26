import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
            backgroundColor: 'background.default',
            color: 'text.secondary'
        }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Link href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ fontSize: 24 }} />
                </Link>
                <Link href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon sx={{ fontSize: 24 }} />
                </Link>
                <Link href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon sx={{ fontSize: 24 }} />
                </Link>
            </Box>
            <Typography variant="body2">
                {t("footer.copyright")}
            </Typography>
        </Box>
    );
};
