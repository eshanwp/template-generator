import { FC } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { persist } from 'shared/redux/store.ts';
import { Outlet } from 'react-router-dom';

const fallbackRender: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div>
            {error.message}
            <button
                onClick={() => {
                    resetErrorBoundary();
                    persist.purge();
                }}
            >
                Reset
            </button>
        </div>
    );
};

const ReactOutlet: FC = () => (
    <ErrorBoundary fallbackRender={fallbackRender}>
        <Outlet />
    </ErrorBoundary>
);

export default ReactOutlet;
