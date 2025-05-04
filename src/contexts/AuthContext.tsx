import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  fullName: string;
  favoriteDrinkType: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  signup: (
    email: string,
    password: string,
    fullName: string,
    favoriteDrinkType: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login functionality
    setUser({
      id: "1",
      email,
      fullName: "کاربر نمونه",
      favoriteDrinkType: "coffee",
    });
  };

  const loginWithGoogle = async () => {
    // Mock Google login
    setUser({
      id: "2",
      email: "google@example.com",
      fullName: "کاربر گوگل",
      favoriteDrinkType: "tea",
    });
  };

  const signup = async (
    email: string,
    password: string,
    fullName: string,
    favoriteDrinkType: string
  ) => {
    // Mock signup functionality
    setUser({
      id: "3",
      email,
      fullName,
      favoriteDrinkType,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
