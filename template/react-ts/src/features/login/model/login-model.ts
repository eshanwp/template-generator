import { createModel } from '@rematch/core';
import { RootModel } from 'shared/redux/models';

export const loginModel = createModel<RootModel>()({
    state: {
        accessToken: '',
        isAuthenticated: true,
    } as ILoginModel,
    reducers: {
        login(_state: ILoginModel, payload: ILoginModel) {
            return payload;
        },
    },
});
