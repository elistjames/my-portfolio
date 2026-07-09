import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import EmailFormComponent from './EmailFormComponent';

jest.mock('@emailjs/browser', () => ({
    __esModule: true,
    default: {send: jest.fn()},
}));

// CRA's jest config sets resetMocks:true, which strips the implementation before
// every test, so the resolved value has to be re-attached here rather than above.
beforeEach(() => {
    emailjs.send.mockResolvedValue({status: 200});
});

test('blocks submission and reports both errors when the form is empty', async () => {
    const user = userEvent.setup();
    render(<EmailFormComponent/>);

    await user.click(screen.getByRole('button', {name: /send email/i}));

    expect(screen.getByText(/what's your name/i)).toBeInTheDocument();
    expect(screen.getByText(/must be a valid email address/i)).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
});

test('blocks submission when the email is malformed', async () => {
    const user = userEvent.setup();
    render(<EmailFormComponent/>);

    await user.type(screen.getByPlaceholderText(/your name/i), 'Ada');
    await user.type(screen.getByPlaceholderText(/your email/i), 'ada@nowhere');
    await user.click(screen.getByRole('button', {name: /send email/i}));

    expect(screen.getByText(/must be a valid email address/i)).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
});

test('sends and clears the form when the input is valid', async () => {
    const user = userEvent.setup();
    render(<EmailFormComponent/>);

    const name = screen.getByPlaceholderText(/your name/i);
    const email = screen.getByPlaceholderText(/your email/i);
    const message = screen.getByPlaceholderText(/message/i);

    await user.type(name, 'Ada');
    await user.type(email, 'ada@example.com');
    await user.type(message, 'Hello');
    await user.click(screen.getByRole('button', {name: /send email/i}));

    expect(emailjs.send).toHaveBeenCalledTimes(1);
    const templateParams = emailjs.send.mock.calls[0][2];
    expect(templateParams).toMatchObject({from_name: 'Ada', from_email: 'ada@example.com', message: 'Hello'});

    // The fields are cleared in emailjs.send's .then(), so this settles a tick later.
    await waitFor(() => expect(name).toHaveValue(''));
    expect(email).toHaveValue('');
    expect(message).toHaveValue('');
});
