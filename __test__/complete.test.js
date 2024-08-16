import { render, screen } from '@testing-library/react';
import React from 'react';
import CompletedForm from '../src/components/Completed.js';
import FormOne from '../src/components/FormOne.js';
import user from "@testing-library/user-event";

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

    it('should render the FormOne component', () => {
        render(<FormOne />);
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    // it('should display validation error', async () => {
    //     render(<FormOne />);
    //     const nameInput = screen.getByPlaceholderText('e.g. Stephen King')
    //     const button = await screen.findByRole('button')
    //     user.type(nameInput, "John Doe");

    //     expect(button).toBeDisabled();
    // });
});