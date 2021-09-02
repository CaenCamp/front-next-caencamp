import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';

import { ListItem } from './ListItem.stories';

expect.extend(toHaveNoViolations);

describe('Event List Item', () => {
    // eslint-disable-next-line no-console
    const originalError = console.error;
    // eslint-disable-next-line no-undef
    beforeAll(() => {
        // eslint-disable-next-line no-console
        console.error = (...args) => {
            if (/Warning.*not wrapped in act/.test(args[0])) {
                return;
            }
            originalError.call(console, ...args);
        };
    });

    // eslint-disable-next-line no-undef
    afterAll(() => {
        // eslint-disable-next-line no-console
        console.error = originalError;
    });

    it('should display the event title', () => {
        render(<ListItem {...ListItem.args} />);

        const title = screen.getByText("Titre de l'événement");

        expect(title).toBeInTheDocument();
    });

    it('should have a valide accessibility', async () => {
        const { container } = render(<ListItem {...ListItem.args} />);

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
