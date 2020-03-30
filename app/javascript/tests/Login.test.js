import React from 'react'
import Login from '../components/Login';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
describe('Login', () => {
    const setLogin = jest.fn();
    test('it exists', () => {
        const {getByTestId } = render(<Login setLogin={setLogin} />);
        expect(getByTestId('login')).toBeTruthy();
    });
});

