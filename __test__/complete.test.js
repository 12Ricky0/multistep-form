import { render, screen } from '@testing-library/react';
import React from 'react';
import CompletedForm from '../src/components/Completed.js';
import '@testing-library/jest-dom'

describe('App tests', () => {
    localStorage.setItem('name', 'Richard')
    it('should contains the heading 1', () => {
        render(<CompletedForm />);
        const heading = screen.getByRole('heading', {
            name: /Thank you/i
        });
        expect(heading).toBeInTheDocument()

        const name = screen.getByTestId('name')
        expect(name).toHaveTextContent('Richard')
    });
});