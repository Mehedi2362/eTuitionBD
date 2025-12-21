import { createBrowserRouter } from "react-router";
import Root from "@/components/layout";
import { ErrorPage, About } from "@/pages";
import { ABOUT } from "@/constants";
import { homeRoutes } from "@/pages/home/router";
import { authRoutes } from "@/features/auth/router";
import { tuitionRoutes } from "@/features/tuitions/router";
import { tutorRoutes } from "@/features/tutors/router";

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
            },
            ...authRoutes,
            ...tuitionRoutes,
            ...tutorRoutes

        ],
    },
]);


