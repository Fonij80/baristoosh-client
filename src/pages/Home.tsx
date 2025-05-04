import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.language);

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-handwritten text-baristoosh-brown mb-6">
              {t("home.title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("home.subtitle")}
            </h2>
            <p className="text-lg mb-8 text-baristoosh-coffee">
              {t("home.description")}
            </p>
            <Button
              asChild
              className="bg-baristoosh-brown text-white hover:bg-baristoosh-coffee"
            >
              <Link to="/recipes">{t("home.cta")}</Link>
            </Button>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb"
                alt="Homemade Coffee"
                className="rounded-lg shadow-2xl w-full max-w-lg"
              />

              <motion.div
                className="absolute -top-10 -right-10 bg-baristoosh-sage p-4 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <span className="text-baristoosh-brown font-handwritten text-xl">
                  {t("brand.slogan")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-baristoosh-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-handwritten text-center mb-12">
            {direction === "rtl"
              ? "در باریستوش چه چیزی یاد می‌گیرید؟"
              : "What will you learn at Baristoosh?"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ y: -10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1527679124583-9208be990bb5"
                alt="Coffee"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {direction === "rtl" ? "قهوه‌های خانگی" : "Homemade Coffees"}
              </h3>
              <p className="text-baristoosh-coffee">
                {direction === "rtl"
                  ? "انواع قهوه را با ابزارهای ساده در منزل تهیه کنید."
                  : "Make various coffees with simple tools at home."}
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ y: -10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f"
                alt="Tea"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {direction === "rtl" ? "چای‌های معطر" : "Aromatic Teas"}
              </h3>
              <p className="text-baristoosh-coffee">
                {direction === "rtl"
                  ? "چای‌های خوش‌عطر با طعم‌های مختلف را در خانه دم کنید."
                  : "Brew fragrant teas with various flavors at home."}
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ y: -10 }}
            >
              <img
                src="https://images.unsplash.com/photo-1594488569907-839ea74dc15d"
                alt="Smoothie"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {direction === "rtl" ? "نوشیدنی‌های سرد" : "Cold Beverages"}
              </h3>
              <p className="text-baristoosh-coffee">
                {direction === "rtl"
                  ? "اسموتی‌ها و میلک‌شیک‌های خوشمزه و خنک را با میوه‌های تازه بسازید."
                  : "Create delicious and cool smoothies and milkshakes with fresh fruits."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
