import React from 'react'
import LoginForm from '../components/LoginForm';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

describe('LoginForm', () => {
    const setUser = jest.fn();
    test('it exists', () => {
        const {getByTestId } = render(<LoginForm setUser={setUser} />);
        expect(getByTestId('loginForm')).toBeTruthy();
    });
});