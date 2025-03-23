import { RecipeBook } from "../components/RecipeBook";
import { recipes } from "../data/recipes";

export const Landing = () => {
    return (
        <RecipeBook recipes={recipes} />
    );
}; 