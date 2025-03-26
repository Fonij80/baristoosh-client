import { useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { RecipeMedia } from './RecipeMedia';
import { RecipeDetails } from './RecipeDetails';

interface RecipePageProps {
    currentRecipe: any;
}

export const RecipePage = ({ currentRecipe }: RecipePageProps) => {
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    return (
        <>
            {isMobile ? (
                <>
                    <RecipeMedia currentRecipe={currentRecipe} />
                    <RecipeDetails currentRecipe={currentRecipe} />
                </>
            ) : (
                <>
                    <RecipeDetails currentRecipe={currentRecipe} />
                    <RecipeMedia currentRecipe={currentRecipe} />
                </>
            )}
        </>
    );
};
