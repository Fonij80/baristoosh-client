import { useState } from 'react';
import { Box, Paper, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Recipe } from '../../../types/Recipe';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconBtn } from '../../atoms';
import { RecipePage } from './RecipePage';

const MotionPaper = motion.create(Paper);

interface RecipeBookProps {
    recipes: Recipe[];
}

export const RecipeBook = ({ recipes }: RecipeBookProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    const nextPage = () => {
        setCurrentPage(prev => (prev < recipes.length - 1 ? prev + 1 : 0));
    };

    const prevPage = () => {
        setCurrentPage(prev => (prev > 0 ? prev - 1 : recipes.length - 1));
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
            <IconBtn icon={<ChevronLeftIcon />} onClick={prevPage} direction='left' />
            <IconBtn icon={<ChevronRightIcon />} onClick={nextPage} direction='right' />

            <AnimatePresence mode="wait">
                <MotionPaper
                    key={currentPage}
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -180, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    elevation={3}
                    sx={{
                        width: '80%',
                        maxWidth: '1000px',
                        height: '70vh',
                        borderRadius: 4,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        position: 'relative'
                    }}
                >
                    <RecipePage currentRecipe={currentRecipe} />
                </MotionPaper>
            </AnimatePresence>
        </Box>
    );
};
