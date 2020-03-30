import React from 'react'
import Index from '../components/Index';
import { render } from '@testing-library/react'
describe('Index', () => {
    test('it exists', () => {
        const {getByTestId } = render(<Index />);
        expect(getByTestId('main')).toBeTruthy();
    });
});