export interface Recipe {
    id: number;
    title: string;
    category: 'coffee' | 'tea' | 'other';
    description: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    difficulty: 'easy' | 'medium' | 'hard';
    preparationTime: string;
    servings: number;
    videoUrl: string;
} 