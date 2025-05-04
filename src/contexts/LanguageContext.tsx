import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fa" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  direction: "rtl" | "ltr";
}

const translations = {
  // Header
  "brand.name": {
    fa: "باریستوش",
    en: "Baristoosh",
  },
  "brand.slogan": {
    fa: "باریستای خودت باش!",
    en: "Be your own Barista!",
  },
  "nav.home": {
    fa: "خانه",
    en: "Home",
  },
  "nav.recipes": {
    fa: "کتاب دستورها",
    en: "Recipe Book",
  },
  "nav.tutorials": {
    fa: "آموزش‌ها",
    en: "Tutorials",
  },
  "nav.shop": {
    fa: "فروشگاه",
    en: "Shop",
  },
  "nav.login": {
    fa: "ورود",
    en: "Login",
  },
  "nav.signup": {
    fa: "ثبت نام",
    en: "Sign Up",
  },

  // Home Page
  "home.title": {
    fa: "به باریستوش خوش آمدید",
    en: "Welcome to Baristoosh",
  },
  "home.subtitle": {
    fa: "هنر نوشیدنی‌های دست‌ساز",
    en: "The Art of Handcrafted Beverages",
  },
  "home.description": {
    fa: "بدون نیاز به تجهیزات گران‌قیمت، نوشیدنی‌های خوشمزه در خانه بسازید.",
    en: "Create delicious beverages at home without expensive equipment.",
  },
  "home.cta": {
    fa: "دستورها را ببینید",
    en: "See Recipes",
  },

  // Recipe Book
  "recipes.title": {
    fa: "کتاب دستورهای باریستوش",
    en: "Baristoosh Recipe Book",
  },
  "recipes.search": {
    fa: "جستجوی دستور",
    en: "Search Recipes",
  },
  "recipes.filter": {
    fa: "فیلتر بر اساس نوع",
    en: "Filter by Type",
  },
  "recipes.add": {
    fa: "افزودن دستور جدید",
    en: "Add New Recipe",
  },
  "recipes.ingredients": {
    fa: "مواد لازم",
    en: "Ingredients",
  },
  "recipes.instructions": {
    fa: "دستورالعمل",
    en: "Instructions",
  },
  "recipes.type.coffee": {
    fa: "قهوه",
    en: "Coffee",
  },
  "recipes.type.tea": {
    fa: "چای",
    en: "Tea",
  },
  "recipes.type.smoothie": {
    fa: "اسموتی",
    en: "Smoothie",
  },
  "recipes.type.milkshake": {
    fa: "میلک‌شیک",
    en: "Milkshake",
  },
  "recipes.type.all": {
    fa: "همه",
    en: "All",
  },
  "recipes.nextPage": {
    fa: "صفحه بعد",
    en: "Next Page",
  },
  "recipes.prevPage": {
    fa: "صفحه قبل",
    en: "Previous Page",
  },

  // Login/Signup
  "auth.email": {
    fa: "ایمیل",
    en: "Email",
  },
  "auth.password": {
    fa: "رمز عبور",
    en: "Password",
  },
  "auth.fullName": {
    fa: "نام کامل",
    en: "Full Name",
  },
  "auth.favoriteDrink": {
    fa: "نوشیدنی مورد علاقه",
    en: "Favorite Drink",
  },
  "auth.loginButton": {
    fa: "ورود",
    en: "Login",
  },
  "auth.signupButton": {
    fa: "ثبت نام",
    en: "Sign Up",
  },
  "auth.googleLogin": {
    fa: "ورود با گوگل",
    en: "Login with Google",
  },
  "auth.noAccount": {
    fa: "حساب کاربری ندارید؟",
    en: "Don't have an account?",
  },
  "auth.haveAccount": {
    fa: "حساب کاربری دارید؟",
    en: "Already have an account?",
  },

  // Add Recipe
  "addRecipe.title": {
    fa: "افزودن دستور جدید",
    en: "Add New Recipe",
  },
  "addRecipe.recipeTitle": {
    fa: "عنوان",
    en: "Title",
  },
  "addRecipe.description": {
    fa: "توضیحات",
    en: "Description",
  },
  "addRecipe.ingredients": {
    fa: "مواد لازم",
    en: "Ingredients",
  },
  "addRecipe.instructions": {
    fa: "دستورالعمل",
    en: "Instructions",
  },
  "addRecipe.image": {
    fa: "تصویر",
    en: "Image",
  },
  "addRecipe.type": {
    fa: "نوع نوشیدنی",
    en: "Drink Type",
  },
  "addRecipe.submit": {
    fa: "ثبت دستور",
    en: "Submit Recipe",
  },

  // Shop
  "shop.title": {
    fa: "فروشگاه باریستوش",
    en: "Baristoosh Shop",
  },
  "shop.addToCart": {
    fa: "افزودن به سبد خرید",
    en: "Add to Cart",
  },
  "shop.checkout": {
    fa: "تکمیل خرید",
    en: "Checkout",
  },
  "shop.price": {
    fa: "قیمت",
    en: "Price",
  },
  "shop.cart": {
    fa: "سبد خرید",
    en: "Cart",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fa"); // Default to Farsi

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to key if translation not found
  };

  const direction = language === "fa" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
