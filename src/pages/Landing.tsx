import { RecipeBook } from "../components/organisms/Recipe/RecipeBook";
import { recipes_fa } from "../data/recipes";

export const Landing = () => {
    return (
        <RecipeBook recipes={recipes_fa} />
    );
}; 