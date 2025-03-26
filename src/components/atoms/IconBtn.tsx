import { IconButton } from '@mui/material';

interface IconBtnProps {
    icon: React.ReactNode;
    onClick: () => void;
    direction: 'left' | 'right';
}

export const IconBtn = ({ icon, onClick, direction }: IconBtnProps) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: 'absolute',
                [direction === 'left' ? 'left' : 'right']: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'background.paper',
                boxShadow: 2,
                '&:hover': {
                    backgroundColor: 'background.paper'
                }
            }}
        >
            {icon}
        </IconButton>
    );
};
