import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from 'shared/redux/store';

/**
 * @author Eshan Priyadarshana <eshanwp@gmail.com>
 * @description Defines a custom hook named useAppDispatch, which allows you to access the Redux store's
 * dispatch function.
 */
export const useAppDispatch = () => useDispatch<Dispatch>();

/**
 * @author Eshan Priyadarshana <eshanwp@gmail.com>
 * @description defines a custom hook named useAppSelector. It essentially allows you to select and access
 * data from the Redux store's state.
 * dispatch function.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
