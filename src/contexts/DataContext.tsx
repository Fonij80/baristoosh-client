import { createContext, useContext, useState, ReactNode } from "react";

export interface Recipe {
  id: string;
  title: {
    fa: string;
    en: string;
  };
  description: {
    fa: string;
    en: string;
  };
  ingredients: {
    fa: string[];
    en: string[];
  };
  instructions: {
    fa: string[];
    en: string[];
  };
  image: string;
  type: string;
}

export interface Product {
  id: string;
  title: {
    fa: string;
    en: string;
  };
  description: {
    fa: string;
    en: string;
  };
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface DataContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const initialRecipes: Recipe[] = [
  {
    id: "1",
    title: {
      fa: "قهوه دمی فرانسوی",
      en: "French Press Coffee",
    },
    description: {
      fa: "یک روش ساده و کلاسیک برای دم کردن قهوه با عطر و طعم عالی",
      en: "A simple and classic method for brewing coffee with excellent aroma and taste",
    },
    ingredients: {
      fa: ["۳۰ گرم قهوه آسیاب شده", "۵۰۰ میلی‌لیتر آب داغ"],
      en: ["30g coarsely ground coffee", "500ml hot water"],
    },
    instructions: {
      fa: [
        "قهوه را در فرنچ پرس بریزید",
        "آب داغ را اضافه کنید",
        "۴ دقیقه صبر کنید",
        "پیستون را به آرامی فشار دهید",
        "قهوه را سرو کنید",
      ],
      en: [
        "Add coffee to French press",
        "Pour hot water",
        "Wait 4 minutes",
        "Slowly press down the plunger",
        "Serve your coffee",
      ],
    },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    type: "coffee",
  },
  {
    id: "2",
    title: {
      fa: "اسموتی توت فرنگی و موز",
      en: "Strawberry Banana Smoothie",
    },
    description: {
      fa: "یک نوشیدنی خنک و سالم برای صبحانه یا میان‌وعده",
      en: "A cool and healthy drink for breakfast or snack",
    },
    ingredients: {
      fa: ["۱ موز", "۱۰ توت فرنگی", "۱ پیمانه شیر", "۱ قاشق عسل"],
      en: ["1 banana", "10 strawberries", "1 cup milk", "1 tbsp honey"],
    },
    instructions: {
      fa: [
        "موز را خرد کنید",
        "توت فرنگی‌ها را بشویید و ساقه آنها را جدا کنید",
        "همه مواد را داخل مخلوط‌کن بریزید",
        "به مدت ۳۰ ثانیه میکس کنید",
        "در لیوان سرو کنید",
      ],
      en: [
        "Chop the banana",
        "Wash strawberries and remove stems",
        "Put all ingredients in blender",
        "Mix for 30 seconds",
        "Serve in a glass",
      ],
    },
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82",
    type: "smoothie",
  },
  {
    id: "3",
    title: {
      fa: "چای ماسالا",
      en: "Masala Chai",
    },
    description: {
      fa: "چای هندی معطر با ادویه‌های گرم",
      en: "Aromatic Indian tea with warm spices",
    },
    ingredients: {
      fa: [
        "۲ قاشق چای سیاه",
        "۴ عدد هل سبز",
        "۱ چوب دارچین",
        "۲ عدد میخک",
        "۱ تکه کوچک زنجبیل",
        "۱ پیمانه آب",
        "۱ پیمانه شیر",
        "شکر به میزان دلخواه",
      ],
      en: [
        "2 tsp black tea leaves",
        "4 green cardamom pods",
        "1 cinnamon stick",
        "2 cloves",
        "1 small piece of ginger",
        "1 cup water",
        "1 cup milk",
        "Sugar to taste",
      ],
    },
    instructions: {
      fa: [
        "آب را در قابلمه بریزید و ادویه‌ها را اضافه کنید",
        "آب را بجوشانید",
        "چای را اضافه کنید و ۲ دقیقه دم کنید",
        "شیر را اضافه کنید و به آرامی گرم کنید",
        "شکر اضافه کنید و هم بزنید",
        "چای را صاف کنید و سرو نمایید",
      ],
      en: [
        "Pour water in a pot and add spices",
        "Bring water to a boil",
        "Add tea and steep for 2 minutes",
        "Add milk and heat gently",
        "Add sugar and stir",
        "Strain and serve the tea",
      ],
    },
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f",
    type: "tea",
  },
];

const initialProducts: Product[] = [
  {
    id: "1",
    title: {
      fa: "بسته قهوه دمی خانگی",
      en: "Home Brew Coffee Kit",
    },
    description: {
      fa: "همه چیز برای تهیه قهوه دمی در منزل",
      en: "Everything you need to brew coffee at home",
    },
    price: 59.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: "2",
    title: {
      fa: "بسته چای گیاهی",
      en: "Herbal Tea Set",
    },
    description: {
      fa: "مجموعه‌ای از چای‌های گیاهی برای سلامتی",
      en: "Collection of herbal teas for wellness",
    },
    price: 39.99,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
  },
  {
    id: "3",
    title: {
      fa: "بسته اسموتی میوه‌ای",
      en: "Fruit Smoothie Pack",
    },
    description: {
      fa: "میوه‌های خشک آماده برای اسموتی",
      en: "Ready-to-blend dried fruits for smoothies",
    },
    price: 24.99,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
  },
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addRecipe = (recipe: Recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      updateCartItemQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <DataContext.Provider
      value={{
        recipes,
        addRecipe,
        products,
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
