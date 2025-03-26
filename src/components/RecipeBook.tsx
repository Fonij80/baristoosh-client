import { useState } from 'react';
import { Box, IconButton, Paper, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Recipe } from '../types/Recipe';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { RecipeDetails } from './RecipeDetails';
import { RecipeMedia } from './RecipeMedia';

const MotionPaper = motion(Paper);

interface RecipeBookProps {
    recipes: Recipe[];
}

export const RecipeBook = ({ recipes }: RecipeBookProps) => {
    const [currentPage, setCurrentPage] = useState(0);
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
                        position: 'relative'
                    }}
                >
                    {/* Recipe Details */}
                    <RecipeDetails currentRecipe={currentRecipe} />
                    {/* Image or Video */}
                    <RecipeMedia currentRecipe={currentRecipe} />


                </MotionPaper>
            </AnimatePresence>
        </Box>
    );
};
