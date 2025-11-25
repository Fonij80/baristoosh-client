import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export const Signup = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.language);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [favoriteDrinkType, setFavoriteDrinkType] = useState("coffee");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signup(email, password, fullName, favoriteDrinkType);
      navigate("/");
    } catch (err) {
      setError(
        direction === "rtl"
          ? "ثبت نام ناموفق بود. لطفا دوباره تلاش کنید."
          : "Signup failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md bg-baristoosh-paper shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-handwritten text-center">
            {t("auth_page.signup_title")}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                {t("auth_page.full_name")}
              </label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="bg-white border-baristoosh-coffee/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t("auth_page.email")}
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email@example.com"
                className="bg-white border-baristoosh-coffee/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                {t("auth_page.password")}
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white border-baristoosh-coffee/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="favoriteDrink" className="text-sm font-medium">
                {t("auth_page.favorite_drink")}
              </label>
              <Select
                value={favoriteDrinkType}
                onValueChange={setFavoriteDrinkType}
              >
                <SelectTrigger className="bg-white border-baristoosh-coffee/30">
                  <SelectValue
                    placeholder={t("recipe_page.drink_categories.coffee")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="coffee">
                    {t("recipe_page.drink_categories.coffee")}
                  </SelectItem>
                  <SelectItem value="tea">
                    {t("recipe_page.drink_categories.tea")}
                  </SelectItem>
                  <SelectItem value="smoothie">
                    {t("recipe_page.drink_categories.smoothie")}
                  </SelectItem>
                  <SelectItem value="milkshake">
                    {t("recipe_page.drink_categories.milkshake")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-300 text-red-900 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-baristoosh-brown text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                  <span>
                    {direction === "rtl"
                      ? "لطفا صبر کنید..."
                      : "Please wait..."}
                  </span>
                </div>
              ) : (
                t("auth_page.signup_btn")
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center">
          <div className="w-full text-sm">
            {t("auth_page.have_account_link")}{" "}
            <Link
              to="/login"
              className="text-baristoosh-coffee hover:underline font-medium"
            >
              {t("navbar.links.login")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
