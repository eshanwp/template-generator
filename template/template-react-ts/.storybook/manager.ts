import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: '',
        brandUrl: '',
        brandImage: '',
        brandTarget: '_self',

        appBg: '#eff7f6',
        colorPrimary: '#ffffff',
        colorSecondary: '#029390',
    }),
});
