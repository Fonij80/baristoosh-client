import { Box, Typography, List, ListItem, ListItemText, Divider, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { Recipe } from '../types/Recipe';
import { useTranslation } from 'react-i18next';

interface RecipeDetailsProps {
    currentRecipe: Recipe;
}

export const RecipeDetails = ({ currentRecipe }: RecipeDetailsProps) => {
    const { t } = useTranslation();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    return (
        <Box sx={{
            width: isMobile ? '100%' : '50%',
            height: isMobile ? '60%' : '100%',
            p: 3,
            overflowY: 'auto',
        }}>
            <Typography variant="h5" component="h2" gutterBottom>
                {currentRecipe.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
                {currentRecipe.description}
            </Typography>

            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                {t("recipe_details.subtitle_one")}
            </Typography>
            <List dense>
                {currentRecipe.ingredients.map((ingredient, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={ingredient} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
                {t("recipe_details.subtitle_two")}
            </Typography>
            <List dense>
                {currentRecipe.instructions.map((instruction, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`${index + 1}. ${instruction}`}
                            primaryTypographyProps={{ variant: 'body2' }}
                        />
                    </ListItem>
                ))}
            </List>

            <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="caption" color="text.secondary">
                    ⏱️ {currentRecipe.preparationTime}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    👥 {currentRecipe.servings} servings
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    📊 {currentRecipe.difficulty}
                </Typography>
            </Box>
        </Box>
    )
}