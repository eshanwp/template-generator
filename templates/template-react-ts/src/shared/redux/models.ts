import { Models } from '@rematch/core';
import { loginModel } from 'features/login/model/login-model';

/**
 * @author Eshan Priyadarshana <eshanwp@gmail.com>
 * @description Define an interface called RootModel that extends the Models interface with a reference to itself.
 */
export interface RootModel extends Models<RootModel> {
    authModel: typeof loginModel;
}

// Create an object 'models' of type 'RootModel'.
export const models: RootModel = {
    authModel: loginModel,
};
