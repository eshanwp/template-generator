import type { Preview } from '@storybook/react';
import {reactRouterParameters, withRouter} from "storybook-addon-react-router-v6";
import {INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import './../src/app/styles/main.scss';

const preview: Preview = {
    decorators: [withRouter],
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            react: {
                appDirectory: true,
                navigation: {
                    pathname: "/",
                },
            },
        },
        layout: 'fullscreen',
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS,
                ...MINIMAL_VIEWPORTS
            },
        },
        reactRouter: reactRouterParameters({}),
    },
};

export default preview;
