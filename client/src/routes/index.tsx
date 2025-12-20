import { createBrowserRouter } from "react-router";
import Root from "@/components/layout";
import { Home, ErrorPage, About } from "@/pages";
import { ABOUT } from "@/constants";
import { homeRoutes } from "@/pages/home/router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            ...homeRoutes,
            {
                path: ABOUT,
                element: <About />,
            }

        ],
    },
]);


