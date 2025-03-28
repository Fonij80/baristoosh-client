import { Box, Button } from '@mui/material';
import { DRINK_CATEGORIES } from '../../types/DrinkCategories';

interface FilterButtonsProps {
    onFilter: (category: string, isSelected: boolean) => void;
    selectedCategories: string[];
}

export const FilterButtons = ({ onFilter, selectedCategories }: FilterButtonsProps) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2, // Gap between buttons
            mb: 2,
            mt: 2,
        }}>
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
                        minWidth: 100,
                    }}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
            ))}
        </Box>
    );
};
