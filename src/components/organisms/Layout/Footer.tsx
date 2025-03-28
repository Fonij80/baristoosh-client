import { Box } from '@mui/material';
import { CopyRight } from '../../molecules';

export const Footer = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 5,
        }}>
            <CopyRight />
        </Box>
    );
};
