import { useTranslation } from 'react-i18next';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Recipe } from '../../../types/Recipe';

interface IngredientsProps {
    currentRecipe: Recipe;
}

export const Ingredients = ({ currentRecipe }: IngredientsProps) => {
    const { t } = useTranslation();
    return (
        <>
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                {t("recipe_details.subtitle_one")}
            </Typography>
            <List dense>
                {currentRecipe.ingredients.map((ingredient, index) => (
                    <ListItem key={index} dir="rtl">
                        <ListItemText
                            primary={ingredient}
                            primaryTypographyProps={{
                                textAlign: 'right',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    )
}