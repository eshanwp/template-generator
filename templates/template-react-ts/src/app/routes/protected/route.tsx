import { RouteObject } from 'react-router-dom';
import { pageRoutes } from 'app/constants/page-routes';
import DashboardLayout from 'app/routes/layouts/dashboard-layout';
import { DashboardPage } from 'pages';

export const protectedRoutes: RouteObject = {
    path: pageRoutes.DASHBOARD,
    element: <DashboardLayout />,
    children: [
        {
            index: true,
            element: <DashboardPage />,
        },
    ],
};
