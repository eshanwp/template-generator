import axios from 'axios';
import { manuallyDecrementPromiseCounter, manuallyIncrementPromiseCounter } from 'react-promise-tracker';
import { store } from 'shared/redux/store';

export const abortController = new AbortController();
// When you want to cancel the API, you can use the abortController.abort()

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_CONTEXT_PATH,
});

/**
 * @author Eshan Priyadarshana <eshanwp@gmail.com>
 * @description Request interceptor for API calls
 */
apiInstance.interceptors.request.use(
    async (config) => {
        manuallyIncrementPromiseCounter();
        const { accessToken } = store.getState().authModel;

        if (config) {
            config.signal = abortController.signal;
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

/**
 * @author Eshan Priyadarshana <eshanwp@gmail.com>
 * @description Response interceptor for API calls
 */
apiInstance.interceptors.response.use(
    (response) => {
        manuallyDecrementPromiseCounter();
        return response;
    },
    async function (error) {
        manuallyDecrementPromiseCounter();
        return Promise.reject(error);
    },
);
export default apiInstance;
