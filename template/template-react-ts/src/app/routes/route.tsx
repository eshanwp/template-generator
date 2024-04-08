import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from 'app/routes/layouts/auth-layout';
import ErrorPage from 'app/routes/errors/error-page';
import { LoginPage } from 'pages';
import { protectedRoutes } from './protected/route';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
        ],
    },
    protectedRoutes,
]);

export default router;
