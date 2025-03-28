import { Box } from '@mui/material';
import { SocialLinksGroup, CopyRight, NewsletterForm } from '../../molecules';

export const Footer = () => {
    const handleSubscribe = (email: string) => {
        console.log(`Subscribed with email: ${email}`);
        // Implement your subscription logic here
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
        }}>
            {/* <NewsletterForm onSubmit={handleSubscribe} /> */}
            <SocialLinksGroup />
            <CopyRight />
        </Box>
    );
};
