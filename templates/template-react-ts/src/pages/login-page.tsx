import { FC } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import axiosInstance from 'app/axios/axios-instance';

/**
 *
 */
const LoginPage: FC<ILoginPageProps> = () => {
    const { showBoundary } = useErrorBoundary();

    /**
     * @author Eshan Priyadarshana <esahnwp@gmail.com>
     * @description
     */
    const api = async () => {
        await axiosInstance.get('https://dummy.restapiexample.com/api/v1/employee');
        // throw new Error('Error');
    };

    return (
        <div>
            LoginPage
            <button
                onClick={async () => {
                    try {
                        await api();
                    } catch (error) {
                        showBoundary(error);
                    }
                }}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;
