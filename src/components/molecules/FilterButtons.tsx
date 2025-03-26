import { Box, ButtonGroup, Button } from '@mui/material';

interface FilterButtonsProps {
    onFilter: (category: string) => void;
}

export const FilterButtons = ({ onFilter }: FilterButtonsProps) => {
    const categories = ['coffee', 'tea', 'milk shake', 'smoothie'];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                sx={{
                    borderRadius: 20,
                    '& .MuiButtonGroup-grouped': {
                        borderRadius: 20,
                    },
                    '& .MuiButtonGroup-grouped:not(:first-of-type)': {
                        marginLeft: 2,
                    },
                    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                        marginRight: 2,
                    },
                }}
            >
                {categories.map((category) => (
                    <Button key={category} onClick={() => onFilter(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                ))}
            </ButtonGroup>
        </Box>
    );
};
