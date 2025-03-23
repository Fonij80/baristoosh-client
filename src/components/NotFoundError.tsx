import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotFoundError = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h4" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                The page you're looking for doesn't exist.
            </Typography>
            <Button variant="contained" onClick={() => navigate('/')}>
                Go Home
            </Button>
        </Container>
    );
}; 