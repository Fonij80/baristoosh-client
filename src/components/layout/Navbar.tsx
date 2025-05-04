import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, User } from "lucide-react";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "fa" ? "rtl" : "ltr";
  };

  return (
    <header className="bg-baristoosh-cream py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-handwritten text-baristoosh-brown">
            {t("brand.name")}
          </h1>
          <span className="text-sm text-baristoosh-coffee ml-2 mr-2">
            {t("brand.slogan")}
          </span>
        </Link>

        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe size={16} />
            <span>{language === "fa" ? "En" : "فا"}</span>
          </Button>

          <nav>
            <ul className="flex items-center space-x-6 rtl:space-x-reverse">
              <li>
                <Link
                  to="/"
                  className="text-baristoosh-brown hover:text-baristoosh-coffee transition-colors"
                >
                  {t("navbar.links.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/recipes"
                  className="text-baristoosh-brown hover:text-baristoosh-coffee transition-colors"
                >
                  {t("navbar.links.recipes")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-baristoosh-brown hover:text-baristoosh-coffee transition-colors"
                >
                  {t("navbar.links.shop")}
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-baristoosh-brown hover:text-baristoosh-coffee transition-colors"
                >
                  <User size={16} />
                  {t("navbar.links.login")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
