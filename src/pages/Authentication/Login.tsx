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
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.language);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(
        direction === "rtl"
          ? "ورود ناموفق بود. لطفا دوباره تلاش کنید."
          : "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);

    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setError(
        direction === "rtl"
          ? "ورود با گوگل ناموفق بود. لطفا دوباره تلاش کنید."
          : "Google login failed. Please try again."
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
            {t("nav.login")}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t("auth.email")}
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
                {t("auth.password")}
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
                t("auth.loginButton")
              )}
            </Button>
          </form>

          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-baristoosh-coffee/30"></div>
            <span className="mx-4 text-sm text-baristoosh-coffee">
              {direction === "rtl" ? "یا" : "OR"}
            </span>
            <div className="flex-grow border-t border-baristoosh-coffee/30"></div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full border-baristoosh-coffee/30 bg-white"
            disabled={isLoading}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            {t("auth.googleLogin")}
          </Button>
        </CardContent>

        <CardFooter className="text-center">
          <div className="w-full text-sm">
            {t("auth.noAccount")}{" "}
            <Link
              to="/signup"
              className="text-baristoosh-coffee hover:underline font-medium"
            >
              {t("nav.signup")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
