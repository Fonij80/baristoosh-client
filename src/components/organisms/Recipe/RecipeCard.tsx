import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Recipe } from '../../../types/Recipe';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

const MotionCard = motion(Card);

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const getCategoryIcon = () => {
    switch (recipe.category) {
      case 'coffee':
        return <CoffeeIcon sx={{ color: '#4A2C2A' }} />;
      case 'tea':
        return <LocalCafeIcon sx={{ color: '#2E7D32' }} />;
      default:
        return <LocalDrinkIcon sx={{ color: '#6B4423' }} />;
    }
  };

  return (
    <MotionCard
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      sx={{
        width: 300,
        height: 400,
        margin: 2,
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 6
        }
      }}
    >
      <Box sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}>
        <IconButton
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }
          }}
        >
          {getCategoryIcon()}
        </IconButton>
      </Box>
      <CardMedia
        component="img"
        height="200"
        image={recipe.imageUrl}
        alt={recipe.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ height: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {recipe.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
          <Chip
            icon={<Typography>⏱️</Typography>}
            label={recipe.preparationTime}
            size="small"
            variant="outlined"
          />
          <Chip
            icon={<Typography>👥</Typography>}
            label={recipe.servings}
            size="small"
            variant="outlined"
          />
          <Chip
            icon={<Typography>📊</Typography>}
            label={recipe.difficulty}
            size="small"
            variant="outlined"
          />
        </Box>
      </CardContent>
    </MotionCard>
  );
}; 