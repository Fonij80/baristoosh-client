import { Box, ButtonGroup, Button } from '@mui/material';
import { DRINK_CATEGORIES } from '../../types/DrinkCategories';

interface FilterButtonsProps {
    onFilter: (category: string, isSelected: boolean) => void;
    selectedCategories: string[];
}

export const FilterButtons = ({ onFilter, selectedCategories }: FilterButtonsProps) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                sx={{
                    mt: 3,
                    '& .MuiButtonGroup-grouped': { borderRadius: 20 },
                    '& .MuiButtonGroup-grouped:not(:first-of-type)': { marginLeft: 2 },
                    '& .MuiButtonGroup-grouped:not(:last-of-type)': { marginRight: 2 },
                }}
            >
                {DRINK_CATEGORIES.map((category) => (
                    <Button
                        key={category}
                        onClick={() => onFilter(category, !selectedCategories.includes(category))}
                        sx={{
                            borderRadius: 20,
                            backgroundColor: selectedCategories.includes(category)
                                ? 'primary.main'
                                : 'transparent',
                            color: selectedCategories.includes(category)
                                ? 'white'
                                : 'text.primary',
                        }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                ))}
            </ButtonGroup>
        </Box>
    );
};
