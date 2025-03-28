import { useTranslation } from 'react-i18next';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Recipe } from '../../../types/Recipe';

interface InstructionsProps {
    currentRecipe: Recipe;
}

export const Instructions = ({ currentRecipe }: InstructionsProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Typography variant="subtitle1" gutterBottom>
                {t("recipe_details.subtitle_two")}
            </Typography>
            <List dense>
                {currentRecipe.instructions.map((instruction, index) => (
                    <ListItem key={index} dir="rtl">
                        <ListItemText
                            primary={`${index + 1}. ${instruction}`}
                            primaryTypographyProps={{
                                variant: 'body2',
                                textAlign: 'right',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    )
}