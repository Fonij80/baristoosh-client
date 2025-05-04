import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-baristoosh-brown text-white py-8">
      <div className="container mx-auto text-center">
        <p>
          © 2025 {t("brand_name")} - {t("brand_slogan")}
        </p>
      </div>
    </footer>
  );
};
