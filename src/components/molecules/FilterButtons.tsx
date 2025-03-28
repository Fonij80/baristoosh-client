import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { DRINK_CATEGORIES } from '../../types/DrinkCategories';

interface FilterButtonsProps {
    onFilter: (category: string, isSelected: boolean) => void;
    selectedCategories: string[];
}

export const FilterButtons = ({ onFilter, selectedCategories }: FilterButtonsProps) => {
    const { t } = useTranslation();
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            mb: 2,
            mt: 2,
        }}>
            {DRINK_CATEGORIES.map((category) => (
                <Button
                    key={category}
                    onClick={() => onFilter(category, !selectedCategories.includes(category))}
                    sx={{
                        borderRadius: 20,
                        border: '1px solid',
                        minWidth: 100,
                    }}
                >
                    {t(`drink_categories.${category}`)}
                </Button>
            ))}
        </Box>
    );
};
