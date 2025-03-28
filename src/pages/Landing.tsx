import { useState, useEffect } from "react";
import { RecipeBook } from "../components/organisms";
import { FilterButtons } from "../components/molecules";
import { recipes_fa } from "../data/recipes";

export const Landing = () => {
    const [filteredRecipes, setFilteredRecipes] = useState(recipes_fa);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredRecipes(recipes_fa);
        } else {
            const filtered = recipes_fa.filter(recipe =>
                selectedCategories.includes(recipe.category.toLowerCase())
            );
            setFilteredRecipes(filtered);
        }
    }, [selectedCategories]);

    const handleFilter = (category: string, isSelected: boolean) => {
        setSelectedCategories(prev => {
            if (isSelected) {
                return [...prev, category];
            } else {
                return prev.filter(c => c !== category);
            }
        });
    };

    return (
        <>
            <FilterButtons
                onFilter={handleFilter}
                selectedCategories={selectedCategories}
            />
            <RecipeBook recipes={filteredRecipes} />
        </>
    );
};
