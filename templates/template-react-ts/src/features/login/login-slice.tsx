import { FC } from 'react';
import LoginForm from 'features/login/components/login-form';
import textLocalization from 'text-localization';

/**
 *
 */
const LoginSlice: FC<ILoginSliceProps> = () => {
    return (
        <div className="login-slice-wrapper">
            LoginSlice
            {textLocalization.LOGIN}
            <LoginForm />
        </div>
    );
};

export default LoginSlice;
