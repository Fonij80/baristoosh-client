import { Box, Divider, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { PreparationOverview } from './PreparationOverview';
import { PageTitle } from './PageTitle';
import { Ingredients } from './Ingredients';
import { Instructions } from './Instructions.tsx';
import { Recipe } from '../../../types/Recipe';

interface RecipeDetailsProps {
    currentRecipe: Recipe;
}

export const RecipeDetails = ({ currentRecipe }: RecipeDetailsProps) => {
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    const backgroundColor = {
        'coffee': '#D0A48D',
        'tea': '#E1F7C7',
        'milk shake': '#AAD0C8',
        'smoothie': '#FFDAB9',
        'juice': 'FAD6A5',
    };

    return (
        <Box sx={{
            width: isMobile ? '100%' : '50%',
            height: isMobile ? '60%' : '100%',
            p: 3,
            overflowY: 'auto',
            backgroundColor: backgroundColor[currentRecipe.category],
        }}>
            <PageTitle currentRecipe={currentRecipe} />

            <PreparationOverview currentRecipe={currentRecipe} />


            <Ingredients currentRecipe={currentRecipe} />

            <Divider sx={{ my: 2 }} />

            <Instructions currentRecipe={currentRecipe} />
        </Box>
    )
}
