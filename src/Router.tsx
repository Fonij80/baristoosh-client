import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { Layout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFoundError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
