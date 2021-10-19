import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';

import '../src/styles/core.css';
import '../src/styles/advanced.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    nextRouter: {
        Provider: RouterContext.Provider,
        path: '/', // defaults to `/`
        asPath: '/', // defaults to `/`
        query: {}, // defaults to `{}`
        push() {}, // defaults to using addon actions integration,
        //   can override any method in the router
    },
};
