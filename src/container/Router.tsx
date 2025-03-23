import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../pages";
import { Layout, NotFoundError } from "../components";


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
