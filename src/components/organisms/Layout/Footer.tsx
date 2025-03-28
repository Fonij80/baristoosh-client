import { Box } from '@mui/material';
import { SocialLinksGroup, CopyRight, NewsletterForm } from '../../molecules';

export const Footer = () => {

    const handleSubscribe = (email: string) => {
        console.log(`Subscribed with email: ${email}`);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 5,
        }}>
            {/* <NewsletterForm onSubmit={handleSubscribe} /> */}
            {/* <SocialLinksGroup /> */}
            <CopyRight />
        </Box>
    );
};
