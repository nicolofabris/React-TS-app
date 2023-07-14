import { lazy, Suspense } from "react";
import { AuthTabs } from "./pages/auth";
import { useRoutes } from "react-router-dom";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";

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