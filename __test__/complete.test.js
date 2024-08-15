import { render, screen } from '@testing-library/react';
import React from 'react';
import CompletedForm from '../src/components/Completed.js';

describe('App tests', () => {
    it('should contains the heading 1', () => {
        render(<CompletedForm />);
        const heading = screen.getByText(/ Thanks /i);
        expect(heading).toBeInTheDocument()
    });
});