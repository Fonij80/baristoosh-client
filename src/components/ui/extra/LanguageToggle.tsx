import { Button } from "../button";
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "fa" ? "rtl" : "ltr";
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="ghost"
      onClick={toggleLanguage}
    >
      {i18n.language === "en" ? "Fa" : "En"}
    </Button>
  );
};
