import { render, screen } from '@testing-library/react';
import React from 'react';
import FormOne from '../components/FormOne.js';
import CompletedForm from '../components/Completed.js';
import user from "@testing-library/user-event";
import FormTwo from '../components/FormTwo.js';
import FormThree from '../components/FormThree.js';
import FormFour from '../components/FormFour.js';

jest.mock('react-responsive', () => ({
    __esModule: true,
    default: jest.fn((props) => (props.children)),
}));

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
        localStorage.removeItem('name')

    });

    it('should render the FormOne component', () => {

        render(<FormOne />);
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    it('should display validation error', async () => {
        const mock = "This field is required";
        render(<FormOne nameError={mock} />);
        const button = screen.getAllByRole('button', { name: /next step/i })[0]

        user.click(button)
        const error = await screen.findByText("This field is required")
        expect(error).toBeInTheDocument();
    });

    it('should render the FormTwo component', () => {
        render(<FormTwo />);
        const form = screen.getByRole('heading', { name: /select your plan/i });
        expect(form).toBeInTheDocument();
    });
    it('users can make a choice', async () => {

        const onChange = jest.fn();
        render(<FormTwo onChange={onChange} />);
        const button = screen.getByRole('checkbox');
        user.click(button)
        expect(onChange).toHaveBeenCalled()
    });

    it('should render the FormThree component', () => {
        render(<FormThree />);
        const form = screen.getAllByRole('checkbox');
        expect(form).toHaveLength(3);
    });

    it('users can select addons', async () => {

        const onChange = jest.fn();
        render(<FormThree custProfile={onChange} />);
        const button = screen.getAllByRole('checkbox')[2];
        user.click(button)
        expect(onChange).toHaveBeenCalled()
    });

    it('should render the FormFour component', () => {
        render(<FormFour />);
        const form = screen.getByRole('heading', { name: /finishing up/i });
        expect(form).toBeInTheDocument();
    });

    it('users should be able to submit', async () => {
        const onClick = jest.fn();

        render(<FormFour onSubmit={onClick} />);
        const button = screen.getAllByRole('button', { name: /confirm/i })[0];
        user.click(button)
        expect(onClick).toHaveBeenCalled()

    })

});
