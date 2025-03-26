import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./pages";
import { Layout, NotFoundError } from "./components/organisms";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundError />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
        ],
    },
]);

export default router;
