import { useState } from 'react';
import { Box, IconButton, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
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

    const nextPage = () => {
        if (currentPage < recipes.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentRecipe = recipes[currentPage];

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 64px)',
            p: 4,
            position: 'relative'
        }}>
            <IconButton
                onClick={prevPage}
                disabled={currentPage === 0}
                sx={{
                    position: 'absolute',
                    left: 20,
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
                disabled={currentPage === recipes.length - 1}
                sx={{
                    position: 'absolute',
                    right: 20,
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
                        width: '95%',
                        maxWidth: '1600px',
                        height: 'calc(100vh - 100px)',
                        borderRadius: 4,
                        overflow: 'hidden',
                        display: 'flex',
                        position: 'relative',
                        backgroundColor: mode === 'dark' ? 'background.paper' : 'background.default'
                    }}
                >
                    {/* Left page - Image */}
                    <Box
                        sx={{
                            width: '50%',
                            height: '100%',
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '2px',
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

                    {/* Right page - Recipe */}
                    <Box sx={{ width: '50%', p: 4, overflowY: 'auto' }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            {currentRecipe.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            {currentRecipe.description}
                        </Typography>

                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Ingredients
                        </Typography>
                        <List>
                            {currentRecipe.ingredients.map((ingredient, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={ingredient} />
                                </ListItem>
                            ))}
                        </List>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h6" gutterBottom>
                            Instructions
                        </Typography>
                        <List>
                            {currentRecipe.instructions.map((instruction, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={`${index + 1}. ${instruction}`}
                                        primaryTypographyProps={{ variant: 'body1' }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Typography variant="body2" color="text.secondary">
                                ⏱️ {currentRecipe.preparationTime}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                👥 {currentRecipe.servings} servings
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                📊 {currentRecipe.difficulty}
                            </Typography>
                        </Box>
                    </Box>
                </MotionPaper>
            </AnimatePresence>
        </Box>
    );
}; 