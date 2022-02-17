import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);


describe('Contact component', () => {
    it('renders', () => {
        render(
            <Contact />
        )
    });

    it('matches snapshot', () => {
        const { asFragment } = render( <Contact /> );

        expect(asFragment()).toMatchSnapshot();
    });

    it('shows contact me', () => {
        const { getByTestId } = render( <Contact /> );

        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });

    it('shows submit button text', () => {
        const { getByTestId } = render( <Contact /> );

        expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    });
});