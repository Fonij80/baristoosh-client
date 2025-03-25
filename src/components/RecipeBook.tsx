import { useState } from 'react';
import { Box, IconButton, Paper, Typography, List, ListItem, ListItemText, Divider, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Recipe } from '../types/Recipe';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '../context/ThemeContext';

const MotionPaper = motion(Paper);

interface RecipeBookProps {
    recipes: Recipe[];
}

export const RecipeBook = ({ recipes }: RecipeBookProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const { mode } = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    const nextPage = () => {
        if (currentPage < recipes.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(0);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(recipes.length - 1);
        }
    };

    const currentRecipe = recipes[currentPage];

    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case 'coffee':
                return '#6F4E37'; // Classic coffee brown
            case 'tea':
                return '#B5A642'; // Mix of green and yellow (olive gold)
            case 'smoothie':
                return '#6A5ACD'; // Slate blue (blue-purple mix)
            default:
                return '#ffffff'; // Default fallback
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            p: 2,
            position: 'relative'
        }}>
            <IconButton
                onClick={prevPage}
                // disabled={currentPage === 0}
                sx={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: 'background.paper'
                    }
                }}
            >
                <ChevronLeftIcon />
            </IconButton>
            <IconButton
                onClick={nextPage}
                // disabled={currentPage === recipes.length - 1}
                sx={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: 'background.paper'
                    }
                }}
            >
                <ChevronRightIcon />
            </IconButton>
            <AnimatePresence mode="wait">
                <MotionPaper
                    key={currentPage}
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -180, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    elevation={3}
                    sx={{
                        width: '90%',
                        maxWidth: '1200px',
                        height: '80vh',
                        borderRadius: 4,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        position: 'relative',
                        backgroundColor: getCategoryColor(currentRecipe.category),
                        backgroundImage: `linear-gradient(
                          45deg,
                          ${getCategoryColor(currentRecipe.category)}66,
                          ${getCategoryColor(currentRecipe.category)}33
                        )`,
                        color: (theme) =>
                            theme.palette.getContrastText(getCategoryColor(currentRecipe.category))
                    }}
                >
                    {/* Image */}
                    <Box
                        sx={{
                            width: isMobile ? '100%' : '50%',
                            height: isMobile ? '40%' : '100%',
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                [isMobile ? 'bottom' : 'right']: 0,
                                [isMobile ? 'left' : 'top']: 0,
                                [isMobile ? 'right' : 'bottom']: 0,
                                width: isMobile ? '100%' : '2px',
                                height: isMobile ? '2px' : '100%',
                                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1), transparent)',
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src={currentRecipe.imageUrl}
                            alt={currentRecipe.title}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    {/* Recipe */}
                    <Box sx={{
                        width: isMobile ? '100%' : '50%',
                        height: isMobile ? '60%' : '100%',
                        p: 3,
                        overflowY: 'auto'
                    }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {currentRecipe.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            {currentRecipe.description}
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                            Ingredients
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
                            Instructions
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
                </MotionPaper>
            </AnimatePresence>
        </Box>
    );
};
