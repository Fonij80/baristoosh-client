import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useData, Recipe } from "@/contexts/DataContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const RecipeBook = () => {
  const { t } = useTranslation();
  const language = i18n.language;
  const direction = i18n.dir(i18n.language);
  const { recipes } = useData();
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");

  // Filter recipes based on search term and selected type
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title[language]
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || recipe.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Get current recipe
  const currentRecipe = filteredRecipes[currentPage];

  // Handle page turning
  const turnPage = (direction: "next" | "prev") => {
    if (isFlipping) return;

    setFlipDirection(direction);
    setIsFlipping(true);

    setTimeout(() => {
      if (direction === "next") {
        setCurrentPage((prev) =>
          prev < filteredRecipes.length - 1 ? prev + 1 : 0
        );
      } else {
        setCurrentPage((prev) =>
          prev > 0 ? prev - 1 : filteredRecipes.length - 1
        );
      }
      setIsFlipping(false);
    }, 750); // Half the animation duration
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-handwritten text-center mb-8">
          {t("recipe_page.title")}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Input
              placeholder={t("recipe_page.search_bar")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-baristoosh-paper border-baristoosh-coffee"
            />
          </div>

          <Tabs
            defaultValue="all"
            onValueChange={setSelectedType}
            className="w-full md:w-auto"
          >
            <TabsList className="bg-baristoosh-beige">
              <TabsTrigger value="all">
                {t("recipe_page.drink_categories.all")}
              </TabsTrigger>
              <TabsTrigger value="coffee">
                {t("recipe_page.drink_categories.coffee")}
              </TabsTrigger>
              <TabsTrigger value="tea">
                {t("recipe_page.drink_categories.tea")}
              </TabsTrigger>
              <TabsTrigger value="smoothie">
                {t("recipe_page.drink_categories.smoothie")}
              </TabsTrigger>
              <TabsTrigger value="milkshake">
                {t("recipe_page.drink_categories.milkshake")}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button
            asChild
            className="bg-baristoosh-green text-baristoosh-brown hover:bg-baristoosh-sage"
          >
            <Link to="/add-recipe" className="flex items-center gap-2">
              <Plus size={16} />
              {t("recipe_page.add_btn")}
            </Link>
          </Button>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Book container */}
            <div className="bg-baristoosh-paper rounded-lg overflow-hidden book-shadow">
              <div className="flex flex-col md:flex-row h-[600px] relative">
                {/* Left page - Content and Instructions */}
                <motion.div
                  className={`w-full md:w-1/2 p-6 md:p-10 ${
                    isFlipping
                      ? flipDirection === "next"
                        ? "animate-turn-page"
                        : "animate-turn-page-reverse"
                      : ""
                  }`}
                  style={{ backgroundColor: "#f8f5e6" }}
                >
                  {currentRecipe && (
                    <div className="h-full flex flex-col">
                      <h2 className="text-2xl font-handwritten text-baristoosh-brown mb-4">
                        {currentRecipe.title[language]}
                      </h2>
                      <p className="text-baristoosh-coffee mb-6">
                        {currentRecipe.description[language]}
                      </p>

                      <h3 className="text-xl font-semibold mb-3">
                        {t("recipe_page.ingredients")}:
                      </h3>
                      <ul className="list-disc list-inside mb-6">
                        {currentRecipe.ingredients[language].map(
                          (ingredient, idx) => (
                            <li key={idx} className="mb-1">
                              {ingredient}
                            </li>
                          )
                        )}
                      </ul>

                      <h3 className="text-xl font-semibold mb-3">
                        {t("recipe_page.instructions")}:
                      </h3>
                      <ol className="list-decimal list-inside">
                        {currentRecipe.instructions[language].map(
                          (instruction, idx) => (
                            <li key={idx} className="mb-2">
                              {instruction}
                            </li>
                          )
                        )}
                      </ol>
                    </div>
                  )}
                </motion.div>

                {/* Right page - Image */}
                <div className="w-full md:w-1/2 page-shadow relative h-full">
                  {currentRecipe && (
                    <div className="h-full relative overflow-hidden">
                      <img
                        src={currentRecipe.image}
                        alt={currentRecipe.title[language]}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <span className="text-white text-3xl font-handwritten drop-shadow-lg">
                          {currentRecipe.title[language]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              <Button
                onClick={() => turnPage("prev")}
                className="flex items-center gap-2 bg-baristoosh-brown text-white"
                disabled={isFlipping}
              >
                {direction === "rtl" ? (
                  <ChevronRight size={16} />
                ) : (
                  <ChevronLeft size={16} />
                )}
                {t("recipe_page.prev_page_btn")}
              </Button>

              <Button
                onClick={() => turnPage("next")}
                className="flex items-center gap-2 bg-baristoosh-brown text-white"
                disabled={isFlipping}
              >
                {t("recipe_page.next_page_btn")}
                {direction === "rtl" ? (
                  <ChevronLeft size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </Button>
            </div>

            {/* Page indicator */}
            <div className="text-center mt-4">
              {`${currentPage + 1} / ${filteredRecipes.length}`}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-baristoosh-coffee">
              {direction === "rtl"
                ? "هیچ دستور پختی با این شرایط یافت نشد."
                : "No recipes found matching your criteria."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
