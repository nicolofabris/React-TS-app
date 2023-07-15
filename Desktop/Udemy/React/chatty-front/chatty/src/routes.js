import { lazy, Suspense } from "react";
import { AuthTabs, ForgotPassword } from "./pages/auth";
import { useRoutes } from "react-router-dom";


export const AppRouter = () => {
    const elements = useRoutes([
        {
            path: '/',
            element: <AuthTabs/>
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword/>
        },
    ])

    return elements
}