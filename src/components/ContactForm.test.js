import React from 'react'
import {screen, render, act} from '@testing-library/react'
import ContactForm from './ContactForm'
import userEvent from '@testing-library/user-event'


test('inputs for form', () => {
     render(<ContactForm />)

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    
    userEvent.type(firstName, 'Wei')
    userEvent.type(lastName, 'Wu')
    userEvent.type(email, 'weiwu@lambdaschool.com')
    userEvent.type(message, 'testing is hard')
    const submit = screen.getByRole('button', {name: /submit/i})
        expect(firstName).toHaveValue('Wei');
        expect(lastName).toHaveValue('Wu');
        expect(email).toHaveValue('weiwu@lambdaschool.com');
        expect(message).toHaveValue('testing is hard');
        // userEvent.click(submit)
})