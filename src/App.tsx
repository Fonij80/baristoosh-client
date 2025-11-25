import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import router from "./Router";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
