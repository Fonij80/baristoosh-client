import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SocialLink } from '../atoms';

export const SocialLinksGroup = () => {
    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <SocialLink href="https://www.instagram.com/yourhandle" icon={<InstagramIcon />} />
            <SocialLink href="https://www.instagram.com/yourhandle" icon={<YouTubeIcon />} />
            <SocialLink href="https://www.instagram.com/yourhandle" icon={<TwitterIcon />} />
        </Box>
    )
}