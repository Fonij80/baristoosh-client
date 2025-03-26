import { Recipe } from '../types/Recipe';
import cappuccino from '../assets/drinks/coffee/capuccino.jpeg';
import espresso from '../assets/drinks/coffee/espresso.jpg';

export const recipes_en: Recipe[] = [
    {
        id: 1,
        title: "Cappucchino",
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
        servings: 1,
        videoUrl: "https://file-examples.com/storage/fe7b9d8b0a5c5b5e7a8a6d3/2017/04/file_example_MP4_480_1_5MG.mp4"
    }
];

export const recipes_fa: Recipe[] = [
    {
        id: 1,
        title: "کاپوچینو",
        category: "coffee",
        description: "شیر و شکر و قهوه",
        ingredients: [
            "قهوه",
            "آب جوش",
            "شکر",
            "شیر"
        ],
        instructions: [
            "مخلوط کردن قهوه و شکر با کمی آب جوش",
            "اضافه کردن شیر هم‌زده شده",
        ],
        imageUrl: cappuccino,
        difficulty: "easy",
        preparationTime: "5 دقیقه",
        servings: 1,
        videoUrl: "https://file-examples.com/storage/fe7b9d8b0a5c5b5e7a8a6d3/2017/04/file_example_MP4_480_1_5MG.mp4"
    },
    {
        id: 2,
        title: "اسپرسو",
        category: "coffee",
        description: "قهوه‌ی تلخ",
        ingredients: [
            "فهوه",
            "آب جوش",
        ],
        instructions: [
            "مخلوط کردن قهوه با کمی آب جوش",
        ],
        imageUrl: espresso,
        difficulty: "easy",
        preparationTime: "5 دقیقه",
        servings: 1,
        videoUrl: "https://file-examples.com/storage/fe7b9d8b0a5c5b5e7a8a6d3/2017/04/file_example_MP4_480_1_5MG.mp4"
    }
]; 