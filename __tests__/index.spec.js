/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../pages/index';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByText('Bienvenue sur le site des CaenCamp');

        expect(heading).toBeInTheDocument();
    });
});
