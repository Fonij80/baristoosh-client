import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
    {
        id: 1,
        title: "Classic Espresso",
        category: "coffee",
        description: "A rich and bold shot of pure espresso, the foundation of many coffee drinks.",
        ingredients: [
            "18g finely ground coffee beans",
            "Hot water (90-96°C)",
            "Optional: sugar to taste"
        ],
        instructions: [
            "Grind coffee beans to a fine consistency",
            "Tamp the ground coffee firmly into the portafilter",
            "Lock the portafilter into the espresso machine",
            "Extract for 25-30 seconds until you get 30ml of espresso",
            "Serve immediately"
        ],
        imageUrl: "https://images.unsplash.com/photo-1510590339098-8f4b9f6c0c0e",
        difficulty: "medium",
        preparationTime: "5 minutes",
        servings: 1
    },
    {
        id: 2,
        title: "Green Tea Latte",
        category: "tea",
        description: "A creamy and smooth green tea latte with a perfect balance of sweetness.",
        ingredients: [
            "2 teaspoons matcha powder",
            "2 tablespoons hot water",
            "1 cup milk (any type)",
            "2 tablespoons sweetener (optional)"
        ],
        instructions: [
            "Sift matcha powder into a bowl",
            "Add hot water and whisk until smooth",
            "Heat milk until steaming",
            "Pour matcha mixture into a cup",
            "Add steamed milk and stir gently"
        ],
        imageUrl: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
        difficulty: "easy",
        preparationTime: "10 minutes",
        servings: 1
    },
    {
        id: 3,
        title: "Caramel Macchiato",
        category: "coffee",
        description: "A delicious layered drink with vanilla, espresso, and caramel.",
        ingredients: [
            "2 shots espresso",
            "Vanilla syrup",
            "Steamed milk",
            "Caramel sauce",
            "Ice (for iced version)"
        ],
        instructions: [
            "Add vanilla syrup to the cup",
            "Pour steamed milk (or cold milk for iced)",
            "Add espresso shots",
            "Top with caramel sauce",
            "Optional: Add ice for iced version"
        ],
        imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
        difficulty: "medium",
        preparationTime: "8 minutes",
        servings: 1
    }
]; 