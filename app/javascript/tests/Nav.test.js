import {render} from "@testing-library/react";
import Nav from "../components/Nav";
import React from "react";

describe('Nav', () => {
    const setUser = jest.fn();
    let user = {
        name: 'mike',
        email: 'miker1692',
        id: 1
    }
    test('it exists', () => {
        const {getByTestId } = render(<Nav setUser={setUser} user={user} />);
        expect(getByTestId('nav')).toBeTruthy();
    });
});