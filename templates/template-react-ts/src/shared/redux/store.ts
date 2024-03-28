import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import persistPlugin, { getPersistor } from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import { models, RootModel } from './models';

const persistConfig = {
    key: import.meta.env.VITE_STORE_NAME, // The key used to store the persisted state.
    storage, // The storage engine to use.
    // blacklist: ['authModel'], // An array of reducer names to exclude from persistence.
    // whitelist: ['authModel'], // An array of reducer names to include in persistence.
};

/**
 * @author Eshan Priyadarshana <eshanwp@gmail.com>
 * @description Initialize the Redux store using the 'init' function and the 'models' object
 */
export const store = init<RootModel>({
    models,
    plugins: [persistPlugin(persistConfig)],
});

// Define the 'Store' type as the type of the 'store' variable
export type Store = typeof store;

// Define the 'Dispatch' type as the type for RematchDispatch of the 'RootModel'
export type Dispatch = RematchDispatch<RootModel>;

// Define the 'RootState' type as the type for RematchRootState of the 'RootModel'
export type RootState = RematchRootState<RootModel>;

export const persist = getPersistor();
