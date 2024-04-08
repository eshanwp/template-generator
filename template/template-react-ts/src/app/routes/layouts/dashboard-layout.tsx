import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { pageRoutes } from 'app/constants/page-routes';
import ReactOutlet from 'app/routes/layouts/react-outlet';
import { useAppSelector } from 'shared/hooks/redux-hooks';
import { RootState } from 'shared/redux/store';

const DashboardLayout: FC = () => {
    // The useAppSelector hook is used to select specific pieces of state from the Redux store, and the selected values are then destructured
    const isAuthenticated = useAppSelector<boolean>((state: RootState) => state.authModel?.isAuthenticated);

    /**
     * @author Eshan Priyadarshana <eshanwp@gmail.com>
     * @description If the user is not authenticated, Redirect the user to the login page using the 'Navigate'
     * component from React Router with the 'to' attribute set to the home route specified in 'pageRoutes.home'.
     */
    if (!isAuthenticated) {
        return <Navigate to={pageRoutes.HOME} replace />;
    }

    return <ReactOutlet />;
};

export default DashboardLayout;
