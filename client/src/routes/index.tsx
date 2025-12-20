import { createBrowserRouter } from "react-router";
import Root from "@/components/layout";
import { Home, ErrorPage, About } from "@/pages";
import { ABOUT } from "@/constants";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ABOUT,
                element: <About />,
            }

        ],
    },
]);


