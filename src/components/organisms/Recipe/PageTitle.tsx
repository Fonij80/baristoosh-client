import { Typography } from '@mui/material';
import { Recipe } from '../../../types/Recipe';

interface PageTitleProps {
    currentRecipe: Recipe;
}

export const PageTitle = ({ currentRecipe }: PageTitleProps) => {
    return (
        <>
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }} gutterBottom>
                {currentRecipe.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                {currentRecipe.description}
            </Typography>
        </>
    )
}