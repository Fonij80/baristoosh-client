import { useState } from "react";
import { RecipeBook } from "../components/organisms";
import { FilterButtons } from "../components/molecules";
import { recipes_fa } from "../data/recipes";


export const Landing = () => {
    const [filteredRecipes, setFilteredRecipes] = useState(recipes_fa);

    const handleFilter = (category: string) => {
        const filtered = recipes_fa.filter((recipe) => recipe.category.toLowerCase() === category.toLowerCase());
        setFilteredRecipes(filtered);
    };
    return (
        <>
            <FilterButtons onFilter={handleFilter} />
            <RecipeBook recipes={filteredRecipes} />
        </>
    );
}; 