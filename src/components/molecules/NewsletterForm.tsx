import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface NewsletterFormProps {
    onSubmit: (email: string) => void;
}

export const NewsletterForm = ({ onSubmit }: NewsletterFormProps) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(email);
        setEmail(''); // Clear input field after submission
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: '100%' }}
            />
            <Button type="submit" variant="contained">
                Subscribe
            </Button>
        </Box>
    );
};
