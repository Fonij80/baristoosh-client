import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';
import TuneIcon from '@mui/icons-material/Tune';
import { Recipe } from '../../../types/Recipe';

interface PreparationOverviewProps {
    currentRecipe: Recipe;
}

export const PreparationOverview = ({ currentRecipe }: PreparationOverviewProps) => {
    const { t } = useTranslation();
    return (
        <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <TimerIcon fontSize="small" />
                <Typography variant="caption" color="text.secondary">
                    {currentRecipe.preparationTime}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <GroupIcon fontSize="small" />
                <Typography variant="caption" color="text.secondary">
                    {currentRecipe.servings} نفر
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <TuneIcon fontSize="small" />
                <Typography variant="caption" color="text.secondary">
                    {t(`recipe_details.difficulty.${currentRecipe.difficulty}`)}
                </Typography>
            </Box>
        </Box>
    );
};
