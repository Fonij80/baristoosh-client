import { RecipeBook } from "../components/RecipeBook";
import { recipes_fa } from "../data/recipes";

export const Landing = () => {
    return (
        <RecipeBook recipes={recipes_fa} />
    );
}; 