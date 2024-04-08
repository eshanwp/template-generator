import { FC } from 'react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <button onClick={() => navigate('/')}>Home</button>;
        }
    }

    return <div>Something went wrong</div>;
};
export default ErrorPage;
